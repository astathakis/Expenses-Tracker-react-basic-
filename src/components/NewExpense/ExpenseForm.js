import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
  // can also use an object to store different states but then make sure when updating pass prevState  to the cb function of the updating function
  const [enteredTitle, setEnteredTitle] = useState('')
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }
  const [enteredAmount, setEnteredAmount] = useState('')
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }
  const [enteredDate, setEnteredDate] = useState('')
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const [toggle, setToggle] = useState(true)

  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    }
    // console.log(expenseData)
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
    setToggle(!toggle)
  }

  const toggleExpenseHandler = () => {
    setToggle(!toggle)
  }

  if (toggle) {
    return (
      <div className="new=expense__control">
        <button onClick={toggleExpenseHandler}>Add New Expense</button>
      </div>
    )
  }
  return (
    //using two way binding by collecting input and reset input on form submissions
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={toggleExpenseHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
export default ExpenseForm
