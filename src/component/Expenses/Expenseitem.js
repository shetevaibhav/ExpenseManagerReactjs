import "./Expenseitem.css" ;
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const Expenseitem=(props)=>
{
    // const expenseDate= props.expense.date.toLocaleString("en-us",
    // {month: "long"});

    
    // const [expenseTitle,setexpenseTitle]=useState(props.expense.title);
    // const [expenseAmount,setexpenseAmount]=useState(props.expense.amount);

    return(
        <Card className="expense-item">
           <div> <ExpenseDate date={props.expense.date}/></div>
            <div className="expense-item__description">
            <h2>{props.expense.title}</h2>
            <div className="expense-item__price">
                <span>&#x20B9;</span>
                {props.expense.amount}
                </div>
            </div>
        </Card>
    );
}
export default Expenseitem;