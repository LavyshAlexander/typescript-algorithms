export function heapSort( array: number[] ): number[] {
	const result: number[] = [ ...array ]
	const length = result.length

	createHeap( result, length )

	for( let i = length - 1; i > 0; i-- ) {
		[ result[0], result[i] ] = [ result[i], result[0] ]
		createHeap( result, i )
	}

	return result
}


function createHeap( array: number[], length: number ) {
	const nodesCount = Math.floor( length / 2 )

	for ( let i = nodesCount; i >= 0; i-- ) {
		heapify( array, i, length )
	}
}

function heapify( heap: number[], index: number, length: number ): void {
	let largest: number

	do {
		const left = 2 * index + 1
		const right = 2 * index + 2
		largest = index

		if ( left < length && heap[left] > heap[largest] ) {
			largest = left
		}

		if ( right < length && heap[right] > heap[largest] ) {
			largest = right
		}

		if ( largest !== index ) {
			[ heap[index], heap[largest] ] = [ heap[largest], heap[index] ]
		}
	} while (largest !== index)
}
