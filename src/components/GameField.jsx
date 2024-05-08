import React from 'react'
import style from './GameField.module.css'
import { connect } from 'react-redux'
import {
	stepFigurine,
	toggleActivation,
} from '../redux/reducers/figurinesReducer'
import Cell from './Cell/Cell'

function GameField(props) {
	let fieldElements = props.cells.map(cell => {
		const foundFigurine = props.figurines.find(
			figurine => figurine.position === cell.id
		)

		return (
			<Cell
				id={cell.id}
				cell={cell}
				foundFigurine={foundFigurine}
				figurines={props.figurines}
				stepFigurine={props.stepFigurine}
				toggleActivation={props.toggleActivation}
			/>
		)
	})

	return <div className={style.gameField}>{fieldElements}</div>
}

const mapStateToProps = state => ({
	cells: state.fieldCells.cells,
	figurines: state.figurines.figurines,
})

export default connect(mapStateToProps, { toggleActivation, stepFigurine })(
	GameField
)
