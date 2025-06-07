import { useState } from "react";

function Clock() {
  return (
    <div className="text-carbon font-Archivo text-7xl">
      <span className="hover:text-cream transition-all duration-300">16</span>

      <span className="hover:text-cream transition-all duration-300">:</span>
      <span className="hover:text-cream transition-all duration-300">09</span>

      <span className="hover:text-cream transition-all duration-300">:</span>
      <span className="hover:text-cream transition-all duration-300">04</span>
    </div>
  );
}

export default Clock;
