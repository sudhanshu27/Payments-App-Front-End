import React from "react";

const Balance = ({ value }) => {
  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">
        Rs {value ? value.toFixed(2) : null}
      </div>
    </div>
  );
};

export default Balance;
