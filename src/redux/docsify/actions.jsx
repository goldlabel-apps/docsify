import { createAction } from '@reduxjs/toolkit'
import { 
	getStore,
	// getFStore,
} from '../../'

export const error = createAction(`DOCSIFY/ERROR`) 

export const throwError = error => {
	const store = getStore()
	store.dispatch({type: `DOCSIFY/ERROR`, error })
	return false
}
