export function insertionSort( array: number[] ): number[] {
	const result = [ ...array ]

	for ( let j = 1; j < result.length; j++ ) {
		for ( let i = j; i > 0; i-- ) {
			if ( result[i] < result[i - 1] ) {
				[ result[i], result[i - 1] ] = [ result[i - 1], result[i] ]
			} else {
				break
			}
		}
	}

	return result
}
