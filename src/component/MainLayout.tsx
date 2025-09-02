import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.pageX, y: event.pageY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
  };

  return (
    <div style={gradientStyle} className="min-h-screen">
      <Outlet />
    </div>
  );
};

export default MainLayout;