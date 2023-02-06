import React from 'react';
import Card from '../UI/Card';
import './Expense.css';
import Expenseitem from './Expenseitem';
import { useState } from "react";
import ExpensesFilter from './ExpensesFilter';


const Expense=(props) =>{
  const expenses = props.expense;
  const [filteredYear, setFilteredYear] = useState("2020");
 // const[filteredYear,setFilteredYear]=useState();
   const filterChangeHandler = (selectedYear) => {
    
     setFilteredYear(selectedYear);
   };

   const filteredexpenses=expenses.filter((expense)=>{
      return expense.date.getFullYear().toString()===filteredYear;
   });

   let expensecontent=(<p>There is no Expenses</p>)
   if(filteredexpenses.length>0)
   {
    expensecontent=filteredexpenses.map((expense)=>{
      return <Expenseitem key={expense.id} expense={expense}/>});
   }

  return (
    <Card className="expenses">
       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

      {expensecontent}

       {/* {filteredexpenses.length===0 && (<p>There is no Expenses</p>)}
       {filteredexpenses.length>0 && filteredexpenses.map((expense)=>{
          return <Expenseitem key={expense.id} expense={expense}/>;
      })} */}
       
       {/* {
         filteredexpenses.length===0 ? (<p>There is no Expenses</p>):filteredexpenses.map((expense)=>{
          return <Expenseitem key={expense.id} expense={expense}/>;
      })} */}
       
     {/* {expenses.map((expense)=>{
          return <Expenseitem key={expense.id} expense={expense}/>;
      })} */}
    </Card>
  )
}
export default Expense