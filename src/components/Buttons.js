import React from "react";

const Buttons = ({ buttonName, buttonStyle }) => {
  return (
    <>
      <div>
        <button className={`rounded-lg w-full my-1 ${buttonStyle}`}>
          {buttonName}
        </button>
      </div>
    </>
  );
};

export default Buttons;
