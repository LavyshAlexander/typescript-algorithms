export function heapSort( array: number[] ): number[] {
	const result: number[] = [ ...array ]

	// Create heap.
	const nodesCount = Math.floor( result.length / 2 )
	for ( let i = nodesCount; i > 0; i-- ) {
		heapify( result, i )
	}



	return result
}

function heapify( heap: number[], index: number ): void {
	const left = 2 * index
	const right = 2 * index + 1
	let largest = index

	if ( left < heap.length && heap[left] > heap[index] ) {
		largest = left
	}

	if ( right < heap.length && heap[right] > heap[index] ) {
		largest = right
	}

	if ( largest !== index ) {
		[ heap[index], heap[largest] ] = [ heap[largest], heap[index] ]
		heapify( heap, index )
	}
}