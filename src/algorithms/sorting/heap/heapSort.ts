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
	let heap: number[]

	if ( length >= array.length ) {
		heap = array
	} else {
		heap = array.slice( 0, length )
	}

	for ( let i = nodesCount; i >= 0; i-- ) {
		heapify( heap, i )
	}

	if ( length < array.length ) {
		array.splice( 0, length, ...heap )
	}
}

function heapify( heap: number[], index: number ): void {
	let largest: number

	do {
		const left = 2 * index + 1
		const right = 2 * index + 2
		largest = index

		if ( left < heap.length && heap[left] > heap[largest] ) {
			largest = left
		}

		if ( right < heap.length && heap[right] > heap[largest] ) {
			largest = right
		}

		if ( largest !== index ) {
			[ heap[index], heap[largest] ] = [ heap[largest], heap[index] ]
		}
	} while (largest !== index)
}
