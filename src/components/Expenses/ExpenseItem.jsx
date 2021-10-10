// useState cant be kept outside the function or nested function
// it can be used to show the desired outcome as react only executed once.
// specialkind of variable that can be changed.
import React, { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // usestate always return exact 2 arrays, 1st element is a value, 2nd element is a function for updating the 1st element.
  // doesnt matter what type of data for this useState is
  // console.log(props.title);
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    // calling useState will repeat by calling & execute this component function again
    // useState is a seperated on per component instance basis.
    setTitle("Updated!");
    console.log(title);
  };

  return (
    //   class === className
    // dynamic placeholders
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>testing button</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
