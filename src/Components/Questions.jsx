import React, { useState } from "react";
import questions from "../data";
import QuestionLayout from "./QuestionLayout";

const Questions = () => {
  //setting initial activeID state to null onCLick of the button it'll be changed to the id of button user will click
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    //here we are checking: if new id and the id that is active is same then it'll be set to null & if different id will be set to newActiveId
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };
  return (
    <div>
      <section>
        {questions.map((question) => {
          return (
            <QuestionLayout
              key={question.id}
              {...question}
              toggle={toggle}
              activeId={activeId}
            ></QuestionLayout>
          );
        })}
      </section>
    </div>
  );
};

export default Questions;
