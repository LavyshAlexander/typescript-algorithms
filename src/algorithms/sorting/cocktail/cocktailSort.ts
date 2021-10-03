export function cocktailSort( array: number[] ): number[] {
	const result = [ ...array ]

	let sorted = false
	let start = 0
	let end = result.length - 1

	while( !sorted ) {
		sorted = true

		for( let i = start ; i < end ; i++ ) {
			if( result[i] > result[i + 1] ) {
				[ result[i], result[i + 1] ] = [ result[i + 1], result[i] ]
				sorted = false
			}
		}

		for( let i = end ; i > start ; i-- ) {
			if( result[i - 1] > result[i] ) {
				[ result[i - 1], result[i] ] = [ result[i], result[i - 1] ]
				sorted = false
			}
		}

		start++
		end--
	}

	return result
}
