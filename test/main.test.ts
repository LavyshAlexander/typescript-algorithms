import { main } from '../src'
import 'mocha'
import { expect } from 'chai'


describe( 'hello', () => {
	it( 'test', () => {
		expect(main).to.not.throw()
	} )
})
