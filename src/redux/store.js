import { combineReducers, configureStore } from '@reduxjs/toolkit'
import fieldCellsReducer from './reducers/fieldCellsReducer'
import figurinesReducer from './reducers/figurinesReducer'

const rootReducer = combineReducers({
	fieldCells: fieldCellsReducer,
	figurines: figurinesReducer,
})

const store = configureStore({ reducer: rootReducer })
window.store = store

export default store
