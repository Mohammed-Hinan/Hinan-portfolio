'use client';

import React, { useEffect, useRef } from 'react';

interface TextPressureProps {
  text: string;
  flex?: boolean;
  alpha?: boolean;
  stroke?: boolean;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  textColor?: string;
  strokeColor?: string;
  minFontSize?: number;
}

const TextPressure: React.FC<TextPressureProps> = ({
  text,
  flex = true,
  alpha = false,
  stroke = false,
  width = true,
  weight = true,
  italic = true,
  textColor = '#ffffff',
  strokeColor = '#ff0000',
  minFontSize = 36,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return;

      const rect = textRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate pressure based on distance from center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
      const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
      const pressure = Math.max(0, 1 - distance / maxDistance);

      // Apply transformations based on pressure
      const styles: any = {};
      
      if (flex) {
        const fontSize = minFontSize + (pressure * 40);
        styles.fontSize = `${fontSize}px`;
      }
      
      if (alpha) {
        styles.opacity = 0.3 + (pressure * 0.7);
      }
      
      if (width) {
        styles.fontStretch = `${50 + pressure * 100}%`;
      }
      
      if (weight) {
        styles.fontWeight = 100 + (pressure * 800);
      }
      
      if (italic) {
        styles.fontStyle = pressure > 0.3 ? 'italic' : 'normal';
      }
      
      styles.color = textColor;
      
      if (stroke) {
        styles.WebkitTextStroke = `${pressure * 2}px ${strokeColor}`;
      }

      Object.assign(textRef.current.style, styles);
    };

    const handleMouseLeave = () => {
      if (!textRef.current) return;
      
      // Reset to default state
      const defaultStyles = {
        fontSize: `${minFontSize}px`,
        opacity: alpha ? '0.3' : '1',
        fontStretch: width ? '50%' : 'normal',
        fontWeight: weight ? '100' : 'normal',
        fontStyle: 'normal',
        color: textColor,
        WebkitTextStroke: stroke ? `0px ${strokeColor}` : 'none',
      };
      
      Object.assign(textRef.current.style, defaultStyles);
    };

    const element = textRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
      
      // Set initial styles
      handleMouseLeave();
      
      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [flex, alpha, stroke, width, weight, italic, textColor, strokeColor, minFontSize]);

  return (
    <div
      ref={textRef}
      style={{
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all 0.1s ease-out',
        fontFamily: 'inherit',
        lineHeight: '1.2',
        display: 'inline-block',
      }}
    >
      {text}
    </div>
  );
};

export default TextPressure;