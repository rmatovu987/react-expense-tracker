import { useState } from 'react';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

export default function ExpenseItemList(props) {
  const [filter, setFilter] = useState('2020');

  const changeFilterHandler = (e) => {
    setFilter(e.target.value);
  };

  const filteredExpenses = props.expenses.filter(
    (exp) => exp.date.getFullYear().toString() === filter
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filter} onChangeFilter={changeFilterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
}
