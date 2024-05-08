export function checkingBusyPath(figurine, newField, figurines) {
	const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

	switch (figurine.nameFigurine) {
		case 'Пешка':
			/* if (figurine.position[1] < newField[1]) {
				let findFigurine = figurines.find(
					item => item === figurine.position[0] + (figurine.position[1] + 1)
				)
				if (!findFigurine) return true
			}

			if (figurine.position[1] > newField[1]) {
				let findFigurine = figurines.find(
					item => item === figurine.position[0] + (figurine.position[1] - 1)
				)
				if (!findFigurine) return true
			}

			return false */
			return true

		case 'Ладья':
			if (figurine.position[0] === newField[0]) {
				if (figurine.position[1] < newField[1]) {
					let findFigurine = figurines.find(
						item =>
							item.position[1] > figurine.position[1] &&
							item.position[1] < newField[1] &&
							item.position[0] === newField[0] &&
							item.color === figurine.color
					)

					if (!findFigurine) return true
				}

				if (figurine.position[1] > newField[1]) {
					let findFigurine = figurines.find(
						item =>
							item.position[1] < figurine.position[1] &&
							item.position[1] > newField[1] &&
							item.position[0] === newField[0] &&
							item.color === figurine.color
					)

					if (!findFigurine) return true
				}
			}

			if (figurine.position[1] === newField[1]) {
				if (figurine.position[0] < newField[0]) {
					let findFigurine = figurines.find(
						item =>
							item.position[0] > figurine.position[0] &&
							item.position[0] < newField[0] &&
							item.position[1] === newField[1] &&
							item.color === figurine.color
					)

					if (!findFigurine) return true
				}

				if (figurine.position[0] > newField[0]) {
					let findFigurine = figurines.find(
						item =>
							item.position[0] < figurine.position[0] &&
							item.position[0] > newField[0] &&
							item.position[1] === newField[1] &&
							item.color === figurine.color
					)

					if (!findFigurine) return true
				}
			}

			return false

		case 'Конь':
			return true

		case 'Слон':
			let diff =
				figurine.position[1] > newField[1]
					? figurine.position[1] - newField[1]
					: newField[1] - figurine.position[1]

			let idxLetterFigurine = letters.indexOf(figurine.position[0])

			if (newField[0] > figurine.position[0]) {
				if (newField[1] > figurine.position[1]) {
					for (let i = 1; i < diff; i++) {
						let findFigurine = figurines.find(
							item =>
								item.position ===
								letters[idxLetterFigurine + i] + (+figurine.position[1] + 1)
						)

						if (findFigurine) return false
					}
				}

				if (newField[1] < figurine.position[1]) {
					for (let i = 1; i < diff; i++) {
						let findFigurine = figurines.find(
							item =>
								item.position ===
								letters[idxLetterFigurine + i] + (+figurine.position[1] - 1)
						)

						if (findFigurine) return false
					}
				}
			}

			if (newField[0] < figurine.position[0]) {
				if (newField[1] > figurine.position[1]) {
					for (let i = 1; i < diff; i++) {
						let findFigurine = figurines.find(
							item =>
								item.position ===
								letters[idxLetterFigurine - i] + (+figurine.position[1] + 1)
						)

						if (findFigurine) return false
					}
				}

				if (newField[1] < figurine.position[1]) {
					for (let i = 1; i < diff; i++) {
						let findFigurine = figurines.find(
							item =>
								item.position ===
								letters[idxLetterFigurine - i] + (+figurine.position[1] - 1)
						)

						if (findFigurine) return false
					}
				}
			}

			return true

		case 'Ферзь':
			return true

		case 'Король':
			if (
				figurine.position[0] === newField[0] ||
				figurine.position[1] === newField[1]
			) {
				if (figurine.position[0] === newField[0]) {
					if (figurine.position[1] < newField[1]) {
						let findFigurine = figurines.find(
							item =>
								item.position[1] > figurine.position[1] &&
								item.position[1] < newField[1] &&
								item.position[0] === newField[0] &&
								item.color === figurine.color
						)

						if (!findFigurine) return true
					}

					if (figurine.position[1] > newField[1]) {
						let findFigurine = figurines.find(
							item =>
								item.position[1] < figurine.position[1] &&
								item.position[1] > newField[1] &&
								item.position[0] === newField[0] &&
								item.color === figurine.color
						)

						if (!findFigurine) return true
					}
				}

				if (figurine.position[1] === newField[1]) {
					if (figurine.position[0] < newField[0]) {
						let findFigurine = figurines.find(
							item =>
								item.position[0] > figurine.position[0] &&
								item.position[0] < newField[0] &&
								item.position[1] === newField[1] &&
								item.color === figurine.color
						)

						if (!findFigurine) return true
					}

					if (figurine.position[0] > newField[0]) {
						let findFigurine = figurines.find(
							item =>
								item.position[0] < figurine.position[0] &&
								item.position[0] > newField[0] &&
								item.position[1] === newField[1] &&
								item.color === figurine.color
						)

						if (!findFigurine) return true
					}
				}
			}

			if (
				figurine.position[0] !== newField[0] &&
				figurine.position[1] !== newField[1]
			) {
				let diff =
					figurine.position[1] > newField[1]
						? figurine.position[1] - newField[1]
						: newField[1] - figurine.position[1]

				let idxLetterFigurine = letters.indexOf(figurine.position[0])

				if (newField[0] > figurine.position[0]) {
					if (newField[1] > figurine.position[1]) {
						for (let i = 1; i < diff; i++) {
							let findFigurine = figurines.find(
								item =>
									item.position ===
									letters[idxLetterFigurine + i] + (+figurine.position[1] + 1)
							)

							if (findFigurine) return false
						}
					}

					if (newField[1] < figurine.position[1]) {
						for (let i = 1; i < diff; i++) {
							let findFigurine = figurines.find(
								item =>
									item.position ===
									letters[idxLetterFigurine + i] + (+figurine.position[1] - 1)
							)

							if (findFigurine) return false
						}
					}
				}

				if (newField[0] < figurine.position[0]) {
					if (newField[1] > figurine.position[1]) {
						for (let i = 1; i < diff; i++) {
							let findFigurine = figurines.find(
								item =>
									item.position ===
									letters[idxLetterFigurine - i] + (+figurine.position[1] + 1)
							)

							if (findFigurine) return false
						}
					}

					if (newField[1] < figurine.position[1]) {
						for (let i = 1; i < diff; i++) {
							let findFigurine = figurines.find(
								item =>
									item.position ===
									letters[idxLetterFigurine - i] + (+figurine.position[1] - 1)
							)

							if (findFigurine) return false
						}
					}
				}
			}

			return true
	}
}
