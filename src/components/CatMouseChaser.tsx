import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CatMouseChaser() {
  const [isMobile, setIsMobile] = useState(false);

  // Track mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs to make the cat "chase" instead of snapping instantly
  const catX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const catY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    // Check if device has a cursor (disable on phones/tablets)
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    if (mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Offset the mouse graphic so it clicks accurately from its tip
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* 1. CSS Override to turn the real cursor into a tiny emoji mouse */}
      <style>{`
        html, body, a, button {
          cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' style='font-size:24px'><text y='24'>🐭</text></svg>"), auto !important;
        }
      `}</style>

      {/* 2. The Animated Cat Chaser */}
      <motion.div
        style={{
          position: 'fixed',
          left: catX,
          top: catY,
          pointerEvents: 'none', // Prevents cat from blocking button clicks
          zIndex: 9999,
          // Offset the cat slightly so it sits right behind the mouse
          translateX: -40,
          translateY: 10,
        }}
      >
        <span style={{ fontSize: '32px', display: 'block' }}>🐱</span>
      </motion.div>
    </>
  );
}