import { configureBusyField } from './fieldCellsReducer'
import * as images from '../../assets/images'
import { checkingTheStepPath } from './checkingTheStepPath'
import { checkingBusyPath } from './checkingBusyPath'

const TOGGLE_ACTIVATION = 'TOGGLE_ACTIVATION'
const SET_NEW_POSITION = 'SET_NEW_POSITION'

const initialState = {
	figurines: [
		{
			position: 'A8',
			active: false,
			color: 'black',
			nameFigurine: 'Ладья',
			urlImg: images.blackRook,
		},
		{
			position: 'B8',
			active: false,
			color: 'black',
			nameFigurine: 'Конь',
			urlImg: images.blackHorse,
		},
		{
			position: 'C8',
			active: false,
			color: 'black',
			nameFigurine: 'Слон',
			urlImg: images.blackOfficer,
		},
		{
			position: 'D8',
			active: false,
			color: 'black',
			nameFigurine: 'Король',
			urlImg: images.blackQueen,
		},
		{
			position: 'E8',
			active: false,
			color: 'black',
			nameFigurine: 'Ферзь',
			urlImg: images.blackKing,
		},
		{
			position: 'F8',
			active: false,
			color: 'black',
			nameFigurine: 'Слон',
			urlImg: images.blackOfficer,
		},
		{
			position: 'G8',
			active: false,
			color: 'black',
			nameFigurine: 'Конь',
			urlImg: images.blackHorse,
		},
		{
			position: 'H8',
			active: false,
			color: 'black',
			nameFigurine: 'Ладья',
			urlImg: images.blackRook,
		},
		{
			position: 'A7',
			active: false,
			color: 'black',
			nameFigurine: 'Пешка',
			urlImg: images.blackPawn,
		},
		{
			position: 'B7',
			active: false,
			color: 'black',
			nameFigurine: 'Пешка',
			urlImg: images.blackPawn,
		},
		{
			position: 'C7',
			active: false,
			color: 'black',
			nameFigurine: 'Пешка',
			urlImg: images.blackPawn,
		},
		{
			position: 'D7',
			active: false,
			color: 'black',
			nameFigurine: 'Пешка',
			urlImg: images.blackPawn,
		},
		{
			position: 'E7',
			active: false,
			color: 'black',
			nameFigurine: 'Пешка',
			urlImg: images.blackPawn,
		},
		{
			position: 'F7',
			active: false,
			color: 'black',
			nameFigurine: 'Пешка',
			urlImg: images.blackPawn,
		},
		{
			position: 'G7',
			active: false,
			color: 'black',
			nameFigurine: 'Пешка',
			urlImg: images.blackPawn,
		},
		{
			position: 'H7',
			active: false,
			color: 'black',
			nameFigurine: 'Пешка',
			urlImg: images.blackPawn,
		},
		{
			position: 'A2',
			active: false,
			color: 'white',
			nameFigurine: 'Пешка',
			urlImg: images.whitePawn,
		},
		{
			position: 'B2',
			active: false,
			color: 'white',
			nameFigurine: 'Пешка',
			urlImg: images.whitePawn,
		},
		{
			position: 'C2',
			active: false,
			color: 'white',
			nameFigurine: 'Пешка',
			urlImg: images.whitePawn,
		},
		{
			position: 'D2',
			active: false,
			color: 'white',
			nameFigurine: 'Пешка',
			urlImg: images.whitePawn,
		},
		{
			position: 'E2',
			active: false,
			color: 'white',
			nameFigurine: 'Пешка',
			urlImg: images.whitePawn,
		},
		{
			position: 'F2',
			active: false,
			color: 'white',
			nameFigurine: 'Пешка',
			urlImg: images.whitePawn,
		},
		{
			position: 'G2',
			active: false,
			color: 'white',
			nameFigurine: 'Пешка',
			urlImg: images.whitePawn,
		},
		{
			position: 'H2',
			active: false,
			color: 'white',
			nameFigurine: 'Пешка',
			urlImg: images.whitePawn,
		},
		{
			position: 'A1',
			active: false,
			color: 'white',
			nameFigurine: 'Ладья',
			urlImg: images.whiteRook,
		},
		{
			position: 'B1',
			active: false,
			color: 'white',
			nameFigurine: 'Конь',
			urlImg: images.whiteHorse,
		},
		{
			position: 'C1',
			active: false,
			color: 'white',
			nameFigurine: 'Слон',
			urlImg: images.whiteOfficer,
		},
		{
			position: 'D1',
			active: false,
			color: 'white',
			nameFigurine: 'Король',
			urlImg: images.whiteQueen,
		},
		{
			position: 'E1',
			active: false,
			color: 'white',
			nameFigurine: 'Ферзь',
			urlImg: images.whiteKing,
		},
		{
			position: 'F1',
			active: false,
			color: 'white',
			nameFigurine: 'Слон',
			urlImg: images.whiteOfficer,
		},
		{
			position: 'G1',
			active: false,
			color: 'white',
			nameFigurine: 'Конь',
			urlImg: images.whiteHorse,
		},
		{
			position: 'H1',
			active: false,
			color: 'white',
			nameFigurine: 'Ладья',
			urlImg: images.whiteRook,
		},
	],
}

const figurinesReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_ACTIVATION:
			return {
				...state,
				figurines: state.figurines.map(figurine => {
					if (figurine.position !== action.position && figurine.active) {
						return { ...figurine, active: !figurine.active }
					}

					if (figurine.position === action.position) {
						return { ...figurine, active: !figurine.active }
					}

					return figurine
				}),
			}

		case SET_NEW_POSITION:
			return {
				...state,
				figurines: state.figurines.map(figurine => {
					if (figurine.position === action.position) {
						return { ...figurine, position: action.newField, active: false }
					}
					return figurine
				}),
			}

		default:
			return state
	}
}

export const toggleActivation = position => ({
	type: TOGGLE_ACTIVATION,
	position,
})
export const setNewPosition = (position, newField) => ({
	type: SET_NEW_POSITION,
	position,
	newField,
})

export const stepFigurine = newField => {
	return (dispatch, getState) => {
		let figurines = getState().figurines.figurines

		// ищет активную фигурку
		let activeFigurine = figurines.find(item => item.active === true)
		if (!activeFigurine) return

		// проверяет может ли фигурка выполнить шаг по траектории
		let isAllowed = checkingTheStepPath(activeFigurine, newField)

		// проверяет нет ли на пути у фигурки других фигур
		let isBusy = checkingBusyPath(activeFigurine, newField, figurines)
		console.log(isBusy)

		if (!isAllowed || !isBusy) {
			dispatch(toggleActivation(activeFigurine.position))
			return
		}

		// снимает занятость с предыдущей клетки и добавляет у новой
		dispatch(configureBusyField(activeFigurine.position, false))
		dispatch(configureBusyField(newField, true))

		// меняет позицию у фигуры
		dispatch(setNewPosition(activeFigurine.position, newField))
	}
}

export default figurinesReducer
