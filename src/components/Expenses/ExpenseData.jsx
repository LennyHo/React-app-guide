import ExpenseItem from "../Expenses/ExpenseItem";

// styling
import "../Expenses/ExpenseItem.css";

const ExpenseData = (props) => {
  console.log(props);
  // 1 root JSX ELEMENT === <div>
  // remember to put in a (<div></div>)
  return (
    // always put a div as a rule has to be 1 element
    <div className="expenses">
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
    </div>
  );
};

export default ExpenseData;
