import React, { useRef, useMemo, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const ParticleNetwork = ({ count }) => {
  const pointsRef = useRef();
  const linesRef = useRef();
  
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = [];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
      vel.push(new THREE.Vector3((Math.random() - 0.5) * 0.015, (Math.random() - 0.5) * 0.015, (Math.random() - 0.5) * 0.015));
    }
    return [pos, vel];
  }, [count]);

  const maxConnections = count * count;
  const linePositions = useMemo(() => new Float32Array(maxConnections * 3), [maxConnections]);
  
  const pulseCount = 8;
  const pulses = useRef(Array.from({ length: pulseCount }, () => ({
    active: false, p1: 0, p2: 0, progress: 0, speed: Math.random() * 0.01 + 0.01
  })));
  
  const pulseGeom = useRef();

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;
    
    const pos = pointsRef.current.geometry.attributes.position.array;
    
    // move particles
    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;
      
      // bounds bounce
      if (Math.abs(pos[i * 3]) > 10) velocities[i].x *= -1;
      if (Math.abs(pos[i * 3 + 1]) > 7.5) velocities[i].y *= -1;
      if (pos[i * 3 + 2] > 2 || pos[i * 3 + 2] < -10) velocities[i].z *= -1;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    // update lines
    let vertexpos = 0;
    let connections = [];
    
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i*3] - pos[j*3];
        const dy = pos[i*3+1] - pos[j*3+1];
        const dz = pos[i*3+2] - pos[j*3+2];
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        
        if (dist < 2.5) {
          linePositions[vertexpos++] = pos[i*3];
          linePositions[vertexpos++] = pos[i*3+1];
          linePositions[vertexpos++] = pos[i*3+2];
          
          linePositions[vertexpos++] = pos[j*3];
          linePositions[vertexpos++] = pos[j*3+1];
          linePositions[vertexpos++] = pos[j*3+2];
          
          connections.push({i, j, dist});
        }
      }
    }
    
    linesRef.current.geometry.setDrawRange(0, vertexpos / 3);
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    
    // update pulses
    if (pulseGeom.current) {
        const pPos = pulseGeom.current.attributes.position.array;
        
        pulses.current.forEach((pulse, idx) => {
            if (!pulse.active && connections.length > 0 && Math.random() < 0.05) {
                const conn = connections[Math.floor(Math.random() * connections.length)];
                pulse.active = true;
                pulse.p1 = conn.i;
                pulse.p2 = conn.j;
                pulse.progress = 0;
            }
            
            if (pulse.active) {
                pulse.progress += pulse.speed;
                if (pulse.progress >= 1) {
                    pulse.active = false;
                    pPos[idx*3] = 999; 
                } else {
                    const x1 = pos[pulse.p1*3], y1 = pos[pulse.p1*3+1], z1 = pos[pulse.p1*3+2];
                    const x2 = pos[pulse.p2*3], y2 = pos[pulse.p2*3+1], z2 = pos[pulse.p2*3+2];
                    pPos[idx*3] = x1 + (x2 - x1) * pulse.progress;
                    pPos[idx*3+1] = y1 + (y2 - y1) * pulse.progress;
                    pPos[idx*3+2] = z1 + (z2 - z1) * pulse.progress;
                }
            }
        });
        pulseGeom.current.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.06} color="#00D9FF" transparent opacity={0.6} sizeAttenuation={true} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={maxConnections * 2} array={linePositions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#2563EB" transparent opacity={0.15} depthWrite={false} />
      </lineSegments>
      <points>
        <bufferGeometry ref={pulseGeom}>
            <bufferAttribute attach="attributes-position" count={pulseCount} array={new Float32Array(pulseCount * 3)} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.12} color="#ffffff" transparent opacity={1} sizeAttenuation={true} />
      </points>
    </group>
  );
};

const GlassObjects = () => {
  return (
    <group>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[1.2, 32, 32]} position={[4, 1, -2]}>
          <meshPhysicalMaterial 
            color="#2563EB" 
            transparent 
            opacity={0.15} 
            roughness={0.1} 
            metalness={0.8} 
            clearcoat={1} 
            transmission={0.9} 
            emissive="#00D9FF" 
            emissiveIntensity={0.2}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[0.8, 32, 32]} position={[-3, -2, -4]}>
          <meshPhysicalMaterial 
            color="#00D9FF" 
            transparent 
            opacity={0.15} 
            roughness={0.05} 
            metalness={0.9} 
            clearcoat={1} 
            transmission={0.9} 
            emissive="#2563EB" 
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>

      <Float speed={0.8} rotationIntensity={0.8} floatIntensity={1}>
        <Sphere args={[2, 32, 32]} position={[-5, 3, -6]}>
          <meshPhysicalMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.05} 
            roughness={0.2} 
            metalness={0.7} 
            transmission={0.8} 
            emissive="#00D9FF" 
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>
    </group>
  );
}

const CameraParallax = () => {
    useFrame((state) => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) return;
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, (state.mouse.x * 2), 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, (state.mouse.y * 2), 0.05);
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

const TechBackgroundScene = ({ count }) => {
    return (
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 60 }} 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', maxWidth: '100%', pointerEvents: 'none', touchAction: 'none' }}
        >
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#00D9FF" />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#2563EB" />
            
            <ParticleNetwork count={count} />
            <GlassObjects />
            <CameraParallax />
        </Canvas>
    )
}

const TechBackground = () => {
    const [particleCount, setParticleCount] = useState(70);
    
    useEffect(() => {
        if (window.innerWidth < 768) {
            setParticleCount(30);
        }
    }, []);

    return (
        <div className="digital-grid" style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', maxWidth: '100%',
            zIndex: -2, pointerEvents: 'none', touchAction: 'none', backgroundColor: '#020617', overflow: 'hidden', clipPath: 'inset(0)', WebkitClipPath: 'inset(0)'
        }}>
            <Suspense fallback={null}>
                <TechBackgroundScene count={particleCount} />
            </Suspense>
        </div>
    );
};

export default TechBackground;
