import axios from 'axios';
const API_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTU5ZDczMTAzOWRjYWNhYzc1ZjBkNmEyZDUzNzFjYSIsIm5iZiI6MTc0MzIwMzMwOC4zMTQsInN1YiI6IjY3ZTcyYmVjMGU4ZWU2NzgxNTY3YTQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H1VcIsy5PEjzy4uHm47ss9XozIyh5LIka9hEmPAOO3k';
axios.defaults.headers.common['accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = API_TOKEN;

const getWeeklyTrends = () => {
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

const getDayTrends = () => {
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

const weeklyTrends = await getWeeklyTrends();
const dayTrends = await getDayTrends();

const heroRender = async () => {
  const stars = [];
  const heroTitle = document.querySelector('#hero__content-title');
  const heroStars = document.querySelector('#hero__content-stars');
  const heroInfoText = document.querySelector('#hero__content-info-text');
  const heroButtonArea = document.querySelector('#hero-content-button-area');
  const heroPoster = document.querySelector('#hero__content-background-image');

  // random number between 0 and 19
  const randomNumber = Math.floor(Math.random() * 20);
  const randomMovie = await dayTrends[randomNumber];

  heroPoster.src = `https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`;
  heroTitle.textContent =
    randomMovie.original_name || randomMovie.original_title;
  heroInfoText.textContent = randomMovie.overview;
};

heroRender();
