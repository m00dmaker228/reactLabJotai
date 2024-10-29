import React from 'react';
import { useAtom } from 'jotai';
import styles from './Home.module.css';
import { Movie } from '../../components/movie/Movie';
import { isLoadingAtom } from '../../state/atoms';

export const Home = ({movies}) => {
    const [isLoading] = useAtom(isLoadingAtom);
    return (
        <section className="movie-list container">
            {isLoading ? (
                <div className="loader">
                    <span className="loader_text">Загрузка...</span>
                </div>
            ) : (
                <div className={styles.movieGrid}>
                      {movies.slice(0, 10).map((movie) => ( 
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
