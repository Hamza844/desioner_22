"use client";
import { useState, useEffect } from "react";
import { Bai_Jamjuree } from "next/font/google";

const inter = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });

const Counter = ({ num }: { num?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof num !== "number" || num <= 0) {
      console.error("Invalid num prop:", num);
      return;
    }

    const totalSteps = 72;
    const intervalDuration = 1000 / totalSteps;
    const stepValue = Math.ceil(num / totalSteps);

    const updateCount = () => {
      setCount((prevCount) => {
        const newCount = prevCount + stepValue;
        if (newCount >= num) {
          setCount(num);
          clearInterval(interval);
        }
        return newCount;
      });
    };

    const interval = setInterval(updateCount, intervalDuration);

    return () => clearInterval(interval);
  }, [num]);

  return (
    <div>
      <p
        className={`${inter.className} outlinee-bg leading-normal text-[100px]`}
      >
        {count.toLocaleString()}+
      </p>
    </div>
  );
};

export default Counter;
