import { useState } from "react";

function Clock() {
  const [hour, setHour] = useState(16);
  const [minute, setMinute] = useState(9);
  const [seconds, setSeconds] = useState(24);

  return (
    <div className="text-carbon font-Archivo text-7xl">
      <span className="hover:text-cream transition-all duration-300">
        {hour}
      </span>
      <span>:</span>
      <span className="hover:text-cream transition-all duration-300">
        {minute < 10 ? `0${minute}` : minute}
      </span>
      <span>:</span>
      <span className="hover:text-cream transition-all duration-300">
        {seconds}
      </span>
    </div>
  );
}

export default Clock;
