import 'mocha'
import { selectionSort } from '../../../../src/algorithms/sorting'
import { testUnsortedArray, testEmptyArray, testEmptyArrayRef } from '../common'


describe( 'selection sort', () => {
	it(
		'should return sorted array',
		testUnsortedArray( selectionSort )
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
