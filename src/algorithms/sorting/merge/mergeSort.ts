export function mergeSort( array: number[] ): number[] {
	// const result = sortWithAdditionalMemory( [ ...array ] )
	const result = [ ...array ]

	splitMerge( array, 0, array.length, result )

	return result
}

function splitMerge( array: number[], start: number, end: number, result: number[] ): void {
	if ( end - start <= 1 ) {
		return
	}

	const split = Math.floor( (end + start) / 2 )
	splitMerge( result, start, split, array )
	splitMerge( result, split, end, array )

	merge( array, start, split, end, result )
}

function merge( array: number[], start: number, split: number, end: number, result: number[] ): void {
	let i = start
	let j = split

	for ( let n = start; n < end; n++ ) {
		if ( i < split && ( j >= end || array[i] <= array[j] ) ) {
			result[n] = array[i]
			i++
		} else {
			result[n] = array[j]
			j++
		}
	}
}



function sortWithAdditionalMemory( array: number[] ): number[] {
	if ( array.length <= 1 ) {
		return array
	}

	const splitIndex = Math.ceil( array.length / 2 )
	let leftPart = array.slice( 0, splitIndex )
	let rightPart = array.slice( splitIndex )

	leftPart = sortWithAdditionalMemory( leftPart )
	rightPart = sortWithAdditionalMemory( rightPart )

	const result = new Array<number>()
	let i = 0
	let j = 0

	while ( i < leftPart.length ) {
		while( j < rightPart.length && leftPart[i] > rightPart[j] ) {
			result.push( rightPart[j] )
			j++
		}

		result.push( leftPart[i] )
		i++
	}

	while ( j < rightPart.length ) {
		result.push( rightPart[j] )
		j++
	}

	return result
}
