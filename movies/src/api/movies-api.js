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