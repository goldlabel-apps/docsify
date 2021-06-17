import { createAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { 
	getStore,
} from '../../'

export const error = createAction(`DOCSIFY/ERROR`) 
export const config = createAction(`DOCSIFY/CONFIG`) 
export const configLoading = createAction(`DOCSIFY/CONFIG/LOADING`) 
export const configLoaded = createAction(`DOCSIFY/CONFIG/LOADED`) 
export const markdown = createAction(`DOCSIFY/MARKDOWN`) 
export const markdownLoading = createAction(`DOCSIFY/MARKDOWN/LOADING`) 
export const markdownLoaded = createAction(`DOCSIFY/MARKDOWN/LOADED`) 

export const initDocsfify = () => {
	const store = getStore()
	store.dispatch({type: `DOCSIFY/CONFIG/LOADING`, configLoading: true })
	store.dispatch({type: `APP/OVERLAY`, overlay: true })
		
		axios.get( `/table-of-contents.json` )
			.then(function( res ) {
				if ( typeof res.data === `object` ){
					store.dispatch({type: `DOCSIFY/CONFIG`, config: res.data })
				} else {
					console.log ( 'Broken json' )
				}
				store.dispatch({type: `DOCSIFY/CONFIG/LOADING`, configLoading: false })
				store.dispatch({type: `DOCSIFY/CONFIG/LOADED`, configLoaded: true })
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

export const loadMarkdown = () => {
	const store = getStore()
	const file = store.getState().app.appRoute.file
	store.dispatch({type: `DOCSIFY/MARKDOWN/LOADING`, markdownLoading: true })
	axios.get( file )
		.then(function( res ) {
			store.dispatch({type: `DOCSIFY/MARKDOWN`, markdown: res.data })
			store.dispatch({type: `DOCSIFY/MARKDOWN/LOADING`, markdownLoading: false })
			store.dispatch({type: `DOCSIFY/MARKDOWN/LOADED`, markdownLoaded: true })
		})
		.catch(function( error ) {
			store.dispatch({type: `DOCSIFY/MARKDOWN/LOADING`, markdownLoading: false })
			store.dispatch({type: `DOCSIFY/MARKDOWN/LOADED`, markdownLoaded: true })
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
