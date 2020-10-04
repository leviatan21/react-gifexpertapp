
import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs';
//
describe( 'Puebas en <useFetchGifs />', ( ) => {
	//
	const category = 'Spiderman';
	//
	test( 'Hook useFetchGifs vacio',  async ( ) => {
		//
		const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ) );
		//	console.log( 'result ', result );
		const { data, loading } = result.current;
		await waitForNextUpdate();
		//	console.log( 'result ', loading );
		//	console.log( 'data', data );
		expect( data ).toEqual( [] );
		expect( loading ).toBe( true );
	} );
	//
	test( 'Hook useFetchGifs lleno', async ( ) => {
		//
		const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ) );
		await waitForNextUpdate();
		//
		const { data, loading } = result.current;
		//
		expect( data.length ).toBe( 10 );
		expect( loading ).toBe( false );
	});
} );
