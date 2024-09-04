import React, { useState, useEffect } from "react";
import moment, { Moment } from "moment"; // Importa moment.js
import "../css/ComingSoon.css"; // Importa el archivo de estilos CSS

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate: Moment = moment("2024-09-21"); // Fecha objetivo
    const currentTime: Moment = moment(); // Tiempo actual

    const difference = targetDate.diff(currentTime);

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown">
      <div className="timer">
        <span>{timeLeft.days}:</span>
        <span>{timeLeft.hours}:</span>
        <span>{timeLeft.minutes}:</span>
        <span>{timeLeft.seconds}</span>
      </div>
      <div className="timer-text">
        <span id="days">Días</span>
        <span id="hours">Horas</span>
        <span id="minutes">Minutos</span>
        <span id="seconds">Segundos</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
