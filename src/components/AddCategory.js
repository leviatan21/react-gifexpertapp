import React, { useState } from 'react';
import PropTypes from 'prop-types'
//	rafcp
export const AddCategory = ( { setCategories } ) => {
	//
	const initialState = "";
	const [ inputValue, setInputValue ] = useState( initialState );
	//
	const handleInputChange = ( e ) => {
		//	console.log( 'handleInputChange', e.target.value );
		setInputValue( e.target.value );
	}
	//
	const handleSubmit = ( e ) => {
		e.preventDefault( );
		//	console.log( 'handleSubmit', inputValue );
		if ( inputValue.trim().length > 2 ) {
			setCategories( state => [ inputValue, ...state ] );
			setInputValue( initialState );
		}
	}
	//
	return (
		<form onSubmit={ handleSubmit }>
			<input 
				type="text"
				value={ inputValue }
				onChange={ handleInputChange }
				placeholder="..."
			/>
		</form>
	)
}
//
AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
}