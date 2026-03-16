import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { RippleButton } from "./multi-type-ripple-buttons";
// --- Internal Helper Components (Not exported) --- //

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16" height="16" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="3"
    strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ShaderCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glProgramRef = useRef<WebGLProgram | null>(null);
  const glBgColorLocationRef = useRef<WebGLUniformLocation | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const [backgroundColor, setBackgroundColor] = useState([1.0, 1.0, 1.0]);

  useEffect(() => {
    const root = document.documentElement;
    const updateColor = () => {
      const isDark = root.classList.contains('dark');
      setBackgroundColor(isDark ? [0, 0, 0] : [1.0, 1.0, 1.0]);
    };
    updateColor();
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          updateColor();
        }
      }
    });
    observer.observe(root, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const gl = glRef.current;
    const program = glProgramRef.current;
    const location = glBgColorLocationRef.current;
    if (gl && program && location) {
      gl.useProgram(program);
      gl.uniform3fv(location, new Float32Array(backgroundColor));
    }
  }, [backgroundColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl');
    if (!gl) { console.error("WebGL not supported"); return; }
    glRef.current = gl;

    const vertexShaderSource = `attribute vec2 aPosition; void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`;
    const fragmentShaderSource = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 uBackgroundColor;
      mat2 rotate2d(float angle){ float c=cos(angle),s=sin(angle); return mat2(c,-s,s,c); }
      float variation(vec2 v1,vec2 v2,float strength,float speed){ return sin(dot(normalize(v1),normalize(v2))*strength+iTime*speed)/100.0; }
      vec3 paintCircle(vec2 uv,vec2 center,float rad,float width){
        vec2 diff = center-uv;
        float len = length(diff);
        len += variation(diff,vec2(0.,1.),5.,2.);
        len -= variation(diff,vec2(1.,0.),5.,2.);
        float circle = smoothstep(rad-width,rad,len)-smoothstep(rad,rad+width,len);
        return vec3(circle);
      }
      vec3 getThemeColor(float t) {
        float st = mod(t, 3.0);
        vec3 colGreen = vec3(178.0, 208.0, 141.0) / 255.0; // #b2d08d
        vec3 colPink = vec3(229.0, 170.0, 216.0) / 255.0;  // #e5aad8
        vec3 colBlue = vec3(16.0, 149.0, 237.0) / 255.0;   // #1095ed
        
        if (st < 1.0) return mix(colGreen, colPink, smoothstep(0.0, 1.0, st));
        if (st < 2.0) return mix(colPink, colBlue, smoothstep(0.0, 1.0, st - 1.0));
        return mix(colBlue, colGreen, smoothstep(0.0, 1.0, st - 2.0));
      }
      void main(){
        vec2 uv = gl_FragCoord.xy/iResolution.xy;
        float aspect = iResolution.x / iResolution.y;
        uv.x *= aspect; 
        uv.x -= (aspect - 1.0) / 2.0; // Center the circle on X
        float mask = 0.0;
        float radius = .28; // Gjort diameteren større
        vec2 center = vec2(.5);
        mask += paintCircle(uv,center,radius,.035).r;
        mask += paintCircle(uv,center,radius-.018,.01).r;
        mask += paintCircle(uv,center,radius+.018,.005).r;
        vec2 v=rotate2d(iTime)*uv;
        
        // Dynamisk farve baseret på tid og position
        vec3 foregroundColor = getThemeColor(iTime * 0.4 + v.x * 0.5 + v.y * 0.5);
        
        vec3 color = mix(uBackgroundColor, foregroundColor, mask);
        color = mix(color, vec3(1.0), paintCircle(uv,center,radius,.003).r);
        
        // Gør det gennemsigtigt mod uBackgroundColor
        gl_FragColor = vec4(color, 1.0);
      }`;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) throw new Error("Could not create shader");
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) || "Shader compilation error");
      }
      return shader;
    };

    const program = gl.createProgram();
    if (!program) throw new Error("Could not create program");
    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);
    glProgramRef.current = program;

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const iTimeLoc = gl.getUniformLocation(program, 'iTime');
    const iResLoc = gl.getUniformLocation(program, 'iResolution');
    glBgColorLocationRef.current = gl.getUniformLocation(program, 'uBackgroundColor');
    gl.uniform3fv(glBgColorLocationRef.current, new Float32Array(backgroundColor));

    let animationFrameId: number;
    const render = (time: number) => {
      gl.uniform1f(iTimeLoc, time * 0.001);
      gl.uniform2f(iResLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    animationFrameId = requestAnimationFrame(render);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full block z-0 bg-transparent opacity-[45%]" />;
};


// --- EXPORTED Building Blocks --- //

/**
 * We export the Props interface so you can easily type the data for your plans.
 */
export interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant?: 'primary' | 'secondary';
  themeColor?: 'green' | 'pink' | 'blue';
}

/**
 * We export the PricingCard component itself in case you want to use it elsewhere.
 */
export const PricingCard = ({
  planName, description, price, features, buttonText, isPopular = false, buttonVariant = 'primary', themeColor = 'blue'
}: PricingCardProps) => {
  const themeMap = {
    green: {
      bg: 'bg-bison-green',
      text: 'text-bison-green',
      glow: 'ring-[#b2d08d]/40 border-[#b2d08d]/50 shadow-[0_0_30px_-10px_rgba(178,208,141,0.4)]',
      badgeBg: 'bg-bison-green text-bison-dark'
    },
    pink: {
      bg: 'bg-bison-pink',
      text: 'text-[#d996cb]', // Lidt mørkere pink til tekst og ikoner i lys mode
      glow: 'ring-bison-pink/60 border-bison-pink/60 shadow-[0_0_50px_-10px_rgba(229,170,216,0.6)]', // Ekstra glow
      badgeBg: 'bg-bison-pink text-bison-dark'
    },
    blue: {
      bg: 'bg-bison-blue',
      text: 'text-[#1095ed]',
      glow: 'ring-[#1095ed]/30 border-[#1095ed]/40 shadow-[0_0_30px_-10px_rgba(16,149,237,0.3)]',
      badgeBg: 'bg-[#1095ed] text-white'
    }
  };

  const t = themeMap[themeColor];

  const cardClasses = `
    backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex-1 max-w-xs px-7 py-8 flex flex-col transition-all duration-300
    from-black/5 to-black/0 border border-black/10
    dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91]
    ${isPopular ? `scale-105 relative ring-2 z-10 ${t.glow}` : ''}
  `;
  const buttonClasses = `
    mt-auto w-full py-2.5 rounded-xl font-bold uppercase tracking-wider text-[14px] transition-all duration-300 font-sans
    ${t.bg} text-black border border-black/10 shadow-sm hover:scale-105 hover:-translate-y-1 hover:shadow-xl
  `;

  return (
    <div className={cardClasses.trim()}>
      {isPopular && (
        <div className={`absolute -top-4 right-4 px-3 py-1 text-[12px] font-semibold rounded-full ${t.badgeBg}`}>
          Most Popular
        </div>
      )}
      <div className="mb-3">
        <h2 className="text-[48px] font-extralight tracking-[-0.03em] text-black font-display">{planName}</h2>
        <p className="text-[16px] text-black/70 mt-1 font-sans">{description}</p>
      </div>
      <div className="my-6 flex items-baseline gap-2">
        <span className="text-[48px] font-extralight text-bison-brown font-display">{price}</span>
        <span className="text-[14px] text-black/70 font-sans">kr/md.</span>
      </div>
      <div className="card-divider w-full mb-5 h-px bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.1)_50%,transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09)_20%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.09)_80%,transparent)]"></div>
      <ul className="flex flex-col gap-2 text-[14px] text-black/90 mb-6 font-sans">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckIcon className={`${t.text} w-4 h-4`} /> {feature}
          </li>
        ))}
      </ul>
      <RippleButton 
        className={buttonClasses.trim()} 
        variant="default" 
        rippleColor="rgba(255,255,255,0.4)"
        rippleDuration={800}
      >
        {buttonText}
      </RippleButton>
    </div>
  );
};


// --- EXPORTED Customizable Page Component --- //

interface ModernPricingPageProps {
  /** The main title. Can be a string or a ReactNode for more complex content. */
  title: React.ReactNode;
  /** The subtitle text appearing below the main title. */
  subtitle: React.ReactNode;
  /** An array of plan objects that conform to PricingCardProps. */
  plans: PricingCardProps[];
  /** Whether to show the animated WebGL background. Defaults to true. */
  showAnimatedBackground?: boolean;
}

export const ModernPricingPage = ({
  title,
  subtitle,
  plans,
  showAnimatedBackground = true,
}: ModernPricingPageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax-effekt: Canvas bevæger sig fra -25% op til 25% ned, mens man scroller
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-25%", "25%"]);

  return (
    <div ref={containerRef} className="bg-background text-foreground min-h-screen w-full overflow-hidden relative">
      {showAnimatedBackground && (
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none z-0">
          <ShaderCanvas />
        </motion.div>
      )}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 py-32">
        <div className="w-full max-w-5xl mx-auto text-center mb-14">
          <h1 className="text-[48px] md:text-[64px] font-extralight leading-tight tracking-[-0.03em] text-black font-display">
            {title}
          </h1>
          <p className="mt-3 text-[16px] md:text-[20px] text-black/80 max-w-2xl mx-auto font-sans">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center w-full max-w-4xl relative z-20">
          {plans.map((plan) => <React.Fragment key={plan.planName}><PricingCard {...plan} /></React.Fragment>)}
        </div>
      </div>
    </div>
  );
};
