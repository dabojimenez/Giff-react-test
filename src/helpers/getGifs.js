export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=OxjjAn7Si1An7ZtkF2xdyoRDujEz7cr5&q=${category}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}