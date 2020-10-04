//
export const getGifs = async ( category ) => {
	const apiKey= '3YP951merOtwJxJIggqn5IIHAzVvokZB';
	const query = encodeURI( category );
	const limit = 10;
	const url 	= `https://api.giphy.com/v1/gifs/search?q=${ query }&limit=${ limit }&api_key=${ apiKey }`;
	//
	const resp = await fetch( url );
	const { data } = await resp.json( );
	const gifs = data.map( gif => {
		//	console.log( gif );
		return {
			id:		gif.id,
			title:	gif.title,
			url:	gif.images?.downsized_medium.url
		}
	});
	//	console.log( gifs );
	return gifs;
}