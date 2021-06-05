import { createReducer } from '@reduxjs/toolkit'
import {
  error,
} from "./actions"

export const docsifySlice = {
  error: null,
}

const docsifyReducer = createReducer( docsifySlice, {
 
  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { docsifyReducer }
