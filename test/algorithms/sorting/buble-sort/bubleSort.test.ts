import { bubbleSort } from '../../../../src/algorithms/sorting'
import 'mocha'
import { expect } from 'chai'


describe( 'bubble sort', () => {
	it( 'should return sorted array', () => {
		const unsorted = [ 1,2,9,8,7,5,0 ]
		const sorted   = [ 0,1,2,5,7,8,9 ]

		const result = bubbleSort( unsorted )

		expect( result ).to.deep.equal( sorted )
	} )

	it( 'should return empty array if in input was empty erray', () => {
		const emptyArray: number[] = []

		const result = bubbleSort( emptyArray )

		expect( result ).to.lengthOf( 0 )
	} )
})
