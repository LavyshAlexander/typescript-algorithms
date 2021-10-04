export function oddEvenSort( array: number[] ): number[] {
	const result = [ ...array ]

	let doNextRound = true

	do {
		doNextRound = false

		for( let i = 0 ; i < result.length - 1 ; i += 2) {
			if ( result[i] > result[i + 1] ) {
				[ result[i], result[i + 1] ] = [ result[i + 1], result[i] ]
				doNextRound = true
			}
		}

		for( let i = 1 ; i < result.length - 1 ; i += 2 ) {
			if ( result[i] > result[i + 1] ) {
				[ result[i], result[i + 1] ] = [ result[i + 1], result[i] ]
				doNextRound = true
			}
		}

	} while( doNextRound )

	return result
}
