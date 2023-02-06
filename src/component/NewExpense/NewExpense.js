import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
const NewExpense =(props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onaddexpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  
  const stopEditingHandler = () => {
    setIsEditing(false);
  };


  return (
    <div className="new-expense">
    {!isEditing && (
      <button onClick={startEditingHandler}>Add New Expense</button>
    )}
    {isEditing && (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    )}
  </div>
    // <div className="new-expense">
    //   <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    // </div>
  );
};

export default NewExpense;;