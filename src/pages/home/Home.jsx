import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import styles from './Home.module.css';
import { Movie } from '../../components/movie/Movie';
import { isLoadingAtom, moviesAtom } from '../../state/atoms';
import { fetchMovies } from '../../components/movie/api/movieApi';

export const Home = () => {
    const [movies, setMovies] = useAtom(moviesAtom);
    const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

    useEffect(() => {
        fetchMovies(setMovies, setIsLoading);
    }, []);

    return (
        <section className="movie-list container">
            {isLoading ? (
                <div className="loader">
                    <span className="loader_text">Загрузка...</span>
                </div>
            ) : (
                <div className={styles.movieGrid}>
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <Movie
                                id={movie.id}
                                title={movie.title}
                                year={movie.year}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};
