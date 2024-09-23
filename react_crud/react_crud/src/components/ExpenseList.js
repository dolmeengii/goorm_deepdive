import React from 'react'
import ExpenseItem from './ExpenseItem'
import '../styles/ExpenseList.css'

const ExpenseList = ({expenses, handleDelete, handleEdit, handleDeleteAll}) => {
    
  return (
    <>
      <div className='list'>
        { expenses.map(expense => {
            return <ExpenseItem key={expense.id} expense={expense} handleDelete={handleDelete} handleEdit={handleEdit}/>
        })}
      </div>
      <button onClick={handleDeleteAll} id='btn'>
        목록 지우기
      </button>
    </>
  )
}

export default ExpenseList
