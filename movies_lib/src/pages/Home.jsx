import { useState, useEffect } from 'react';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

function Home () {

    const [ topMovies, setTopMovies ] = useState([])        

    useEffect(() => {
        const toRateUrl = `${moviesURL}top_rated?${apiKey}`
        getTopRateMovies(toRateUrl);
    },[])

    
    const getTopRateMovies = async (url) => {
        const res = await fetch(url);
        const data =await res.json();
        setTopMovies(data.results)
    }

    console.log(topMovies)
    
    return (
        <div>Home</div>
    )
}


export default Home;

