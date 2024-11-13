// MoviePage.js
import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieCast } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const MoviePage = () => {
  const { id } = useParams();

  // Fetch movie details
  const { data: movie, error: movieError, isLoading: isMovieLoading, isError: isMovieError } = useQuery(
    ["movie", { id }],
    getMovie
  );

  // Fetch cast details
  const { data: cast, error: castError, isLoading: isCastLoading, isError: isCastError } = useQuery(
    ["cast", { id }],
    getMovieCast
  );

  if (isMovieLoading || isCastLoading) {
    return <Spinner />;
  }

  
  if (isMovieError || isCastError) {
    const errorMessage = isMovieError ? movieError.message : castError.message;
    return <h1>Error fetching data: {errorMessage}</h1>;
  }

  return movie ? (
    <PageTemplate movie={movie}>
      <MovieDetails 
        movie={movie} 
        cast={cast?.cast || []} 
      />
    </PageTemplate>
  ) : (
    <p>Waiting for movie details...</p>
  );
};

export default MoviePage;
