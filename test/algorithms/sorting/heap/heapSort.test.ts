import 'mocha'
import { heapSort } from '../../../../src/algorithms/sorting'
import { testUnsortedArray, testEmptyArray, testEmptyArrayRef } from '../common'


describe( 'heap sort', () => {
	it(
		'should return sorted array',
		testUnsortedArray( heapSort )
	)

	it(
		'should return empty array if in input was empty array',
		testEmptyArray( heapSort )
	)

	it(
		'should return empty array if in input was empty array but by different ref',
		testEmptyArrayRef( heapSort )
	)
})
