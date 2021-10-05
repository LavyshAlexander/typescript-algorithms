import 'mocha'
import { shellSort } from '../../../../src/algorithms/sorting'
import {
	testUnsortedArray, testSortedArray, testEqualArray,
	testNegativeArray, testReversedArray,
	testEmptyArray, testEmptyArrayRef,
} from '../common'


describe( 'heap sort', () => {
	it(
		'should return sorted array',
		testUnsortedArray( shellSort )
	)

	it(
		'should not change sorted array',
		testSortedArray( shellSort )
	)

	it(
		'should not change array with equal elements',
		testEqualArray( shellSort )
	)

	it(
		'should correctly sort array with negative numbers',
		testNegativeArray( shellSort )
	)

	it(
		'should correctly sort reversed array',
		testReversedArray( shellSort )
	)

	it(
		'should return empty array if in input was empty array',
		testEmptyArray( shellSort )
	)

	it(
		'should return empty array if in input was empty array but by different ref',
		testEmptyArrayRef( shellSort )
	)
})
