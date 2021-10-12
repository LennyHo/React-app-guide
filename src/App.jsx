import Expenses from "./components/Expenses/ExpenseData";

import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },

    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },

    {
      id: "e3",
      title: "Care Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    }, 

    {
      id: "e4",
      title: "New Desk (wooden)",
      amount: 450,
      date: new Date(2021, 6, 11),
    },
  ];

  const addExpenseHandler = (expenses) => {
    console.log("sucessfully pass the in app.js!");
    console.log(expenses);
  };
  /*
In detail:
Create a new component that is responsible for displaying expenses
Add multiple ExpenseItem components in that component
Keep the expenses data in the App component and pass that data into the newly created component 
*/

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* uppercase indicates */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
