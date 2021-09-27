import 'mocha'
import { heapSort } from '../../../../src/algorithms/sorting'
import {
	testUnsortedArray, testSortedArray, testEqualArray,
	testNegativeArray, testReversedArray,
	testEmptyArray, testEmptyArrayRef,
} from '../common'


describe( 'heap sort', () => {
	it(
		'should return sorted array',
		testUnsortedArray( heapSort )
	)

	it(
		'should not change sorted array',
		testSortedArray( heapSort )
	)

	it(
		'should not change array with equal elements',
		testEqualArray( heapSort )
	)

	it(
		'should correctly sort array with negative numbers',
		testNegativeArray( heapSort )
	)

	it(
		'should correctly sort reversed array',
		testReversedArray( heapSort )
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
