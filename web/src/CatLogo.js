import React from "react";

export default function ReflectoCatEmoji({ size = 72 }) {
  // Proportional sizes for mirror and cat based on total size
  const mirrorWidth = size * 0.68;
  const mirrorHeight = size * 1.04;
  const catX = size * 0.41;
  const catY = size * 0.36;
  const catBodyWidth = size * 0.44;
  const catBodyHeight = size * 0.54;
  const tailPath = `
    M ${catX + catBodyWidth * 0.94} ${catY + catBodyHeight * 0.68}
    Q ${catX + catBodyWidth * 1.25} ${catY + catBodyHeight * 0.69},
      ${catX + catBodyWidth * 1.02} ${catY + catBodyHeight * 0.33}
  `;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ReflectoCat mirror emoji"
    >
      {/* Mirror */}
      <ellipse
        cx={mirrorWidth * 0.5}
        cy={size * 0.53}
        rx={mirrorWidth * 0.5}
        ry={mirrorHeight * 0.5}
        fill="#2a3650"
        stroke="#4fc3f7"
        strokeWidth={size * 0.062}
      />
      {/* Mirror glass */}
      <ellipse
        cx={mirrorWidth * 0.5}
        cy={size * 0.53}
        rx={mirrorWidth * 0.44}
        ry={mirrorHeight * 0.44}
        fill="#60cfff"
        opacity={0.22}
      />
      {/* Mirror highlight */}
      <rect
        x={mirrorWidth * 0.7}
        y={size * 0.18}
        width={size * 0.09}
        height={size * 0.22}
        rx={size * 0.03}
        fill="#fff"
        opacity="0.18"
        transform={`rotate(18 ${mirrorWidth * 0.7} ${size * 0.18})`}
      />
      {/* Reflected cat (front view, inside mirror) */}
      <g>
        {/* Head */}
        <ellipse
          cx={mirrorWidth * 0.5}
          cy={size * 0.53 - size * 0.13}
          rx={size * 0.16}
          ry={size * 0.14}
          fill="#4fc3f7"
        />
        {/* Face mask */}
        <ellipse
          cx={mirrorWidth * 0.5}
          cy={size * 0.53 - size * 0.09}
          rx={size * 0.11}
          ry={size * 0.09}
          fill="#b4ebff"
        />
        {/* Body */}
        <ellipse
          cx={mirrorWidth * 0.5}
          cy={size * 0.53 + size * 0.09}
          rx={size * 0.11}
          ry={size * 0.15}
          fill="#4fc3f7"
        />
        {/* Legs */}
        <rect
          x={mirrorWidth * 0.5 - size * 0.06}
          y={size * 0.53 + size * 0.18}
          width={size * 0.025}
          height={size * 0.08}
          rx={size * 0.009}
          fill="#4fc3f7"
        />
        <rect
          x={mirrorWidth * 0.5 + size * 0.035}
          y={size * 0.53 + size * 0.18}
          width={size * 0.025}
          height={size * 0.08}
          rx={size * 0.009}
          fill="#4fc3f7"
        />
        {/* Tail (in mirror, leftwards) */}
        <path
          d={`
            M ${mirrorWidth * 0.5 - size * 0.11} ${size * 0.53 + size * 0.07}
            Q ${mirrorWidth * 0.5 - size * 0.19} ${size * 0.53 + size * 0.12},
              ${mirrorWidth * 0.5 - size * 0.12} ${size * 0.53 + size * 0.19}
          `}
          stroke="#4fc3f7"
          strokeWidth={size * 0.035}
          fill="none"
          strokeLinecap="round"
        />
        {/* Ears */}
        <polygon
          points={`
            ${mirrorWidth * 0.5 - size * 0.13},${size * 0.53 - size * 0.18}
            ${mirrorWidth * 0.5 - size * 0.05},${size * 0.53 - size * 0.15}
            ${mirrorWidth * 0.5 - size * 0.08},${size * 0.53 - size * 0.09}
          `}
          fill="#4fc3f7"
        />
        <polygon
          points={`
            ${mirrorWidth * 0.5 + size * 0.13},${size * 0.53 - size * 0.18}
            ${mirrorWidth * 0.5 + size * 0.05},${size * 0.53 - size * 0.15}
            ${mirrorWidth * 0.5 + size * 0.08},${size * 0.53 - size * 0.09}
          `}
          fill="#4fc3f7"
        />
        {/* Face: Eyes, mouth, whiskers */}
        <ellipse
          cx={mirrorWidth * 0.5 - size * 0.04}
          cy={size * 0.53 - size * 0.085}
          rx={size * 0.015}
          ry={size * 0.022}
          fill="#222a3a"
        />
        <ellipse
          cx={mirrorWidth * 0.5 + size * 0.04}
          cy={size * 0.53 - size * 0.085}
          rx={size * 0.015}
          ry={size * 0.022}
          fill="#222a3a"
        />
        <path
          d={`
            M ${mirrorWidth * 0.5 - size * 0.018} ${size * 0.53 - size * 0.05}
            Q ${mirrorWidth * 0.5} ${size * 0.53 - size * 0.035},
              ${mirrorWidth * 0.5 + size * 0.018} ${size * 0.53 - size * 0.05}
          `}
          stroke="#222a3a"
          strokeWidth={size * 0.013}
          fill="none"
          strokeLinecap="round"
        />
        {/* Whiskers */}
        <path
          d={`
            M ${mirrorWidth * 0.5 - size * 0.07} ${size * 0.53 - size * 0.05}
            h ${-size * 0.04}
          `}
          stroke="#222a3a"
          strokeWidth={size * 0.012}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={`
            M ${mirrorWidth * 0.5 + size * 0.07} ${size * 0.53 - size * 0.05}
            h ${size * 0.04}
          `}
          stroke="#222a3a"
          strokeWidth={size * 0.012}
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Cat Back View (right side, facing mirror) */}
      <g>
        {/* Body */}
        <ellipse
          cx={catX + catBodyWidth * 0.5}
          cy={catY + catBodyHeight * 0.6}
          rx={catBodyWidth * 0.32}
          ry={catBodyHeight * 0.41}
          fill="#4fc3f7"
        />
        {/* Head */}
        <ellipse
          cx={catX + catBodyWidth * 0.55}
          cy={catY + catBodyHeight * 0.23}
          rx={catBodyWidth * 0.35}
          ry={catBodyHeight * 0.34}
          fill="#4fc3f7"
        />
        {/* Ears */}
        <polygon
          points={`
            ${catX + catBodyWidth * 0.26},${catY + catBodyHeight * 0.01}
            ${catX + catBodyWidth * 0.43},${catY + catBodyHeight * 0.13}
            ${catX + catBodyWidth * 0.37},${catY + catBodyHeight * 0.23}
          `}
          fill="#4fc3f7"
        />
        <polygon
          points={`
            ${catX + catBodyWidth * 0.83},${catY + catBodyHeight * 0.01}
            ${catX + catBodyWidth * 0.67},${catY + catBodyHeight * 0.13}
            ${catX + catBodyWidth * 0.73},${catY + catBodyHeight * 0.23}
          `}
          fill="#4fc3f7"
        />
        {/* Tail */}
        <path
          d={tailPath}
          stroke="#4fc3f7"
          strokeWidth={size * 0.055}
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}