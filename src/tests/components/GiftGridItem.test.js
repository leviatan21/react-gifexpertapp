
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GiftGridItem } from '../../components/GiftGridItem';
//
describe( 'Puebas en <GiftGridItem />', () => {
	//
	const gif = {
		id:		'3ohc1292yKn6Z1saGs',
		title:	'getpunches GIF by mannyjammy',
		url:	'https://media3.giphy.com/media/3ohc1292yKn6Z1saGs/giphy.gif?cid=b1bbf17c1qvapj1ew4s6nuveegu7o50xrwvlagvr77c1reso&rid=giphy.gif'
	};
	//	console.log( gif );
	const wrapper		= shallow( <GiftGridItem title={ gif.title } url={ gif.url } /> );
	const className		= wrapper.find('div').prop('className');
	const findCard		= wrapper.find( '.card' ).length;
	const findImage		= wrapper.find( 'img' ).props();
	const findImageSrc	= findImage.src.trim();
	const findImageAlt	= findImage.alt.trim();
	const findParrafo	= wrapper.find( 'p' ).text( ).trim();
	//	
	test( 'Componente GiftGridItem', ( ) => {
		expect( wrapper ).toMatchSnapshot();
	} );
	//
	test( 'Encontrar Card', ( ) => {
		expect( findCard ).toBe( 1 );
		expect( className.includes( 'animate__fadeIn' ) ).toBe( true );
	} );
	//
	test( 'Encontrar Imagen src', ( ) => {
		expect( findImageSrc ).toBe( gif.url );
	} );
	//
	test( 'Encontrar Imagen alt', ( ) => {
		expect( findImageAlt ).toBe( gif.title );
	} );
	//	
	test( 'Encontrar Parrafo', ( ) => {
		expect( findParrafo ).toBe( gif.title );
	} );
} );
