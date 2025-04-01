export const upComingRender = async film => {
  try {
    console.log('upcomingRender function called');
    console.log('film:', film);
    const upcomingImage = document.createElement('img');
    upcomingImage.src = `https://image.tmdb.org/t/p/original/${film.backdrop_path}`;
    upcomingImage.alt = film.original_name || film.original_title;
    upcomingImage.style.width
  } catch (error) {
    console.error('Error in upcomingRender:', error);
  }
};
