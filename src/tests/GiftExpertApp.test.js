
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GiftExpertApp } from '../GiftExpertApp';
//
describe( 'Puebas en <GiftExpertApp />', ( ) => {
	//
	test( 'Componente GiftExpertApp', ( ) => {
		//
		const defaultState 		= [ 'Batman', 'Spiderman' ];
		const wrapper			= shallow( <GiftExpertApp defaultState={ defaultState } /> );
		const findHeader1		= wrapper.find( 'h1' );
		const findAddCategory	= wrapper.find( 'AddCategory' );
		const findGiftGrid		= wrapper.find( 'GiftGrid' );
		//
		expect( wrapper ).toMatchSnapshot( );
		expect( findHeader1.length ).toBe( 1 ); 
		expect( findAddCategory.length ).toBe( 1 ); 
		expect( findGiftGrid.length ).toBe( defaultState.length ); 
	} );

} );
