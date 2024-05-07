import React from 'react'
import { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'


// initial state
const initialState = {                        

    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]     
}


// Create context
export const GlobalContext = createContext(initialState);


// Provider component 
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)     // state --> initialState, dispatch --> AppReducer


    // Actions <-- that make calls to the reducer(i.e. AppReduces.js)
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id                 // to send any data to the Reducer(i.e. AppReduces.js) we are passing it to the
                                        // payload property. 
        })
       }

        function addTransaction(transaction) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction        // to send any data to the Reducer(i.e. AppReduces.js) we are passing it to the
                                            // payload property. 
            })
           }


    return(<GlobalContext.Provider
            value = {{
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }}>
            {children}
            </GlobalContext.Provider>)
}
