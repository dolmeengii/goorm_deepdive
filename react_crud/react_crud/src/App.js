import './App.css';
import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpenses);
  }

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(charge !== "" && amount > 0){
      if(edit){
        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item 
         })

         setExpenses(newExpenses);
         setEdit(false);

      } else{
        const newExpense = {
          id: crypto.randomUUID(),
          charge,
          amount
        }
        
        setExpenses([...expenses, newExpense])
      }
      setCharge('');
      setAmount(0);
    } else {
      console.log('error');
    }
  }

  const handleEdit = (id) => {
    const expense = expenses.find(item => item.id === id);
    const {charge, amount} = expense;

    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  }

  const handleDeleteAll = () => {
    setExpenses([]);
  }

  return (
    <main>
      <h1>예산 계산기</h1>
      <div className="container">
          <ExpenseForm edit={edit} charge={charge} amount={amount} handleSubmit={handleSubmit} handleCharge={handleCharge} handleAmount={handleAmount} />
          <ExpenseList handleDeleteAll={handleDeleteAll} handleEdit={handleEdit} handleDelete={handleDelete} expenses={expenses}/>
      </div>
      <div className='total-container'>
        <p>
          총지출 :
          <span> {expenses.reduce((acc, curr) => {
            return (acc += curr.amount)
          }, 0)} 원</span>
        </p>
      </div>
    </main>
  );
}

export default App;
