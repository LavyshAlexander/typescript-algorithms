export function bubbleSort( array: number[] ): number[] {
	// Clone original array to prevent its modification.
	const result = [ ...array ]

	let doNextRound = true

	for ( let j = 1; doNextRound && j < result.length; j++ ) {
		doNextRound = false

		for ( let i = 0; i < result.length - j; i++ ) {
			if ( result[i] > result[i + 1] ) {
				[ result[i], result[i + 1] ] = [ result[i + 1], result[i] ]
				doNextRound = true
			}
		}
	}

	return result
}
