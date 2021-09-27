import 'mocha'
import { insertionSort } from '../../../../src/algorithms/sorting'
import {
	testUnsortedArray, testSortedArray, testEqualArray,
	testNegativeArray, testReversedArray,
	testEmptyArray, testEmptyArrayRef,
} from '../common'


describe( 'insertion sort', () => {
	it(
		'should return sorted array',
		testUnsortedArray( insertionSort )
	)

	it(
		'should not change sorted array',
		testSortedArray( insertionSort )
	)

	it(
		'should not change array with equal elements',
		testEqualArray( insertionSort )
	)

	it(
		'should correctly sort array with negative numbers',
		testNegativeArray( insertionSort )
	)

	it(
		'should correctly sort reversed array',
		testReversedArray( insertionSort )
	)

	it(
		'should return empty array if in input was empty array',
		testEmptyArray( insertionSort )
	)

	it(
		'should return empty array if in input was empty array but by different ref',
		testEmptyArrayRef( insertionSort )
	)
})
