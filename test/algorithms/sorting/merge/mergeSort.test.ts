import 'mocha'
import { mergeSort } from '../../../../src/algorithms/sorting'
import {
	testUnsortedArray, testSortedArray, testEqualArray,
	testNegativeArray, testReversedArray,
	testEmptyArray, testEmptyArrayRef,
} from '../common'

describe( 'merge sort', () => {
	it(
		'should return sorted array',
		testUnsortedArray( mergeSort )
	)

	it(
		'should not change sorted array',
		testSortedArray( mergeSort )
	)

	it(
		'should not change array with equal elements',
		testEqualArray( mergeSort )
	)

	it(
		'should correctly sort array with negative numbers',
		testNegativeArray( mergeSort )
	)

	it(
		'should correctly sort reversed array',
		testReversedArray( mergeSort )
	)

	it(
		'should return empty array if in input was empty array',
		testEmptyArray( mergeSort )
	)

	it(
		'should return empty array if in input was empty array but by different ref',
		testEmptyArrayRef( mergeSort )
	)
})
