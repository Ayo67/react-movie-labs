import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getTrendingMovies } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import PlaylistAdd from "../components/cardIcons/playlistAdd";

const TrendingMoviesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery(
        "trending",
        getTrendingMovies
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    const trendingMovies = data.results;

    return (
        <PageTemplate
            title="Trending"
            movies={trendingMovies} 
            action={(movie) => (
                <>
                    <PlaylistAdd movie={movie} />
                </>
            )}
        />
    );
};

export default TrendingMoviesPage;
