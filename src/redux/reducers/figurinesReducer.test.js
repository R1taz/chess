import figurinesReducer, {
	stepFigurine,
	toggleActivation,
} from './figurinesReducer'

const stateForActive = {
	figurines: [
		{
			position: 1,
			active: false,
			color: 'black',
			nameFigurine: 'Пешка',
			urlImg:
				'https://i1.sndcdn.com/avatars-zUX6dubnRgfSUMgW-UxxxAg-t500x500.jpg',
		},
	],
}

const stateForInactive = {
	figurines: [
		{
			position: 1,
			active: false,
			color: 'black',
			nameFigurine: 'Пешка',
		},
		{
			position: 2,
			active: true,
			color: 'black',
			nameFigurine: 'Конь',
		},
	],
}

test('the figure should become active', () => {
	const action = toggleActivation(1)
	const newState = figurinesReducer(stateForActive, action)
	expect(newState.figurines[0].active).toBe(true)
})

test('the figure should become inactive', () => {
	const action = toggleActivation(1)
	const newState = figurinesReducer(stateForInactive, action)
	expect(newState.figurines[0].active).toBe(false)
})

test('change the activity between the figurines', () => {
	const action = toggleActivation(2)
	const newState = figurinesReducer(stateForInactive, action)
	expect(newState.figurines[0].active).toBe(false)
})

test('should find an active figure', () => {
	const activeFigurine = stepFigurine(stateForInactive)
	expect(activeFigurine).toBe(stateForInactive.figurines[1])
})
