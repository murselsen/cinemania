import axios from 'axios';
const API_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTU5ZDczMTAzOWRjYWNhYzc1ZjBkNmEyZDUzNzFjYSIsIm5iZiI6MTc0MzIwMzMwOC4zMTQsInN1YiI6IjY3ZTcyYmVjMGU4ZWU2NzgxNTY3YTQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1VcIsy5PEjzy4uHm47ss9XozIyh5LIka9hEmPAOO3k';
axios.defaults.headers.common['accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = API_TOKEN;

export const getWeeklyTrends = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get('https://api.themoviedb.org/3/trending/all/week', {
          params: {
            language: 'en-US',
          },
        })
        .then(res => {
          /* console.log(
            'https://image.tmdb.org/t/p/w500' + res.data.results[0].poster_path
          ); */
          resolve(res.data.results);
        })
        .catch(err => console.error(err));
    } catch (error) {
      console.error('getWeeklyTrends Error:', error);
    }
  });
};

export const getDayTrends = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get('https://api.themoviedb.org/3/trending/all/day', {
          params: {
            language: 'en-US',
          },
        })
        .then(res => {
          /* console.log(
            'https://image.tmdb.org/t/p/w500' + res.data.results[0].poster_path
          ); */
          resolve(res.data.results);
        })
        .catch(err => console.error(err));
    } catch (error) {
      console.error('getDayTrends Error:', error);
      reject(error);
    }
  });
};

export const getMovieVideos = async movieId => {
  return new Promise((resolve, reject) => {
    try {
      // url: 'https://api.themoviedb.org/3/movie/movie_id/videos

      axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
          params: { language: 'en-US' },
        })
        .then(res => {
          console.log('Movie Videos:', res);
          console.log('Movie Videos:', res.data.results);

          
        })
        .catch(err => {
          console.error(err);
        });
    } catch (error) {
      console.error('getMovieVideos Error:', error);
      reject(err);
    }
  });
};
