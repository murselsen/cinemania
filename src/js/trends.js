import { getWeeklyTrends } from './tmdb.js';

const weeklyTrendsList = document.querySelector('#weekly-trends-list');

getWeeklyTrends().then(res => {
  for (let index = 0; index < 3; index++) {
    console.log('res[index]:, res[index]);
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
