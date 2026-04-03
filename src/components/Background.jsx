import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Background() {
  const x = useMotionValue(50);
  const y = useMotionValue(50);

  const bg = useTransform([x, y], ([latestX, latestY]) => {
    return `
      radial-gradient(circle at ${latestX}% ${latestY}%, rgba(56,189,248,0.2), transparent 40%),
      radial-gradient(circle at ${100 - latestX}% ${100 - latestY}%, rgba(236,72,153,0.2), transparent 50%)
    `;
  });

  useEffect(() => {
    animate(x, [0, 100, 0], { duration: 20, repeat: Infinity, ease: "linear" });
    animate(y, [0, 100, 0], { duration: 30, repeat: Infinity, ease: "linear" });
  }, [x, y]);

  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      style={{ background: bg }}
    />
  );
}
