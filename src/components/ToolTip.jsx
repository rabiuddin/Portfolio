import React, { useRef } from "react";

const ToolTip = ({ techName }) => {

  return (
    <div >
      <span
        className="invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-primary text-secondary p-1 rounded-md absolute md:-top-11 md:right-2 -top-8 -right-1 mt-2 whitespace-nowrap font-poppins transition duration-500"
      > 
        {techName}
      </span>
    </div>
  );
};

export default ToolTip;
