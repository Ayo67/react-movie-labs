# Assignment 1 - ReactJS app

**Name**: [Ayooluwa Oguntuyi] [20098135]

## Overview

This repository contains the Movies Application, a ReactJS application that allows users to browse and interact with a collection of movies. The app utilises data from The Movie Database (TMDb) API to display information about movies, including trending films, top-rated films, upcoming releases, and details about actors and movies.

The app features functionalities such as displaying favorite movies, viewing movie details, adding and writing reviews, and exploring related movie information such as actors and movie images.

### Features

- **Movie Discovery**: Allows users to explore movies, including trending, top-rated, and upcoming films.
- **Favorite Movies**: Users can view and manage a list of their favorite movies.
- **Movie Details**: Users can see detailed information about each movie, including reviews and images.
- **Actor Information**: Users can view detailed profiles of actors, including their movie credits and images.
- **Movie Reviews**: Users can write and view reviews for movies.

## Setup Requirements

To run the Movies Fan app locally after cloning the repository:

1. **Clone the repository**:
https://github.com/Ayo67/react-movie-labs.git


2. **Navigate to the project directory**:

3. **Install dependencies**:


5. **Run the development server**:




6. Open your browser and go to `http://localhost:3000` to view the app.

## API Endpoints

- **Top Rated Movies API**: Retrieves all the highest rated films.
- **Trending API**: Retrieves all the current trending films.
- **Upcoming Movies API**: Retrieves the latest upcoming movies.
- **Person API**: Fetches detailed information about specific individuals (actors, directors, etc.).
- **Person Images API**: Retrieves images of actors, directors, and other personalities.
- **Pagination API**: Handles seamless navigation through large datasets.

## Routing

- `/movies/favorites` - Displays the user's favorite movies.
- `/movies/:id` - Displays detailed information about a particular movie.
- `/movies/upcoming` - Displays a list of upcoming movies.
- `/movies/topRated` - Displays a list of top-rated movies.
- `/movies/trending` - Displays a list of currently trending movies.
- `/actor/:id` - Displays detailed information about a specific actor.
- `/reviews/:id` - Displays a particular movie's reviews.
- `/reviews/form` - Allows users to add a new movie review.

### Authentication/Access Control:
- No authentication is required for accessing the public routes of the app.

## Independent Learning

During the development of this project, I researched and implemented the following technologies and techniques independently:

- **React Query**: Used for data fetching and caching in React components. The `useQueries` hook was used to fetch data for multiple movies in parallel, and caching was implemented for improved performance.
- **React Router**: Used for handling client-side routing and creating dynamic URLs for movie and actor details.
- **Firebase**: Integrated Firebase for storing and managing user data and movie reviews.

### References:
- [React Query Documentation](https://react-query.tanstack.com/)
- [React Router Documentation](https://reactrouter.com/)
- [TMDb API Documentation](https://www.themoviedb.org/documentation/api)

