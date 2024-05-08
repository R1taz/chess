const CONFIGURE_BUSY_FIELD = 'CONFIGURE_BUSY_FIELD'

const initialState = {
	cells: [
		{
			id: 'A8',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'B8',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'C8',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'D8',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'E8',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'F8',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'G8',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'H8',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'A7',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'B7',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'C7',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'D7',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'E7',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'F7',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'G7',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'H7',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'A6',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'B6',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'C6',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'D6',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'E6',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'F6',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'G6',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'H6',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'A5',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'B5',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'C5',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'D5',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'E5',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'F5',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'G5',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'H5',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'A4',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'B4',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'C4',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'D4',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'E4',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'F4',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'G4',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'H4',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'A3',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'B3',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'C3',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'D3',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'E3',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'F3',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'G3',
			color: 'black',
			isBusy: false,
		},
		{
			id: 'H3',
			color: 'white',
			isBusy: false,
		},
		{
			id: 'A2',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'B2',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'C2',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'D2',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'E2',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'F2',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'G2',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'H2',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'A1',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'B1',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'C1',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'D1',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'E1',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'F1',
			color: 'white',
			isBusy: true,
		},
		{
			id: 'G1',
			color: 'black',
			isBusy: true,
		},
		{
			id: 'H1',
			color: 'white',
			isBusy: true,
		},
	],
}

const fieldCellsReducers = (state = initialState, action) => {
	switch (action.type) {
		case CONFIGURE_BUSY_FIELD:
			return {
				...state,
				cells: state.cells.map(cell => {
					if (cell.id === action.position)
						return { ...cell, isBusy: action.customization }
					return cell
				}),
			}

		default:
			return state
	}
}

export const configureBusyField = (position, customization) => ({
	type: CONFIGURE_BUSY_FIELD,
	position,
	customization,
})

export default fieldCellsReducers
