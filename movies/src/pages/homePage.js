import React, { useState } from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import { Pagination, Box } from '@mui/material';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0); 

  const itemsPerPage = 20;

  const { data, error, isLoading, isError } = useQuery(
    ['discover', offset],
    () => getMovies(offset),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;
  const totalPages = Math.ceil(data.total_results / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    setOffset((value - 1) * itemsPerPage); 
  };

  // Redundant but necessary to avoid app crashing
  const favorites = movies.filter(m => m.favorite);
  localStorage.setItem('favorites', JSON.stringify(favorites));

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />
      <Box display="flex" justifyContent="center" marginTop="20px">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
      </Box>
    </>
  );
};

export default HomePage;
