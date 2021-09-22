import { expect } from 'chai'


export const testUnsortedArray = ( sortAlgorithm: (array: number[]) => number[] ) => () => {
	const unsorted = [ 1,2,9,8,7,5,0 ]
	const sorted   = [ 0,1,2,5,7,8,9 ]

	const result = sortAlgorithm( unsorted )

	expect( result ).to.deep.equal( sorted )
}


export const testEmptyArray = ( sortAlgorithm: (array: number[]) => number[] ) => () => {
	const emptyArray: number[] = []

	const result = sortAlgorithm( emptyArray )

	expect( result ).to.be.empty
}


export const testEmptyArrayRef = ( sortAlgorithm: (array: number[]) => number[] ) => () => {
	const emptyArray: number[] = []

	const result = sortAlgorithm( emptyArray )

	expect( result ).to.be.empty
	expect( result ).to.not.equal( emptyArray )
}