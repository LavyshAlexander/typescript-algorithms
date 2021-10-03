import 'mocha'
import { combSort } from '../../../../src/algorithms/sorting'
import {
	testUnsortedArray, testSortedArray, testEqualArray,
	testNegativeArray, testReversedArray,
	testEmptyArray, testEmptyArrayRef,
} from '../common'


describe( 'comb sort', () => {
	it(
		'should return sorted array',
		testUnsortedArray( combSort )
	)

	it(
		'should not change sorted array',
		testSortedArray( combSort )
	)

	it(
		'should not change array with equal elements',
		testEqualArray( combSort )
	)

	it(
		'should correctly sort array with negative numbers',
		testNegativeArray( combSort )
	)

	it(
		'should correctly sort reversed array',
		testReversedArray( combSort )
	)

	it(
		'should return empty array if in input was empty array',
		testEmptyArray( combSort )
	)

	it(
		'should return empty array if in input was empty array but by different ref',
		testEmptyArrayRef( combSort )
	)
})
