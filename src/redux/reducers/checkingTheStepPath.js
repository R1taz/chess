export function checkingTheStepPath(figurine, newField) {
	const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

	switch (figurine.nameFigurine) {
		case 'Пешка':
			if (figurine.position[0] !== newField[0]) return false

			if (
				newField[1] - figurine.position[1] === 1 &&
				figurine.color === 'white'
			) {
				return true
			}

			if (
				figurine.position[1] - newField[1] === 1 &&
				figurine.color === 'black'
			) {
				return true
			}

			if (Math.abs(figurine.position[1] - newField[1]) === 2) {
				if (
					(figurine.position[1] === '7' && figurine.color === 'black') ||
					(figurine.position[1] === '2' && figurine.color === 'white')
				) {
					return true
				}
			}

			return false

		case 'Ладья':
			if (
				figurine.position[0] !== newField[0] &&
				figurine.position[1] !== newField[1]
			) {
				return false
			}

			return true

		case 'Слон':
			let diff =
				figurine.position[1] > newField[1]
					? figurine.position[1] - newField[1]
					: newField[1] - figurine.position[1]

			let idxLetterFigurine

			if (figurine.position[0] > newField[0]) {
				idxLetterFigurine = letters.indexOf(figurine.position[0]) - diff
			} else {
				idxLetterFigurine = letters.indexOf(figurine.position[0]) + diff
			}

			if (newField === letters[idxLetterFigurine] + newField[1]) return true

			return false

		case 'Конь':
			if (
				+newField[1] === +figurine.position[1] + 2 ||
				+newField[1] === +figurine.position[1] - 2
			) {
				let idxLetterFigurine =
					newField[0] < figurine.position[0]
						? letters.indexOf(figurine.position[0]) - 1
						: letters.indexOf(figurine.position[0]) + 1
				if (
					newField ===
					letters[idxLetterFigurine] + (+figurine.position[1] + 2)
				)
					return true
				if (
					newField ===
					letters[idxLetterFigurine] + (+figurine.position[1] - 2)
				)
					return true
			}

			if (
				+newField[1] === +figurine.position[1] + 1 ||
				+newField[1] === +figurine.position[1] - 1
			) {
				let idxLetterFigurine =
					newField[0] < figurine.position[0]
						? letters.indexOf(figurine.position[0]) - 2
						: letters.indexOf(figurine.position[0]) + 2

				if (
					newField ===
					letters[idxLetterFigurine] + (+figurine.position[1] + 1)
				)
					return true
				if (
					newField ===
					letters[idxLetterFigurine] + (+figurine.position[1] - 1)
				)
					return true
			}

			return false

		case 'Король':
			if (figurine.position[0] === newField[0]) return true
			if (figurine.position[1] === newField[1]) return true

			if (
				figurine.position[0] !== newField[0] &&
				figurine.position[1] !== newField[1]
			) {
				let diff =
					figurine.position[1] > newField[1]
						? figurine.position[1] - newField[1]
						: newField[1] - figurine.position[1]

				let idxLetterFigurine

				if (figurine.position[0] > newField[0]) {
					idxLetterFigurine = letters.indexOf(figurine.position[0]) - diff
				} else {
					idxLetterFigurine = letters.indexOf(figurine.position[0]) + diff
				}

				if (newField === letters[idxLetterFigurine] + newField[1]) return true

				return false
			}

		case 'Ферзь':
			if (
				+newField[1] === +figurine.position[1] + 1 ||
				+newField[1] === +figurine.position[1] - 1 ||
				newField[1] === figurine.position[1]
			) {
				let idxLetterFigurine

				if (newField[0] < figurine.position[0]) {
					idxLetterFigurine = letters.indexOf(figurine.position[0]) - 1
				}

				if (newField[0] > figurine.position[0]) {
					idxLetterFigurine = letters.indexOf(figurine.position[0]) + 1
				}

				if (newField[0] === figurine.position[0]) {
					idxLetterFigurine = letters.indexOf(figurine.position[0])
				}

				if (newField === letters[idxLetterFigurine] + newField[1]) return true
			}

			return false

		default:
			return false
	}
}
