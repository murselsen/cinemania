import axios from 'axios';

const API_KEY = 'e159d731039dcacac75f0d6a2d5371ca';

const getWeeklyTrends = () => {
  return new Promise((resolve, reject) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/all/day',
        params: { language: 'en-US' },
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTU5ZDczMTAzOWRjYWNhYzc1ZjBkNmEyZDUzNzFjYSIsIm5iZiI6MTc0MzIwMzMwOC4zMTQsInN1YiI6IjY3ZTcyYmVjMGU4ZWU2NzgxNTY3YTQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1VcIsy5PEjzy4uHm47ss9XozIyh5LIka9hEmPAOO3k',
        },
      };

      axios
        .request(options)
        .then(res => {
          console.log(res.data);
          console.log('getWeeklyTrends Success:', res.data.results);
          console.log(
            'https://image.tmdb.org/t/p/w500' + res.data.results[0].poster_path
          );
        })
        .catch(err => console.error(err));
    } catch (error) {
      console.error('getWeeklyTrends Error:', error);
    }
  });
};

getWeeklyTrends();
