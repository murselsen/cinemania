import { heroRender } from './js/hero.js';
import './js/trends.js';
document.addEventListener('DOMContentLoaded', async () => {
  try {
    heroRender();
  } catch (error) {
    console.error('Error loading data in DOMContentLoaded event:', error);
  }
});
