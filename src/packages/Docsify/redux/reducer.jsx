import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  config,
  configLoading,
  configLoaded,
  markdown,
  markdownLoading,
  markdownLoaded,
} from "./actions"

export const docsifySlice = {
  error: null,
  config: null,
  configLoading: false,
  configLoaded: false,
  markdown: null,
  markdownLoading: false,
  markdownLoaded: false,
}

const docsifyReducer = createReducer( docsifySlice, {
 
  [markdown]: (state, action) => {
    state.markdown = action.markdown
    return state
  },

  [markdownLoading]: (state, action) => {
    state.markdownLoading = action.markdownLoading
    return state
  },

  [markdownLoaded]: (state, action) => {
    state.markdownLoaded = action.markdownLoaded
    return state
  },

  [config]: (state, action) => {
    state.config = action.config
    return state
  },

  [configLoading]: (state, action) => {
    state.configLoading = action.configLoading
    return state
  },

  [configLoaded]: (state, action) => {
    state.configLoaded = action.configLoaded
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { docsifyReducer }
