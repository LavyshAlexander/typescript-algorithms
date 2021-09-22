import { selectionSort } from '../../../../src/algorithms/sorting'
import 'mocha'
import { expect } from 'chai'


describe( 'selection sort', () => {
	it( 'should return sorted array', () => {
		const unsorted = [ 1,2,9,8,7,5,0 ]
		const sorted   = [ 0,1,2,5,7,8,9 ]

		const result = selectionSort( unsorted )

		expect( result ).to.deep.equal( sorted )
	} )

	it( 'should return empty array if in input was empty array', () => {
		const emptyArray: number[] = []

		const result = selectionSort( emptyArray )

		expect( result ).to.be.empty
	} )

	it( 'should return empty array if in input was empty array but by different ref', () => {
		const emptyArray: number[] = []

		const result = selectionSort( emptyArray )

		expect( result ).to.be.empty
		expect( result ).to.not.equal( emptyArray )
	} )
})
