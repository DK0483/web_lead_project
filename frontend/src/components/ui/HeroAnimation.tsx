"use client"; // This is a client component, as it uses browser-only APIs

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroAnimation = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Particle Geometry
    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: new THREE.Color("#60a5fa"), // A cool blue color
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Mouse tracking
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Animate particles
      particleSystem.rotation.y = elapsedTime * 0.05;
      particleSystem.rotation.x = elapsedTime * 0.05;

      // Make camera react to mouse movement
      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);


      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-50" />;
};

export default HeroAnimation;