import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import './MoviesGrid.css';

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

        
    return (
        <div className='container'>
            <h2 className='title'>Melhores Filmes</h2>
            <div className='movies-container'>
                { topMovies.length === 0 && <p>carregando...</p> }
                { topMovies.length > 0 &&
                    topMovies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
            </div>
        </div>
    )
}


export default Home;

