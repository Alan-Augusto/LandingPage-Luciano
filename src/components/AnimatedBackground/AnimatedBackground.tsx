// AnimatedBackground.jsx
import React, { useEffect } from 'react';
import './style.scss';

const AnimatedBackground = () => {
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive');

    if (!interBubble) {
      console.error("Elemento não encontrado. Certifique-se de que '.interactive' existe no DOM.");
      return;
    }

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;

      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }

      requestAnimationFrame(() => {
        move();
      });
    }

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div />;
};

export default AnimatedBackground;
