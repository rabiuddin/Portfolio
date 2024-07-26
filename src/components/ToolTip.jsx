import React, { useRef } from "react";

const ToolTip = ({ techName }) => {
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);
  return (
    <div
      ref={containerRef}
    //   onMouseEnter={({ clientX }) => {
    //     if (!tooltipRef.current || !containerRef) return;
    //     const { lect } = containerRef.current.getBoundingClientRect()
    //     tooltipRef.current.style.left = clientX - left + "px";
    //   }}
    >
      <span
        ref={tooltipRef}
        className="invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-primary text-secondary p-1 rounded-md absolute md:-top-11 md:right-2 -top-8 -right-1 mt-2 whitespace-nowrap font-poppins"
      > 
        {techName}
      </span>
    </div>
  );
};

export default ToolTip;
