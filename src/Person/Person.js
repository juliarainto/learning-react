import React from "react";

const person = props => {
  return (
    <div>
      <p>
        I'm {props.name ? props.name : "a Person"} and i'm{" "}
        {props.age ? props.age : Math.floor(Math.random() * 30)} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
