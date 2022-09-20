import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };

    props.onAddExpense(expenseData);
  };

  const showFormHandler = () => setShowForm(!showForm);

  let content = '';

  if (showForm) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={showFormHandler}
      />
    );
  } else {
    content = (
      <button type='button' onClick={showFormHandler}>
        Add New Expense
      </button>
    );
  }

  return <div className='new-expense'>{content}</div>;
};

export default NewExpense;
