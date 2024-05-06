// use rafce

import React from 'react' 
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'  // here we are using double dot(..) instead of single dot(.)
                                                        // maybe because both components and context are in the same folder 
                                                        // of 'src'.

const Balance = () => {

  const { transactions } = useContext(GlobalContext)

  const amounts = transactions.map((transaction) => transaction.amount)

  const total = amounts.reduce((total, num) => (total += num), 0).toFixed(2) 
                                      // read reduce() from:  
                                      // **1.> https://www.freecodecamp.org/news/how-to-use-javascript-array-reduce-method/
                                      //   2.> https://www.w3schools.com/jsref/jsref_reduce.asp
  return (
    <>
     <h4> Your Balance </h4>
      <h1> ${total}</h1>
    </>
  )
}

export default Balance