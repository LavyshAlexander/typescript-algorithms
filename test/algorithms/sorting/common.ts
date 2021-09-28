import { expect } from 'chai'


const unsorted = [ 12,10,68,41,35,3,99,35,24,2,34,75,96,43,42,75,1,12,46,96,74,28,21,45,50,66,75,15,42,34,15,14,83,99,90,84,99,45,0,9,95,7 ]
const sorted   = [ 0,1,2,3,7,9,10,12,12,14,15,15,21,24,28,34,34,35,35,41,42,42,43,45,45,46,50,66,68,74,75,75,75,83,84,90,95,96,96,99,99,99 ]
const reversed = [ 99,99,99,96,96,95,90,84,83,75,75,75,74,68,66,50,46,45,45,43,42,42,41,35,35,34,34,28,24,21,15,15,14,12,12,10,9,7,3,2,1,0 ]

const unsortedNegative = [ -84,59,-38,65,2,49,-22,96,17,14,-93,13,92,51,19,-23,58,77,96,29,77,20,-32 ]
const sortedNegative   = [ -93,-84,-38,-32,-23,-22,2,13,14,17,19,20,29,49,51,58,59,65,77,77,92,96,96 ]

const equal = [ 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0 ]

const emptyArray: number[] = []


export const testUnsortedArray = ( sortAlgorithm: ( array: number[] ) => number[] ) => () => {
	const result = sortAlgorithm( unsorted )

	expect( result ).to.deep.equal( sorted )
}


export const testSortedArray = ( sortAlgorithm: ( array: number[] ) => number[] ) => () => {
	const result = sortAlgorithm( sorted )

	expect( result ).to.deep.equal( sorted )
}


export const testEqualArray = ( sortAlgorithm: ( array: number[] ) => number[] ) => () => {
	const result = sortAlgorithm( equal )

	expect( result ).to.deep.equal( equal )
}


export const testNegativeArray = ( sortAlgorithm: ( array: number[] ) => number[] ) => () => {
	const result = sortAlgorithm( unsortedNegative )

	expect( result ).to.deep.equal( sortedNegative )
}


export const testReversedArray = ( sortAlgorithm: ( array: number[] ) => number[] ) => () => {
	const result = sortAlgorithm( reversed )

	expect( result ).to.deep.equal( sorted )
}


export const testEmptyArray = ( sortAlgorithm: ( array: number[] ) => number[] ) => () => {
	const result = sortAlgorithm( emptyArray )

	expect( result ).to.be.empty
}


export const testEmptyArrayRef = ( sortAlgorithm: ( array: number[] ) => number[] ) => () => {
	const result = sortAlgorithm( emptyArray )

	expect( result ).to.be.empty.and.not.equal( emptyArray )
}
