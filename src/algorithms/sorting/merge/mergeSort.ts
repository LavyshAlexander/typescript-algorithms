export function mergeSort( array: number[] ): number[] {
	const result = mergeSortByRecursion( [ ...array ] )

	return result
}

function mergeSortByRecursion( array: number[] ): number[] {
	if ( array.length <= 1 ) {
		return array
	}

	const splitIndex = Math.ceil( array.length / 2 )
	// TODO: implement without using additional memory
	let leftPart = array.slice( 0, splitIndex )
	let rightPart = array.slice( splitIndex )

	leftPart = mergeSortByRecursion( leftPart )
	rightPart = mergeSortByRecursion( rightPart )

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
