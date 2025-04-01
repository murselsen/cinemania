export const upComingRender = async film => {
  try {
    console.log('upcomingRender function called');
    console.log('film:', film);
    const stand__area-upcoming
    // Image elements
    const upcomingImage = document.createElement('img');
    upcomingImage.src = `https://image.tmdb.org/t/p/original/${film.backdrop_path}`;
    upcomingImage.alt = film.original_name || film.original_title;
    upcomingInfoArea.classList.add('stand__area-upcoming-image');

    // UpComing Info Area
    const upcomingInfoArea = document.createElement('div');
    upcomingInfoArea.classList.add('stand__area-upcoming-info');
  } catch (error) {
    console.error('Error in upcomingRender:', error);
  }
};
