import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const newExpenseData = (expenseData) => {
    props.onNewExpense(expenseData);
  };

  const [clickState, SetClickState] = useState(false);

  const clickEventHandler = () => {
    SetClickState(true);
  };

  const cancelClickHandler = () => {
    SetClickState(false);
  };
  return (
    <div className="new-expense">
      {clickState ? (
        <ExpenseForm
          onNewExpenseData={newExpenseData}
          onCancel={cancelClickHandler}
        />
      ) : (
        <button onClick={clickEventHandler}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;
