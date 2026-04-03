import { motion } from "framer-motion";
import { useState } from "react";

export default function MouseBubbles() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const bubbles = [
    { size: 80, color: "rgba(56,189,248,0.3)", speed: 0.05 },
    { size: 120, color: "rgba(236,72,153,0.3)", speed: 0.03 },
    { size: 100, color: "rgba(139,92,246,0.25)", speed: 0.04 },
  ];

  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
    >
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            backgroundColor: b.color,
          }}
          animate={{
            x: mousePos.x * b.speed,
            y: mousePos.y * b.speed,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      ))}
    </div>
  );
}
