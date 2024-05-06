// use rafce

import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'   // here we are using double dot(..) instead of single dot(.)
                                                         // maybe because both components and context are in the same folder 
                                                         // of 'src'.

const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map((transaction) => transaction.amount)

  const income = amounts
                        .filter((item) => item > 0)
                        .reduce((total, num) => (total += num), 0)  // read reduce() from:  
                                                                    // **1.> https://www.freecodecamp.org/news/how-to-use-javascript-array-reduce-method/
                        .toFixed(2)

  const expense = amounts
                         .filter((item) => item < 0)
                         .reduce((total, num) => (total += num), 0) * -1  // we are multiplying the result with -1 because the 
                                                                          // return value will be -ve and to make it +ve we are
                                                                          // using (* -1).
                         .toFixed(2)                                                                        
  return (
    <div className = "inc-exp-container">
    <div>
      <h4>Income</h4>
      <p className = "money plus"> ${income} </p>
    </div>
    <div>
      <h4>Expense</h4>
      <p className = "money minus"> ${expense} </p>
    </div>
  </div>

  )
}

export default IncomeExpenses