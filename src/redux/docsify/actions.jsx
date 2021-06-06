import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { 
	getStore,
} from '../../'

export const error = createAction(`DOCSIFY/ERROR`) 
export const config = createAction(`DOCSIFY/CONFIG`) 
export const configLoading = createAction(`DOCSIFY/CONFIG/LOADING`) 
export const configLoaded = createAction(`DOCSIFY/CONFIG/LOADED`) 

export const initDocsfify = () => {
	const store = getStore()
	store.dispatch({type: `DOCSIFY/CONFIG/LOADING`, configLoading: true })
	store.dispatch({type: `APP/OVERLAY`, overlay: true })
	axios.get( `/docsify.json` )
			.then(function( res ) {
				store.dispatch({type: `DOCSIFY/CONFIG/LOADING`, configLoading: false })
				store.dispatch({type: `DOCSIFY/CONFIG/LOADED`, configLoaded: true })
				store.dispatch({type: `DOCSIFY/CONFIG`, config: res.data })
				store.dispatch({type: `APP/OVERLAY`, overlay: false })
				return true
			})
			.catch(function( error ) {
				store.dispatch({type: `DOCSIFY/CONFIG/LOADING`, configLoading: false })
				store.dispatch({type: `DOCSIFY/CONFIG/LOADED`, configLoaded: true })
				store.dispatch({type: `APP/OVERLAY`, overlay: false })
				throwError( error )
				return false
			})
	return false
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `DOCSIFY/ERROR`, error })
	return false
}
