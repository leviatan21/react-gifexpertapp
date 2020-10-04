import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';
//
describe( 'Puebas en <getGifs />', () => {
	test( 'Helpers getGifs', async ( ) => {
		const gifs = await getGifs( 'Goku' );
		//	console.log( gifs );
		expect( gifs.length ).toBe( 10 );
	} );
} );