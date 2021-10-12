import React, { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpenseFilter from "../Expenses/ExpensesFilter";
import Card from "../UI/Card";

// styling
import "../Expenses/ExpenseItem.css";

const ExpenseData = (props) => {
  
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  // 1 root JSX ELEMENT === <div>
  // remember to put in a (<div></div>)
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default ExpenseData;
