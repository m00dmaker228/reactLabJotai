import React from 'react';
import { Movie } from '../components/movie/Movie';

export const Home = () => {
    const sampleMovie = {
        title: "Inception",
        year: "2010",
        summary: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        poster: "https://i0.wp.com/jerseymanmagazine.com/wp-content/uploads/2022/04/The-Godfather-e1648766305891.jpg?fit=1396%2C1412&ssl=1",
        genres: ["Action", "Sci-Fi", "Thriller"]
    };
    return (
        <div>
            <h1>Home</h1>
            <Movie
                title={sampleMovie.title}
                year={sampleMovie.year}
                summary={sampleMovie.summary}
                poster={sampleMovie.poster}
                genres={sampleMovie.genres}
            />
        </div>
    );
};
