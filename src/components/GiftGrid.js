import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GiftGridItem } from './GiftGridItem';
//
export const GiftGrid = ( { category } ) => {
	//
	const { data:images, loading } = useFetchGifs( category );
	//
	return (
		<>
			<h3 className="animate__animated animate__fadeIn">{ category }</h3>
			{ loading && <p className="animate__animated animate__flash">Cargando</p> }
			<div className="card-grid">
				{ images.map( (gif) => <GiftGridItem key={ gif.id } { ...gif } /> ) }
			</div>
		</>
	)
}
