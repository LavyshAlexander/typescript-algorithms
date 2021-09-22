export function selectionSort( array: number [] ): number[] {
	const result = [ ...array ]

	for( let j = 0; j < result.length; j++ ){
		let minValue = result[j]
		let minIndex = j

		for( let i = j + 1; i < result.length; i++ ){
			if ( result[i] < minValue ) {
				[ minValue, minIndex ] = [ result[i], i ]
			}
		}

		if ( j !== minIndex ) {
			[ result[j], result[minIndex] ] = [ result[minIndex], result[j] ]
		}
	}

	return result
}
