import React, { FC } from "react";
import { useState, useEffect } from "react";

interface TimerProps {
  initialMinute: number;
  initialSeconds: number;
  setIsExpired: (value: boolean) => void;
}

const Timer: FC<TimerProps> = ({
  initialMinute,
  initialSeconds,
  setIsExpired,
}: TimerProps) => {
  const [minutes, setMinutes] = useState<number>(initialMinute);
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds <= 0) {
        if (minutes < 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    if (minutes < 0) {
      setIsExpired(true);
    }
  }, [minutes, seconds]);

  return (
    <>
      {minutes === 0 && seconds === 0 ? null : (
        <p>
          00:{minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </p>
      )}
    </>
  );
};

export default Timer;
