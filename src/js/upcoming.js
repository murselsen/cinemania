export const upComingRender = async film => {
  try {
    console.log('upcomingRender function called');
    console.log('film:', film);
    const stand__areaUpcoming = document.querySelector('#stand__area-upcoming');
    // Image elements
    const upcomingImage = document.createElement('img');
    upcomingImage.src = `https://image.tmdb.org/t/p/original/${film.backdrop_path}`;
    upcomingImage.alt = film.original_name || film.original_title;
    upcomingImage.classList.add('stand__area-upcoming-image');

    stand__areaUpcoming.appendChild(upcomingImage);
    // UpComing Info Area
    const upcomingInfoArea = document.createElement('div');
    upcomingInfoArea.classList.add('stand__area-upcoming-info');
    upcomingInfoArea.innerHTML = `
      <h2 class="stand__area-upcoming-title">${
        film.original_name || film.original_title
      }</h2>
      <table class="stand__area-upcoming-table">
          <tr>
          <th>Release date</th> <td class="date">03.03.2023</td>
          </tr>
          <tr>
            <th>Vote / Votes</th>
            <td class="vote">
              <span>7.3</span> / <span>1260</span>
            </td>
          </tr>
          <tr>
          <th>Popularity</th> <td>03.03.2023</td>
          </tr>
          <tr>
          <th>Genre</th> <td>03.03.2023</td>
          </tr>
      </table>

      <div class="stand__area-upcoming-overview">
        <h3>ABOUT</h3>
        <p>Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to an ancient city's lost treasure from her latest story. Determined to prove he can be a hero in real life and not just on the pages of her books, Alan sets off to rescue her.</p>
      </div>

      <button type="button" id="film1312334523" class="btn btn-orange-black">Add to my library</button>
    `;

    stand__areaUpcoming.appendChild(upcomingInfoArea);
  } catch (error) {
    console.error('Error in upcomingRender:', error);
  }
};
