import 'mocha'
import { selectionSort } from '../../../../src/algorithms/sorting'
import {
	testUnsortedArray, testSortedArray, testEqualArray,
	testNegativeArray, testReversedArray,
	testEmptyArray, testEmptyArrayRef,
} from '../common'


describe( 'selection sort', () => {
	it(
		'should return sorted array',
		testUnsortedArray( selectionSort )
	)

	it(
		'should not change sorted array',
		testSortedArray( selectionSort )
	)

	it(
		'should not change array with equal elements',
		testEqualArray( selectionSort )
	)

	it(
		'should correctly sort array with negative numbers',
		testNegativeArray( selectionSort )
	)

	it(
		'should correctly sort reversed array',
		testReversedArray( selectionSort )
	)

	it(
		'should return empty array if in input was empty array',
		testEmptyArray( selectionSort )
	)

	it(
		'should return empty array if in input was empty array but by different ref',
		testEmptyArrayRef( selectionSort )
	)
})
