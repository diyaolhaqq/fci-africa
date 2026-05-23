"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Lift({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  const formatted = useMemo(() => displayValue.toLocaleString("en-US"), [displayValue]);

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 120, damping: 30, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 120, damping: 30, mass: 0.2 });

  useEffect(() => {
    const update = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        return;
      }
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };

    window.addEventListener("pointermove", update);
    return () => window.removeEventListener("pointermove", update);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-0 hidden h-80 w-80 md:block"
      style={{
        x: springX,
        y: springY,
        background:
          "linear-gradient(135deg, rgba(114,242,165,0.09), rgba(244,246,242,0.025), transparent 70%)",
        filter: "blur(32px)",
      }}
    />
  );
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let width = 0;
    let height = 0;
    let frame = 0;
    let nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      phase: number;
    }> = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.round(Math.min(90, Math.max(42, width / 15)));
      nodes = Array.from({ length: count }, (_, index) => ({
        x: (index * 97) % Math.max(width, 1),
        y: (index * 53) % Math.max(height, 1),
        vx: ((index % 5) - 2) * 0.08,
        vy: (((index + 2) % 7) - 3) * 0.05,
        r: 1 + (index % 4) * 0.45,
        phase: index * 0.31,
      }));
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.fillStyle = "rgba(5, 6, 6, 0.26)";
      context.fillRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        if (!reducedMotion) {
          node.x += node.vx + Math.sin(time * 0.00025 + node.phase) * 0.035;
          node.y += node.vy + Math.cos(time * 0.00022 + node.phase) * 0.03;
        }
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      }

      context.lineWidth = 1;
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 132) {
            const opacity = Math.max(0, 1 - distance / 132) * 0.22;
            context.strokeStyle = `rgba(114, 242, 165, ${opacity})`;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        context.fillStyle = "rgba(244, 246, 242, 0.82)";
        context.beginPath();
        context.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        context.fill();
      });

      context.strokeStyle = "rgba(244, 246, 242, 0.08)";
      context.beginPath();
      context.ellipse(width * 0.63, height * 0.44, width * 0.34, height * 0.18, -0.28, 0, Math.PI * 2);
      context.stroke();
      context.beginPath();
      context.ellipse(width * 0.37, height * 0.58, width * 0.26, height * 0.13, 0.38, 0, Math.PI * 2);
      context.stroke();

      if (!reducedMotion) {
        frame = requestAnimationFrame(draw);
      }
    };

    resize();
    draw(0);
    window.addEventListener("resize", resize);
    if (!reducedMotion) {
      frame = requestAnimationFrame(draw);
    }

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}
