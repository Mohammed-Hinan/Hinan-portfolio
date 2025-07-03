'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface TiltedCardProps {
  imageSrc: string;
  altText: string;
  captionText: string;
  containerHeight?: string;
  containerWidth?: string;
  imageHeight?: string;
  imageWidth?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  overlayContent?: React.ReactNode;
}

const TiltedCard: React.FC<TiltedCardProps> = ({
  imageSrc,
  altText,
  captionText,
  containerHeight = '300px',
  containerWidth = '300px',
  imageHeight = '300px',
  imageWidth = '300px',
  rotateAmplitude = 12,
  scaleOnHover = 1.2,
  showMobileWarning = false,
  showTooltip = true,
  displayOverlayContent = true,
  overlayContent,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / (rect.height / 2)) * rotateAmplitude;
    const rotateY = -(mouseX / (rect.width / 2)) * rotateAmplitude;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="relative cursor-pointer"
      style={{
        height: containerHeight,
        width: containerWidth,
        perspective: '1000px',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full h-full transition-all duration-300 ease-out transform-gpu rounded-2xl overflow-hidden border border-border"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? scaleOnHover : 1})`,
          transformStyle: 'preserve-3d',
        }}
      >
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="object-cover"
        />
        
        {displayOverlayContent && (
          <div 
            className={`absolute inset-0 bg-black/70 transition-opacity duration-300 flex items-center justify-center p-4 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {overlayContent || (
              <p className="text-white text-sm text-center">{captionText}</p>
            )}
          </div>
        )}
        
        {showTooltip && isHovered && (
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10">
            {captionText}
          </div>
        )}
      </div>
      
      {showMobileWarning && (
        <div className="md:hidden absolute -bottom-8 left-0 right-0 text-center text-xs text-muted-foreground">
          Tilt effect works best on desktop
        </div>
      )}
    </div>
  );
};

export default TiltedCard;