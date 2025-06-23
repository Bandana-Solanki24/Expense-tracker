import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import Overview from './component/Overview';
import ExpenseForm from './component/ExpenseForm';
import ExpenseList from './component/ExpenseList';
import './App.css';

const App = () => {
  const [filteredMonth, setFilteredMonth] = useState()
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("expenseList"));

    if (stored) setExpenses(stored);
  }, []);


  const addExpense = (newExpense) => {
    const updatedExpense = [newExpense, ...expenses];
    setExpenses(updatedExpense);
    localStorage.setItem("expenseList", JSON.stringify(updatedExpense))
  };



  const deleteExpense = (id) => {
    let updated = expenses.filter((expense) => expense.id != id)
    setExpenses(updated)
    localStorage.setItem("expenseList", JSON.stringify(updated))


  }



  const handleMonthFilter = (month) => {
    setFilteredMonth(month);
  };

  const filteredExpenses = expenses.filter((expense) => {
    if (!filteredMonth) return true;
    return expense.date.slice(5, 7) === filteredMonth;
  });





  return (
    <>
      <Header />
      <div className="app-container">

        <Overview onMonthChange={handleMonthFilter} selectedMonth={filteredMonth} expenses={filteredExpenses} />
        <div className="main-content">
          <ExpenseForm onAddExpense={addExpense} />
          <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} />
        </div>
      </div>
    </>
  );
};

export default App;
