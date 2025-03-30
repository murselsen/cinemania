import { getDayTrends, getMovieVideos } from './tmdb.js';

export const heroRender = async () => {
  const stars = [
    `<span class="star star-outline"></span>`,
    `<span class="star star-outline"></span>`,
    `<span class="star star-outline"></span>`,
    `<span class="star star-outline"></span>`,
    `<span class="star star-outline"></span>`,
  ];
  const heroTitle = document.querySelector('#hero__content-title');
  const heroStars = document.querySelector('#hero__content-stars');
  const heroInfoText = document.querySelector('#hero__content-info-text');
  const heroButtonArea = document.querySelector('#hero-content-button-area');
  const heroPoster = document.querySelector('#hero__content-background-image');

  // random number between 0 and 19
  const randomNumber = Math.floor(Math.random() * 20);
  const randomMovie = await getDayTrends()[randomNumber];
  console.log('Movie:', randomMovie);

  // vote_average
  const voteAverage = Math.ceil(randomMovie.vote_average / 2);
  console.log('Vote Average:', voteAverage);

  heroPoster.src = `https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`;
  heroTitle.textContent =
    randomMovie.original_name || randomMovie.original_title;
  heroInfoText.textContent = randomMovie.overview;
  for (let i = 0; i < voteAverage; i++) {
    stars[i] = `<span class="star star"></span>`;
  }
  heroStars.innerHTML = stars.join('');

  const movieVideos = await getMovieVideos(randomMovie.id);
};
