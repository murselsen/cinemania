import { getWeeklyTrends } from './tmdb.js';

const weeklyTrendsList = document.querySelector('#weekly-trends-list');

const genreMap = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

getWeeklyTrends().then(res => {
  for (let index = 0; index < 3; index++) {
    const film = res[index];

    const date = film.first_air_date || film.release_date;
    const voteAverage = Math.ceil(film.vote_average / 2);
    const tags = film.genre_ids
      .map(genreId => genreMap[genreId] || 'Unknown')
      .flat(1);
    // li
    const stand_item = document.createElement('li');
    stand_item.classList.add('stand__area-item');
    stand_item.style.cursor = 'pointer';

    // img
    const stand_img = document.createElement('img');
    stand_img.src = `https://image.tmdb.org/t/p/original/${film.poster_path}`;
    stand_img.alt = film.original_name || film.original_title;
    stand_img.title = film.original_name || film.original_title;
    stand_item.appendChild(stand_img);

    const stand_content = document.createElement('div');
    stand_content.classList.add('stand__area-item-content');

    const stand_title = document.createElement('h3');
    stand_title.classList.add('stand__area-item-title');
    stand_title.textContent = film.original_name || film.original_title;
    stand_content.appendChild(stand_title);

    const stand_content_footer = document.createElement('div');
    stand_content_footer.classList.add('stand__area-item-content-footer');

    const stand_info = document.createElement('p');
    stand_info.classList.add('stand__area-item-info');
    stand_info.textContent =
      filmData.tags.join(', ') + ' | ' + date.split('-')[0];

    stand_content_footer.appendChild(stand_info);

    const stand_rating = document.createElement('div');
    stand_rating.classList.add('stand__area-item-rating');
    const stars = [
      `<span class="star star-outline"></span>`,
      `<span class="star star-outline"></span>`,
      `<span class="star star-outline"></span>`,
      `<span class="star star-outline"></span>`,
      `<span class="star star-outline"></span>`,
    ];
    for (let i = 0; i < voteAverage; i++) {
      stars[i] = `<span class="star star"></span>`;
    }
    stand_rating.innerHTML = stars.join('');
    stand_content_footer.appendChild(stand_rating);
    stand_content.appendChild(stand_content_footer);
    stand_item.appendChild(stand_content);
    weeklyTrendsList.appendChild(stand_item);
  }
});

/*
<li class="stand__area-item">
            <img src="/img/desktop/1ca8b347be4119a1ea6cf45750a2bc51.png" alt="GHOSTED" title="GHOSTED">
            <div class="stand__area-item-content">
              <h3 class="stand__area-item-title">GHOSTED</h3>
              <div class="stand__area-item-content-footer">
                <p class="stand__area-item-info">Drama, Action | 2023</p>
                <span class="stand__area-item-rating">
                  <span class="star star"></span>
                  <span class="star star"></span>
                  <span class="star star"></span>
                  <span class="star star"></span>
                  <span class="star star"></span>
                </span>
              </div>
            </div>
          </li>
           */
