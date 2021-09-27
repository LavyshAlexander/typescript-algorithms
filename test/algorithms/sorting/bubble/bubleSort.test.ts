import 'mocha'
import { bubbleSort } from '../../../../src/algorithms/sorting'
import {
	testUnsortedArray, testSortedArray, testEqualArray,
	testNegativeArray, testReversedArray,
	testEmptyArray, testEmptyArrayRef,
} from '../common'


describe( 'bubble sort', () => {
	it(
		'should return sorted array',
		testUnsortedArray( bubbleSort )
	)

	it(
		'should not change sorted array',
		testSortedArray( bubbleSort )
	)

	it(
		'should not change array with equal elements',
		testEqualArray( bubbleSort )
	)

	it(
		'should correctly sort array with negative numbers',
		testNegativeArray( bubbleSort )
	)

	it(
		'should correctly sort reversed array',
		testReversedArray( bubbleSort )
	)

	it(
		'should return empty array if in input was empty array',
		testEmptyArray( bubbleSort )
	)

	it(
		'should return empty array if in input was empty array but by different ref',
		testEmptyArrayRef( bubbleSort )
	)
})
