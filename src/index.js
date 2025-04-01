import { heroRender } from './js/hero.js';
import { upComingRender } from './js/upcoming.js';
import { getUpcomingMovies } from './js/tmdb.js';
import './js/trends.js';
document.addEventListener('DOMContentLoaded', async () => {
  try {
    heroRender();

    getUpcomingMovies().then(data => {

      const randomIndex = Math.floor(Math.random() * data.results.length);
      console.log(data.results[randomIndex]);
      upComingRender();
    });

  } catch (error) {
    console.error('Error loading data in DOMContentLoaded event:', error);
  }
});
