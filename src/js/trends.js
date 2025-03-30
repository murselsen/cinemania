import { getWeeklyTrends } from './tmdb.js';

const weeklyTrendsList = document.querySelector('#weekly-trends-list');

getWeeklyTrends().then(res => {
  for (let index = 0; index < 3; index++) {
    const film = res[index];
    console.log('Film:', film);
    weeklyTrendsList.innerHTML += `<li class="stand__area-item">
            <img src="https://image.tmdb.org/t/p/original/${film.backdrop_path
      }" alt="GHOSTED" title="GHOSTED">
            <div class="stand__area-item-content">
              <h3 class="stand__area-item-title">${film.original_name || film.original_title
      }</h3>
              <div class="stand__area-item-content-footer">
                <p class="stand__area-item-info">${film.} | 2023</p>
                <span class="stand__area-item-rating">
                  <span class="star star"></span>
                  <span class="star star"></span>
                  <span class="star star"></span>
                  <span class="star star"></span>
                  <span class="star star"></span>
                </span>
              </div>
            </div>
          </li>`;
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
