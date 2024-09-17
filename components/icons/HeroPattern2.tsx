import React from "react";

interface PatternBackgroundProps {
  className?: string; // Optional className prop
  width?: number; // Optional width prop
  height?: number;
}

const PatternBackground2: React.FC<PatternBackgroundProps> = ({
  className,
  width,
  height,
}) => (
  <svg
    fill="none"
    width={width}
    height={height}
    viewBox="0 0 404 784"
    className={className}
  >
    <defs>
      <pattern
        x={0}
        y={0}
        id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
        width={20}
        height={20}
        patternUnits="userSpaceOnUse"
      >
        <rect
          x={0}
          y={0}
          fill="currentColor"
          width={4}
          height={4}
          className="text-gray-200"
        />
      </pattern>
    </defs>
    <rect
      fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
      width={404}
      height={784}
    />
  </svg>
);

export default PatternBackground2;
