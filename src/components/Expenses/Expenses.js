import ExpenseList from './ExpenseList';
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from "react/cjs/react.development";
import ExpenseChart from './ExpensesChart';

const Expenses = (props) => {

   const [filteredYear, setFilteredYear] = useState('2022')

   const filterChangeHandler = (selectedYear) =>{
      setFilteredYear(selectedYear);
   };

   const filteredExpense = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
   })

   return (
      <div>
         <Card className="expenses">
            <ExpenseFilter 
            selected={filteredYear} 
            onChangeFiter={filterChangeHandler}
            />
            <ExpenseChart expenses={filteredExpense}/>
            <ExpenseList items={filteredExpense}/>
         </Card>
      </div>
   );
};

export default Expenses;