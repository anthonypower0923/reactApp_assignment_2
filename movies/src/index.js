// Added comment to be able to commit
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import MovieCreditsPage from "./pages/movieCreditsPage";
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
import ShowReviewPage from "./pages/showReviewPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import SimilarShowsPage from "./pages/similarShowsPage";
import MovieByActorPage from "./pages/movieByActorPage";
import ShowsByActorPage from "./pages/showsByActor";
import LoginPage from "./pages/loginPage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";
import SignUpPage from "./pages/signUpPage";

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
      <AuthContextProvider>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
        <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={ <SignUpPage /> } />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/credits/:id" element={ <MovieCreditsPage /> } />
          <Route path="/similar/:id" element={ <SimilarMoviesPage /> } />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/movies/actor/:id" element={<MovieByActorPage />} />
          <Route element={<ProtectedRoutes />}>
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/tv/favorite" element={
            <TVShowsContextProvider>
              <FavoriteShowsPage /> 
            </TVShowsContextProvider>
            } />
          </Route>
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
            {/* <Route element={<ProtectedRoutes />}> */}
            {/* <Route path="/tv/favorite" element={
            <TVShowsContextProvider>
              <FavoriteShowsPage /> 
            </TVShowsContextProvider> */}
            {/* } /> */}
            {/* </Route> */}
            <Route path="/tvReviews/:id" element={
            <TVShowsContextProvider>
              <ShowReviewPage /> 
            </TVShowsContextProvider>
            } />
            <Route path="/tv/similar/:id" element={
            <TVShowsContextProvider>
              <SimilarShowsPage/> 
            </TVShowsContextProvider>
            } />
            <Route path="/tv/actor/:id" element={
            <TVShowsContextProvider>
              <ShowsByActorPage/> 
            </TVShowsContextProvider>
            } />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
