import React from 'react';
import styles from './Movie.module.css';
import { Link } from 'react-router-dom';

export const Movie = ({ id,title, year, summary, poster, genres }) => {
    return (
        <Link to={`/movies/${id}`} className={styles.movieLink}>
        <div className={styles.movieCard}>
            <img src={poster} alt={`${title} poster`} className={styles.moviePoster} />
            <div className={styles.movieDetails}>
                <h2 className={styles.movieTitle}>{title}</h2>
                <p className={styles.movieYear}>{year}</p>
                <div className={styles.movieGenres}>
                    {genres.map((genre, index) => (
                        <span key={index}>{genre}</span>
                    ))}
                </div>
                <p className={styles.movieSummary}>{summary.slice(0, 140)}...</p>
            </div>
        </div>
        </Link>
    );
};