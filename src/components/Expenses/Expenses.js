import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import Card from '../UI/Card'
import './Expenses.css'

import { useState } from 'react'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')
  // console.log(props)
  const changeYearHandler = (year) => {
    console.log('expenses.js')
    console.log(year)
    setFilteredYear(year)
  }

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear
  })

  console.log(filteredExpenses)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeYear={changeYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}
export default Expenses
