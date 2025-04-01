export const upComingRender = async film => {
  try {
    console.log('upcomingRender function called');
    console.log('film:', film);
    const upcomingImage = document.createElement('img');
    upcomingImage.src = `https://image.tmdb.org/t/p/original/${film.backdrop_path}`;
    up
  } catch (error) {
    console.error('Error in upcomingRender:', error);
  }
};
