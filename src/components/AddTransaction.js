// use Rafce

import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState' // here we are using double dot(..) instead of single dot(.)
                                                       // maybe because both components and context are in the same folder 
                                                       // of 'src'.

const AddTransaction = () => {

  const[text, setText] = useState('')
  const[amount, setAmount] = useState()
 
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault()       // prevent the page from refreshing

    const newTransaction = {

      id: Math.floor(Math.random() * 100000000),

      text,

      amount: +amount        // Here we are passing the amount in this way(i.e. parsing it to a number)
                             // because if we pass it simply as 'amount' just like we have passed 'text'
                             // then it will return the value in the form of string rather than a number,
                             // so in order to convert it into a number we are passing it in this way.
    }

    addTransaction(newTransaction)
  }
  

  return (
    <>
    <h3> Add new transaction </h3>
      <form onSubmit = {onSubmit}>

        <div className = "form-control">
          <label htmlFor = "text"> Text </label>
          <input 
          type = "text"
          value = {text}
          onChange = {(e) => setText(e.target.value)} 
          placeholder = "Enter text..." />
        </div>
        
        <div className = "form-control">
          <label htmlFor = "amount"
            > Amount <br />
            (negative - expense, positive - income)
            </label>
          
          <input 
          type = "number"
          value={amount}
          onChange = {(e) => setAmount(e.target.value)} 
          placeholder = "Enter amount..." />
        </div>
        <button className = "btn"> Add transaction </button>
      </form>

    </>
  )
}

export default AddTransaction