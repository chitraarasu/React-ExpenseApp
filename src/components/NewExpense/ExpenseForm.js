import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // const [userDate, enteredData] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   selectedDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // enteredData({
    //   ...userDate,
    //   enteredTitle: event.target.value,
    // });

    // enteredData((prevData) => {
    //   return {
    //     ...userDate,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // enteredData({
    //   ...userDate,
    //   enteredAmount: event.target.value,
    // });

    // enteredData((prevData) => {
    //   return {
    //     ...userDate,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (event) => {
    setSelectedDate(event.target.value);

    // enteredData({
    //   ...userDate,
    //   selectedDate: event.target.value,
    // });

    // enteredData((prevData) => {
    //   return {
    //     ...userDate,
    //     selectedDate: event.target.value,
    //   };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(selectedDate),
      id: Math.random().toString(),
    };

    props.onNewExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setSelectedDate("");
  };

  const cancelHandler = (event) => {
    event.preventDefault();

    props.onCancel();
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={dateChangeHandler}
            value={selectedDate}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button onClick={submitHandler}>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
