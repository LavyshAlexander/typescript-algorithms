export function combSort( array: number[] ): number[] {
	const result = [ ...array ]

	const shrink = 1.24733
	let gap = result.length
	let sorted = false

	while( !sorted ) {
		if ( gap >= 1) {
			gap = Math.floor( gap / shrink )
		} else {
			gap = 1
			sorted = true
		}

		for( let i = 0; i + gap < result.length; i++ ) {
			const iGap = i + gap

			if ( result[i] > result[iGap] ) {
				[ result[i], result[iGap] ] = [ result[iGap], result[i] ]
				sorted = false
			}
		}
	}

	return result
}
