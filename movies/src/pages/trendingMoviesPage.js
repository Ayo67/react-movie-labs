import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getTrending} from "../api/tmdb-api";
import Spinner from '../components/spinner';
import AddToWatchIcon from "../components/cardIcons/addToWatch";

const TrendingMoviesPage = (props) => {
    const { data, error, isLoading, isError } = useQuery(
        "trending",
        getTrending
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
                    <AddToWatchIcon movie ={movie} />
                </>
            )}
        />
    );
};

export default TrendingMoviesPage;
