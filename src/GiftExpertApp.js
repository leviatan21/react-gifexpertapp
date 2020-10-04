import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';
//	rafc
export const GiftExpertApp = () => {
	//	
	const initialState = [ 'One Punch' ];
	const [ categories, setCategories ] = useState( initialState );
	/**
	const handleAdd = ( ) => {
		//	const state = [...categories];
		//	state.push( 'HunterXHunters' );
		//	setCategories( state );
		//	setCategories( [ ...categories, 'HunterXHunters' ] );
		setCategories( state => [ ...state, 'HunterXHunters' ] );
	}
	**/
	return(
		<>
			<h1>GiftExpertApp</h1>
			<AddCategory setCategories={ setCategories } />
			<hr/>
			{ categories.map( category => <GiftGrid key={ category } category={ category } /> ) }
		</>
	)
};
