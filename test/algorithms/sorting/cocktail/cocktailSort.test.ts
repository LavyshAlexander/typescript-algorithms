import 'mocha'
import { cocktailSort } from '../../../../src/algorithms/sorting'
import {
	testUnsortedArray, testSortedArray, testEqualArray,
	testNegativeArray, testReversedArray,
	testEmptyArray, testEmptyArrayRef,
} from '../common'


describe( 'cocktail sort', () => {
	it(
		'should return sorted array',
		testUnsortedArray( cocktailSort )
	)

	it(
		'should not change sorted array',
		testSortedArray( cocktailSort )
	)

	it(
		'should not change array with equal elements',
		testEqualArray( cocktailSort )
	)

	it(
		'should correctly sort array with negative numbers',
		testNegativeArray( cocktailSort )
	)

	it(
		'should correctly sort reversed array',
		testReversedArray( cocktailSort )
	)

	it(
		'should return empty array if in input was empty array',
		testEmptyArray( cocktailSort )
	)

	it(
		'should return empty array if in input was empty array but by different ref',
		testEmptyArrayRef( cocktailSort )
	)
})
