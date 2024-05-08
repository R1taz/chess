import React from 'react'
import style from './Cell.module.css'

function Cell(props) {
	let colorField
	if (props.foundFigurine?.active) {
		colorField = style.activeCell
	} else if (props.cell.color === 'white') {
		colorField = style.whiteCell
	} else {
		colorField = style.blackCell
	}

	return (
		<div
			className={`${style.cell} ${colorField}`}
			onClick={
				!props.foundFigurine
					? () => {
							props.stepFigurine(props.id)
					  }
					: null
			}
		>
			{props.foundFigurine ? (
				<img
					src={props.foundFigurine.urlImg}
					onDragStart={e => e.preventDefault()}
					onClick={() => {
						props.toggleActivation(props.foundFigurine.position)
					}}
				/>
			) : null}
		</div>
	)
}

export default Cell
