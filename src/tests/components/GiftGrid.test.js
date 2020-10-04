
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GiftGrid } from '../../components/GiftGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock( '../../hooks/useFetchGifs' );
//
describe( 'Puebas en <GiftGrid />', () => {
	//
	const gifs = [
		{
			id:		'3ohc1292yKn6Z1saGs',
			title:	'getpunches GIF by mannyjammy',
			url:	'https://media3.giphy.com/media/3ohc1292yKn6Z1saGs/giphy.gif?cid=b1bbf17c1qvapj1ew4s6nuveegu7o50xrwvlagvr77c1reso&rid=giphy.gif'
		},
		{
			id:		'l41m1H2BYnLRV26QM',
			title:	'Bruce Lee One Inch Punch GIF by Supercompressor',
			url:	'https://media2.giphy.com/media/l41m1H2BYnLRV26QM/giphy.gif?cid=b1bbf17c1qvapj1ew4s6nuveegu7o50xrwvlagvr77c1reso&rid=giphy.gif'
		}
	];
	const category	= 'Goku';
	//
	test( 'Componente GiftGrid', ( ) => {
		//
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true
		});
		//
		const wrapper		= shallow( <GiftGrid category={ category } /> );
		const findHeader3	= wrapper.find( 'h3' );
		const findLoading	= wrapper.find( '.loading' );
		const findCard		= wrapper.find( '.card-grid' );
		const findGridItem	= wrapper.find( 'GiftGridItem' );
		//
		expect( wrapper ).toMatchSnapshot( );
		expect( findHeader3.length ).toBe( 1 );
		expect( findHeader3.text() ).toBe( category );
		expect( findLoading.exists() ).toBe( true );
		expect( findCard.length ).toBe( 1 );
		expect( findGridItem.exists() ).toBe( false );
	} );
	//
	test( 'useFetchGifs', ( ) => {
		//
		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		});
		//
		const wrapper		= shallow( <GiftGrid category={ category } /> );
		const findHeader3	= wrapper.find( 'h3' );
		const findLoading	= wrapper.find( '.loading' );
		const findCard		= wrapper.find( '.card-grid' );
		const findGridItem	= wrapper.find( 'GiftGridItem' );
		//
		expect( wrapper ).toMatchSnapshot( );
		expect( findHeader3.length ).toBe( 1 );
		expect( findHeader3.text() ).toBe( category );
		expect( findLoading.exists() ).toBe( false );
		expect( findCard.length ).toBe( 1 );
		expect( findGridItem.length ).toBe( gifs.length );

	} );
} );
