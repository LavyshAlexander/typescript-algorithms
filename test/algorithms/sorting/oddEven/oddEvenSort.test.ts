import 'mocha'
import { oddEvenSort } from '../../../../src/algorithms/sorting'
import {
	testUnsortedArray, testSortedArray, testEqualArray,
	testNegativeArray, testReversedArray,
	testEmptyArray, testEmptyArrayRef,
} from '../common'


describe( 'odd-even sort', () => {
	it(
		'should return sorted array',
		testUnsortedArray( oddEvenSort )
	)

	it(
		'should not change sorted array',
		testSortedArray( oddEvenSort )
	)

	it(
		'should not change array with equal elements',
		testEqualArray( oddEvenSort )
	)

	it(
		'should correctly sort array with negative numbers',
		testNegativeArray( oddEvenSort )
	)

	it(
		'should correctly sort reversed array',
		testReversedArray( oddEvenSort )
	)

	it(
		'should return empty array if in input was empty array',
		testEmptyArray( oddEvenSort )
	)

	it(
		'should return empty array if in input was empty array but by different ref',
		testEmptyArrayRef( oddEvenSort )
	)
})
