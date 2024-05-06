import React from 'react'
import { createContext, useReducer} from 'react'
import AppReducer from './AppReducer'


// initial state
const initialState = {                           // this is a dummy list. Once done you can delete all the list inside
                                                 // the transaction array and make it empty as transaction: []

    transactions: [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]     
}


// Create context <---- see below
export const GlobalContext = createContext(initialState);


// Provider component <---- see below
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



// "GlobalContext" is created to store the value of initialState transaction using 'createContext()' hook 
//  which can be provided(using GlobalProvider <-- a function(you can name it anything)) to other components which are in App.js


// "GlobalProvider" is created so that the components which are wraped under it(see App.js) can access the content of
//  this GlobalState.js file (i.e. to access initialState) 

// "children" <-- are the components which are wrapped under GlobalProvider (see App.js)



// Note: "GlobalContext" is what we are exporting to the other components inside App.js with the help of GlobalProvider function
//        GlobalContext is exported to the GlobalProvider itself in the return() part of GlobalProvider and from there to various 
//        other components.