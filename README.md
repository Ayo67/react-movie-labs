# Assignment 1 - ReactJS app

**Name**: [Ayooluwa Oguntuyi] [20098135]

## Overview

This repository contains the Movies Application, a ReactJS application that allows users to browse and interact with a collection of movies. The app utilises data from The Movie Database (TMDb) API to display information about movies, including trending films, top-rated films, upcoming releases, and details about actors and movies.

The app features functionalities such as displaying favorite movies, viewing movie details, adding and writing reviews, and exploring related movie information such as actors and movie images.

### Features

# Features

### 1. Movie Discovery
- Explore a wide range of movies, including:
  - **Trending**: Stay updated on the most popular films.
  - **Top Rated**: Browse highly rated movies from various genres.
  - **Upcoming**: Discover films scheduled for release soon.

### 2. Favorite Movies
- Create and manage a personalized list of favorite movies.

### 3. Movie Details
- Access detailed information about each movie, including:
  - Plot summaries
  - Reviews
  - Images

### 4. Actor Information
- View detailed profiles of actors, featuring:
  - Biographical details
  - Filmography
  - Images

### 5. Movie Reviews
- Write and share reviews for movies.
- Read reviews from other users to gain insights.

### 6. Firebase Authentication
- Secure login and user authentication using Firebase.
- Storing a Users Movies

### 7. Pagination
- Navigation for large lists of movies or reviews

### 8. Static Pages
- Dedicated pages for:
  - **Top Rated**: A list of highest rated movies.
  - **Trending**: A list of the current popular films.


## Setup Requirements

To run the Movies Fan app locally after cloning the repository:

1. **Clone the repository**:
git clone https://github.com/Ayo67/react-movie-labs.git


2. **Navigate to the project directory**:

3. **Install dependencies**:
npm install


4. **Run the development server**:
npm start

5. Open your browser and go to `http://localhost:3000` to view the app.

## API Endpoints

- /movies/favorites - Displays the user's favorite movies.
- /movies/:id - Shows detailed information about a specific movie.
- /movies/upcoming - Displays a list of upcoming movies.
- /movies/topRated - Displays a list of top-rated movies.
- /movies/trending - Displays a list of trending movies.
- /actor/:id - Displays details about a specific actor.
- /reviews/:id - Displays reviews for a particular movie.
- /reviews/form - Allows users to write and submit a new movie review.

## Routing  

- `/login` - Displays the **LoginPage**.  
- `/signup` - Displays the **SignUpPage**.  
- `/reviews/:id` - Displays the **MovieReviewPage** for a specific movie.  
- `/movies/favorites` - Displays the **FavoriteMoviesPage**.  
- `/movies/:id` - Displays the **MoviePage** for a specific movie.  
- `/movies/upcoming` - Displays the **UpcomingMoviesPage**.  
- `/` - Displays the **HomePage**.  
- `/reviews/form` - Displays the **AddMovieReviewPage**.  
- `/actor/:id` - Displays the **ActorDetailsPage** for a specific actor.  
- `/movies/topRated` - Displays the **TopRatedMoviesPage**.  
- `/movies/trending` - Displays the **TrendingMoviesPage**.  
- `*` - Redirects to the home page (`/`) for any undefined route.  


### References:
- [Firebase Console](https://firebase.google.com/)
- [Pagination import](https://mui.com/material-ui/react-pagination/)

