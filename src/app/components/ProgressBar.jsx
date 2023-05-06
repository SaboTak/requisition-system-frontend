'use client';
import { useEffect, useState } from "react";

export default function ProgressBar({ items, countSteps }) {
  const [progressWidth, setProgressWidth] = useState("0%");

  useEffect(() => {
    const width = `${(items.length / countSteps) * 100}%`;
    setProgressWidth(width);
  }, [items.length]);

  return (
    <div>
      <div className="bg-gray-200 h-4 rounded-full overflow-hidden outline-none outline-black rounded-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="h-full bg-mi-gama-50 w-full"
            style={{ width: progressWidth }}
          ></div>
        ))}
      </div>
      <p className="mt-2 text-end">Firmas: {items.length} - {countSteps} </p>
    </div>
  );
}
