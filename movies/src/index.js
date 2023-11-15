import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TVHomePage from "./pages/tvHomePage";
import TVShowsContextProvider from "./contexts/tvShowsContext";
import ShowPage from "./pages/tvShowDetailsPage";
import TrendingShowsPage from "./pages/trendingShowsPage";
import FavoriteShowsPage from "./pages/favoriteShowsPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/tv/discover" element={
            <TVShowsContextProvider>
              <TVHomePage /> 
            </TVShowsContextProvider>
            } />
            <Route path="/tv/:id" element={
            <TVShowsContextProvider>
              <ShowPage /> 
            </TVShowsContextProvider>
            } />
            <Route path="/tv/trending" element={
            <TVShowsContextProvider>
              <TrendingShowsPage /> 
            </TVShowsContextProvider>
            } />
            <Route path="/tv/favorite" element={
            <TVShowsContextProvider>
              <FavoriteShowsPage /> 
            </TVShowsContextProvider>
            } />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
