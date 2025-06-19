import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import WorldIcon from "../icons/WorldIcon";

function Clock() {
  const [time, setTime] = useState(new Date());
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const colombiaTime = new Date(
        new Date().toLocaleString("en-US", { timeZone: "America/Bogota" })
      );
      setTime(colombiaTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();
  const minute = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="text-carbon font-Archivo text-7xl relative hover:text-cream transition-all duration-300"
    >
      <span>
        <NumberFlow
          format={{
            minimumIntegerDigits: 2,
          }}
          value={hour}
        />
      </span>
      <span>:</span>
      <span>
        <NumberFlow
          format={{
            minimumIntegerDigits: 2,
          }}
          value={minute}
        />
      </span>
      <span>:</span>
      <span>
        <NumberFlow
          format={{
            minimumIntegerDigits: 2,
          }}
          value={seconds}
        />
      </span>

      <div
        className={`absolute top-11/12 h-10 w-full flex items-center justify-center text-xl gap-2 ${
          hover
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-0 -translate-y-10"
        } transition duration-300 text-cream bg-carbon/20 rounded-full`}
      >
        <span>
          <WorldIcon sizes={25} />
        </span>
        <span>Colombian Time</span>
      </div>
    </div>
  );
}

export default Clock;
