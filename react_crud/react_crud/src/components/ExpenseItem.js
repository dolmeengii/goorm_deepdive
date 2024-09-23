import React from 'react'
import '../styles/ExpenseItem.css'

const ExpenseItem = ({expense, handleDelete, handleEdit}) => {
  return (
    <div className='expense-item'>
        <div className='expense-container'>
            <span className='charge'>{expense.charge}</span>
            <span className='amount'>{expense.amount}</span>
        </div>
        <div className='btn-container'>
            <button className="edit-btn" onClick={() => handleEdit(expense.id)}>수정</button>
            <button className='delete-btn' onClick={() => handleDelete(expense.id)}>삭제</button>
        </div>
    </div>
  )
}

export default ExpenseItem