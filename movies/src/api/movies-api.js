import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

export const login = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const signup = async (username, password) => {
    const response = await fetch('http://localhost:8080/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    });
    return response.json();
};

export const addFavourite = async (movie) => {
  const response = await fetch('http://localhost:8080/api/favouritemovies/', {
      headers: {
          'Content-Type': 'application/json',
          //'Authorization': localStorage.getItem('token')
          'Authorization': window.localStorage.getItem('token')
      },
      method: 'post',
      body: JSON.stringify(movie)
  });
  return response.json();
};

export const removeFavourite = async (movie) => {
  const id  = movie.id;
  console.log(movie.id)
  fetch(`http://localhost:8080/api/favouritemovies/${id}`, {
    headers: {
      'Authorization': localStorage.getItem('token')
    },
      method: 'DELETE',
  });
};

export const getMovies = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies', {
    }
    )
    return response.json();
  };

  export const getUpcoming = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/upcoming', {
    }
    )
    return response.json();
  };

  export const getGenres = async () => {
    const response = await fetch(
      'http://localhost:8080/api/movies/tmdb/genres', {
    }
    )
    return response.json();
  };

  export const getFavourites = async () => {
    const response = await fetch(
      'http://localhost:8080/api/favouritemovies', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    }
    )
    return response.json();
  };