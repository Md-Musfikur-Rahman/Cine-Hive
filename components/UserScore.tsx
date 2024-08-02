import React from "react";

interface AverageProps {
  average: number;
}

const UserScore: React.FC<AverageProps> = ({ average }) => {
  const getColor = (value: number) => {
    if (value >= 7) return "green";
    if (value >= 4) return "orange";
    return "red";
  };

  const color = getColor(average);
  const percentage = (average / 10) * 100;
  const radius = 30; // Reduced radius
  const strokeWidth = 5; // Reduced strokeWidth
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-20 h-20">
      <svg width="100%" height="100%" className="absolute">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div
        className={`flex items-center justify-center rounded-full text-xl font-bold`}
        style={{ color: color }}
      >
        {average.toFixed(1)}
      </div>
    </div>
  );
};

export default UserScore;
