import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Movies } from './pages/movies/Movies';
import { useAtom } from 'jotai';
import { moviesAtom, isLoadingAtom } from './state/atoms';
import { fetchMovies } from './components/movie/api/movieApi'; 
import { MovieDetail } from './pages/movieDetail/MovieDetail';

function App() {
    const [movies, setMovies] = useAtom(moviesAtom);
    const [, setIsLoading] = useAtom(isLoadingAtom);

    useEffect(() => {
        const loadMovies = async () => {
            setIsLoading(true);
            for(let i=1;i<=20;i++){
                await fetchMovies(setMovies, setIsLoading,i);
            }
        };
        loadMovies();
    }, [setMovies, setIsLoading]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home  movies={movies}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/movies" element={<Movies movies={movies} />} />
                <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
