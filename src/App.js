import './App.css';
//import Expenseitem from './component/Expenseitem';
import NewExpense from'./component/NewExpense/NewExpense';
import Expense from './component/Expenses/Expense';
import { useState } from 'react';



function App() {
  
  const initialexpenses=[
    {id:1,title:"car washing",date:new Date(2021,1,2),amount:5000},
    {id:2,title:"shoping",date:new Date(2021,1,6),amount:7000},
    {id:4,title:"dinner",date:new Date(2019,1,8),amount:9000},
    {id:5,title:"travelling",date:new Date(2020,1,10),amount:4000},
    {id:6,title:"biking",date:new Date(2019,1,10),amount:3000},
  ]

  const[expenses,setexpenses]=useState(initialexpenses);
  const addexpensehandler=(expense)=>
  {
      //console.log(expense);
      setexpenses((prevExpenses)=>
      {
         return [expense,...prevExpenses];
      })
  }
  return (
    <div className="App">
    <NewExpense onaddexpense={addexpensehandler}/>
      {/* {expenses.map((expense)=>{
          return <Expenseitem key={expense.id} expense={expense}/>;
      })}; */}

      <Expense expense={expenses}/>
    </div>
  );
}

export default App;
