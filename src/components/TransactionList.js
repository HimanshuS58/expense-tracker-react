// use rafce

import React from 'react'
import { useContext } from 'react' // <--- see below
import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalState'  // here we are using double dot(..) instead of single dot(.)
                                                        // maybe because both components and context are in the same folder 
                                                        // of 'src'.

const TransactionList = () => {

  const { transactions } = useContext(GlobalContext) // here transaction is not variable(hover over it)


  return (
    <>
       <h3> History </h3>
       <ul className = "list">
        {transactions.map((transaction) => (<Transaction 
                                                         key = {transaction.id}
                                                         transaction = {transaction}
                                                         /> ))} 
        
      </ul>

        </>
  )
}

export default TransactionList


// "useContext" hook is used to pull out anything inside the GlobalContext.
// in simple words useContext hook is used to manipulate the content inside the GlobalContext