import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnoAI = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    // Cap the pixel ratio so it doesn't melt Retina screens
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));

    // We want the renderer to fill its parent, not the whole window, so it fits in the Hero section
    // but the code originally uses window.innerWidth. We will just use it and rely on CSS to clip/blend.
    // To make it resize well within the parent, we can check parent dimensions:
    const updateSize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      material.uniforms.iResolution.value.set(width, height);
    };

    container.appendChild(renderer.domElement);

    // Style the canvas to ensure it acts as an overlay
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'none';
    renderer.domElement.style.mixBlendMode = 'normal'; // Changed to normal so we don't mess with background colors
    renderer.domElement.style.opacity = '1.0'; // We handle transparency via alpha in the shader now

    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        float hash(float n) { 
            return fract(sin(n) * 43758.5453123); 
        }

        void main() {
            vec2 uv = gl_FragCoord.xy / iResolution.xy;
            uv.x *= iResolution.x / iResolution.y;

            vec3 color = vec3(0.0);
            float time = iTime * 0.12;

            // Highly optimized loop: just 6 subtle meteors, no FBM noise loops
            for (float i = 0.0; i < 6.0; i++) {
                float h1 = hash(i * 123.4);
                float h2 = hash(i * 321.4);
                float h3 = hash(i * 842.1);
                
                vec2 startPos = vec2(h1 * 3.0, h2 * 2.0 + 1.0);
                float speed = 0.6 + h3 * 1.5;
                
                vec2 p = uv;
                p.x -= time * speed * 0.5 - startPos.x;
                p.y += time * speed * 0.8 + startPos.y; // inverted to go top to bottom
                
                // Wrap around nicely
                p.x = mod(p.x + 2.0, 4.0) - 2.0;
                p.y = mod(p.y + 2.0, 4.0) - 2.0;

                // Adjust line distance for downward diagonal motion
                float lineDist = abs(p.x * 1.6 + p.y);
                
                if (p.x < 0.0 && p.x > -1.0) {
                    float head = exp(-length(vec2(p.x, p.y)) * 40.0);
                    // use softer tail for blurry look
                    float tail = exp(-lineDist * 80.0) * exp(p.x * 4.0) * smoothstep(-1.0, 0.0, p.x);
                    
                    // Subtle white/grey/blueish tint
                    color += vec3(0.9, 0.95, 1.0) * (head * 0.7 + tail * 0.4) * (0.3 + 0.3 * h1);
                }
            }

            // Output very subtle soft color, set alpha based on intensity so background is fully transparent
            float alpha = length(color) > 0.01 ? length(color) * 0.5 : 0.0;
            gl_FragColor = vec4(color * 0.7, alpha); 
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    updateSize();

    let frameId: number;
    const animate = () => {
      material.uniforms.iTime.value += 0.016;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', updateSize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', updateSize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    </div>
  );
};

export default AnoAI;
