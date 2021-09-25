import 'mocha'
import { insertionSort } from '../../../../src/algorithms/sorting'
import { testUnsortedArray, testEmptyArray, testEmptyArrayRef } from '../common'


describe( 'insertion sort', () => {
	it(
		'should return sorted array',
		testUnsortedArray( insertionSort )
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
