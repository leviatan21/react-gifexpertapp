import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';
//	rafc
export const GiftExpertApp = () => {
	//	
	const initialState = [ 'One Punch' ];
	const [ categories, setCategories ] = useState( initialState );
	//
	return(
		<>
			<h1>GiftExpertApp</h1>
			<AddCategory setCategories={ setCategories } />
			<hr/>
			{ categories.map( category => <GiftGrid key={ category } category={ category } /> ) }
		</>
	)
};
