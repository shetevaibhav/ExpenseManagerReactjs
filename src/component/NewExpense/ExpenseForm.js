import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {

    // const[entertitle,setentertitle]=useState("");
    // const[enteramount,setenteramount]=useState("");
    // const[enterdate,setenterdate]=useState("");

    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
      });

    const titlechangehandler=(event)=>
    {
        // setentertitle(e.target.value);
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
          });
    }
    const amountchangehandler=(event)=>
    {
       // setenteramount(e.target.value);
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
          });
    }
    const datechangehandler=(event)=>
    {
        
        //setenterdate(e.target.value);
        setUserInput({
            ...userInput,
            enteredDate: event.target.value,
          });
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const newExpense = {
          title: userInput.enteredTitle,
          amount: userInput.enteredAmount,
          date: new Date(userInput.enteredDate),
        };
        // console.log(newExpense);
       props.onSaveExpenseData(newExpense);
        setUserInput({
          enteredTitle:"",
          enteredAmount:"",
          enteredDate:"",
        });
      };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titlechangehandler} value={userInput.enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number"  onChange={amountchangehandler}  value={userInput.enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={datechangehandler}  value={userInput.enteredDate} />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button onClick={props.onCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;