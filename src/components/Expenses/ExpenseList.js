import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No expense found!</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
