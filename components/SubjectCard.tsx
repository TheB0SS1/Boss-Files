
import React, { useState } from 'react';
import { Subject } from '../types';

interface SubjectCardProps {
  subject: Subject;
  onClick: (subject: Subject) => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, onClick }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onClick={() => onClick(subject)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group cursor-pointer transition-all duration-500 ease-out preserve-3d`}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
    >
      {/* Background Glow */}
      <div 
        className={`absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${subject.energyAura}`}
        style={{ backgroundColor: `${subject.glowColor}20` }}
      />
      
      {/* Main Card */}
      <div className="relative h-48 flex flex-col items-center justify-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
        
        {/* Decorative Internal Glow */}
        <div 
          className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{ backgroundColor: subject.glowColor }}
        />

        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:scale-110 transition-transform duration-500">
          {subject.name}
        </h3>
        
        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest opacity-60">
          {subject.files.length} Materials
        </p>

        {/* Hover Shine Effect */}
        <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out" />
      </div>

      {/* Subject Energy Aura Bottom Border */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 rounded-full transition-all duration-500 group-hover:w-2/3"
        style={{ backgroundColor: subject.glowColor, boxShadow: `0 0 10px ${subject.glowColor}` }}
      />
    </div>
  );
};

export default SubjectCard;
