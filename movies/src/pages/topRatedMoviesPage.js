import React from "react";
// import { useParams } from 'react-router-dom';
// import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getTopRatedMovies} from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'



const TopRatedMoviesPage = (props) => {

    const { data, error, isLoading, isError }  = useQuery(
        "topRated", 
        getTopRatedMovies)
  
    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    } 
    
    const topRatedMovies = data.results;

    // Redundant, but necessary to avoid app crashing.
  const favorites = topRatedMovies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <PageTemplate
      title="Top Rated Movies"
      movies={topRatedMovies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);
};
export default TopRatedMoviesPage;