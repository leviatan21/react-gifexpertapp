import React from 'react';
import PropTypes from 'prop-types'
//
export const GiftGridItem = ( { title, url } ) => {
	//
	return (
		<div className="card animate__animated animate__fadeIn animate__delay-2s">
			<img src={ url } alt={ title } />
			<p>{ title }</p>
		</div>
	)
}
//
GiftGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}