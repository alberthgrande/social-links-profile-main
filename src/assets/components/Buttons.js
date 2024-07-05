import React from "react";

const Buttons = ({ buttonName, buttonStyle }) => {
  return (
    <>
      <div>
        <button className={`rounded-lg w-2/4 my-1 ${buttonStyle}`}>
          {buttonName}
        </button>
      </div>
    </>
  );
};

export default Buttons;
