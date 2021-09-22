import 'mocha'
import { bubbleSort } from '../../../../src/algorithms/sorting'
import { testUnsortedArray, testEmptyArray, testEmptyArrayRef } from '../common'


describe( 'bubble sort', () => {
	it( 'should return sorted array', testUnsortedArray( bubbleSort ) )

	it( 'should return empty array if in input was empty array', testEmptyArray( bubbleSort ) )

	it( 'should return empty array if in input was empty array but by different ref', testEmptyArrayRef( bubbleSort ) )
})
