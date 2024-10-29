import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './MovieDetail.module.css';

export const MovieDetailComponent = ({ movies }) => {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === parseInt(id));

    if (!movie) {
        return <div>Фільм не знайдено!</div>;
    }

    return (
        <div className={styles.detailContainer}>
            <Link to="/movies" className={styles.backLink}>Назад до списку фільмів</Link>
            <h1 className={styles.title}>{movie.title} ({movie.year})</h1>
            <img src={movie.medium_cover_image} alt={movie.title} className={styles.poster} />
            <p className={styles.summary}>{movie.summary}</p>
            <h3 className={styles.genres}>Жанри:</h3>
            <ul className={styles.genresList}>
                {movie.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))}
            </ul>
        </div>
    );
};
