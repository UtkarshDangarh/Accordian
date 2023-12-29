import React, { useState } from "react";

function QuestionLayout({ id, title, info, toggle, activeId }) {
  // here we're checking if the id we clicked on is equal to the activeId if true we'll use ternary operator
  // and && operator to show data and change state of button
  const isActive = id === activeId;

  return (
    <div className="flex flex-col p-3 max-w-md">
      <div className="bg-blue-300  ">
        <div className="flex flex-row justify-between rounded-md p-3">
          <h4 className="text-lg">{title}</h4>
          <button
            className="bg-black border-1 rounded-md w-16 text-white "
            onClick={() => toggle(id)}
          >
            {isActive ? "Hide" : "Show"}
          </button>
        </div>
        {isActive && <p className=" p-3">{info}</p>}
      </div>
    </div>
  );
}

export default QuestionLayout;
