import axios from 'axios';

export const fetchMovies = async (setMovies, setIsLoading, page = 1) => {
    try {
        const { data: { data: { movies } } } = await axios.get(
            `https://yts.mx/api/v2/list_movies.json?page=${page}&sort_by=rating`
        );

        setMovies((prevMovies) => [...prevMovies, ...movies]);
    } catch (error) {
        console.error("Error fetching movies:", error);
    } finally {
        setIsLoading(false);
    }
};
