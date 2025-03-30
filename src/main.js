import { heroRender } from './js/hero.js';
import { getWeeklyTrends, getDayTrends } from './js/tmdb.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    heroRender();
  } catch (error) {
    console.error('Error loading data in DOMContentLoaded event:', error);
  }
});
