
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
//
describe( 'Puebas en <AddCategory />', () => {
	//
	const valueNew 		= 'Goku';
	const setCategories = jest.fn( );
	let wrapper			= shallow( <AddCategory setCategories={ setCategories } /> );
	
	//
	beforeEach( () => {
		jest.clearAllMocks( );
		wrapper			= shallow( <AddCategory setCategories={ setCategories } /> );
	});
	//
	test( 'Componente AddCategory', ( ) => {
		expect( wrapper ).toMatchSnapshot();
	} );
	//
	test( 'Componente Form existe', ( ) => {
		const Form = wrapper.find( 'form' );
		expect( Form.length ).toBe( 1 );
	} );
	//
	test( 'Componente Form vacio', ( ) => {
		wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );
		expect( setCategories ).not.toHaveBeenCalled( );
	} );
	//
	test( 'Componente Input existe', ( ) => {
		const Input = wrapper.find( 'input' );
		expect( Input.length ).toBe( 1 );
	} );
	//
	test( 'Componente Input change', ( ) => {
		wrapper.find( 'input' ).simulate( 'change', { target: { value: valueNew } } );
	} );
	//
	test( 'Componente Form submit', ( ) => {
		const input = wrapper.find( 'input' )
		input.simulate( 'change', { target: { value: valueNew } } );
		wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );
		expect( setCategories ).toHaveBeenCalled( );
		expect( setCategories ).toHaveBeenCalledTimes( 1 );
		expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
		const value = input.prop( 'value' );
		expect( value ).toBe( "" );
	} );
} );
