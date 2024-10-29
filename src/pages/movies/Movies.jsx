import React, { useState } from 'react';
import { useAtom } from 'jotai';
import styles from './Movies.module.css';
import { Movie } from '../../components/movie/Movie';
import { isLoadingAtom } from '../../state/atoms';
import Paginator from '../../components/pagination/Paginator';

export const Movies = ({ movies }) => {
    const [isLoading] = useAtom(isLoadingAtom);
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 10;

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
    const totalPages = Math.ceil(movies.length / moviesPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <section className="movie-list container">
            {isLoading ? (
                <div className="loader">
                    <span className="loader_text">Загрузка...</span>
                </div>
            ) : (
                <>
                    <div className={styles.movieGrid}>
                        {currentMovies.map((movie) => (
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
                    <Paginator
                        currentPage={currentPage} 
                        totalPages={totalPages} 
                        onNext={handleNextPage} 
                        onPrevious={handlePreviousPage} 
                    />
                </>
            )}
        </section>
    );
};
