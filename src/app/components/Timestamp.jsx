"use client";
import React, { useEffect, useState } from "react";

export default function Timestamp() {
  const [timeArray, setTimeArray] = useState([]);

  useEffect(() => {
    const getCurrentTimestamp = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      return `${hours}:${minutes}`;
    };

    // Set initial timestamp
    setTimeArray([getCurrentTimestamp()]);

    // Set up interval to add a new timestamp every minute
    const intervalId = setInterval(() => {
      setTimeArray((prevTimeArray) => [
        ...prevTimeArray,
        getCurrentTimestamp(),
      ]);
    }, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {timeArray.map((time, index) => (
        <div key={index}>The current time is {time}</div>
      ))}
    </div>
  );
}
