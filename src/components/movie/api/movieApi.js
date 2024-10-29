import axios from 'axios';

export const fetchMovies = async (setMovies, setIsLoading) => {
    try {
        const { data: { data: { movies } } } = await axios.get(
            "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
        );
        setMovies(movies);
    } catch (error) {
        console.error("Error fetching movies:", error);
    } finally {
        setIsLoading(false);
    }
};
