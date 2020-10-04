import React from 'react'
import PropTypes from 'prop-types'
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
			{ loading && <p className="loading animate__animated animate__flash">Cargando</p> }
			<div className="card-grid">
				{ images.map( (gif) => <GiftGridItem key={ gif.id } { ...gif } /> ) }
			</div>
		</>
	)
}
//
GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
}
