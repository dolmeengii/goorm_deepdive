import React from 'react'
import "../styles/ExpenseForm.css"

const ExpenseForm = ({edit, charge, amount, handleCharge, handleAmount, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <div className='input-box' id="charge-container">
                    <label htmlFor='charge'> 지출 항목 </label>
                    <input 
                        type='text'
                        id='charge'
                        name='charge'
                        placeholder='예) 렌트비'
                        value={charge}
                        onChange={handleCharge}    
                    />
                </div>
                <div className='input-box' id="amount-container">
                    <label htmlFor='amount'> 비용 </label>
                    <input 
                        type='number'
                        id='amount'
                        name='amount'
                        placeholder='예) 100원'  
                        value={amount}
                        onChange={handleAmount} 
                    />
                </div>
            </div>
            <button id="btn" type='submit'>
                {edit ? "수정" : "제출"}
            </button>
        </form>
            
    )
}

export default ExpenseForm