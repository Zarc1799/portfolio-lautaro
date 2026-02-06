"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { useLanguage } from "../context/LanguageContext";

function Points({ count = 1500, color = "#06b6d4" }) {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        const phi = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < count; i++) {
            const y = 1 - (i / (count - 1)) * 2;
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;
            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;

            p[i * 3] = x * 2;
            p[i * 3 + 1] = y * 2;
            p[i * 3 + 2] = z * 2;
        }
        return p;
    }, [count]);

    const ref = useRef<THREE.Points>(null!);

    useFrame((state) => {
        if (!ref.current) return;
        ref.current.rotation.y += 0.001;
        ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={points.length / 3}
                    array={points}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color={color}
                sizeAttenuation={true}
                depthWrite={false}
                transparent
                opacity={0.8}
            />
        </points>
    );
}

function Connections({ count = 20, color = "#22d3ee" }) {
    const lines = useMemo(() => {
        const l = [];
        for (let i = 0; i < count; i++) {
            // Random start point on sphere surface
            const theta1 = Math.random() * Math.PI * 2;
            const phi1 = Math.acos((Math.random() * 2) - 1);
            const x1 = Math.sin(phi1) * Math.cos(theta1) * 2;
            const y1 = Math.sin(phi1) * Math.sin(theta1) * 2;
            const z1 = Math.cos(phi1) * 2;

            // Random end point
            const theta2 = Math.random() * Math.PI * 2;
            const phi2 = Math.acos((Math.random() * 2) - 1);
            const x2 = Math.sin(phi2) * Math.cos(theta2) * 2;
            const y2 = Math.sin(phi2) * Math.sin(theta2) * 2;
            const z2 = Math.cos(phi2) * 2;

            // Curve height
            const midX = (x1 + x2) / 2 * 1.5;
            const midY = (y1 + y2) / 2 * 1.5;
            const midZ = (z1 + z2) / 2 * 1.5;

            // Quadratic curve logic simulated by segments
            // For simplicity in R3F raw geometry, we'll just draw direct lines or use Line from drei
            // Let's stick to simple direct lines for performance as "lasers"
            l.push(x1, y1, z1);
            l.push(x2, y2, z2);
        }
        return new Float32Array(l);
    }, [count]);

    const ref = useRef<THREE.LineSegments>(null!);
    useFrame(() => {
        if (!ref.current) return;
        ref.current.rotation.y += 0.002;
    });

    return (
        <lineSegments ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={lines.length / 3}
                    array={lines}
                    itemSize={3}
                />
            </bufferGeometry>
            <lineBasicMaterial color={color} opacity={0.3} transparent />
        </lineSegments>
    );
}

function SkillNode({ position, label }: { position: [number, number, number], label: string }) {
    const [hovered, setHovered] = useState(false);
    return (
        <group position={position}>
            <mesh
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshBasicMaterial color={hovered ? "#fde047" : "#ef4444"} />
            </mesh>
            {hovered && (
                <Html distanceFactor={10}>
                    <div className="bg-black/80 border border-cyber-primary text-cyber-primary px-2 py-1 text-xs rounded font-mono whitespace-nowrap pointer-events-none transform translate-y-[-20px]">
                        {label}
                    </div>
                </Html>
            )}
        </group>
    );
}

export default function WorldGlobe() {
    return (
        <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }} className="bg-transparent" dpr={[1, 2]}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />

            <Points />
            <Connections />

            {/* Hardcoded Nodes for visual flair */}
            <group rotation={[0, 0, 0.2]}>
                <SkillNode position={[1.8, 0.5, 0.8]} label="Next.js (Spain)" />
                <SkillNode position={[-1.5, -0.8, 1]} label="Linux (USA)" />
                <SkillNode position={[0.5, 1.5, -0.5]} label="Zabbix (Cloud)" />
                <SkillNode position={[0, -1.8, -0.5]} label="Security (Deep Web)" />
                <SkillNode position={[1, 0, 1.7]} label="React (Frontend)" />
            </group>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 1.5}
                minPolarAngle={Math.PI / 3}
            />
        </Canvas>
    );
}
