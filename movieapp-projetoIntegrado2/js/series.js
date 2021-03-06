function seriesData() {
  getTvShowDetails();
  getTvShowReviews();
  getSeriesRecommendations();
  getPopularSeries();
  getTvShowImages();
  getTvShowTrailer();
  getAiringSerie();
  getGenresTv();
  filterTv();
  seriesPagination();
  getTvStreams();
  // getToken();
  // createSession();
  // getAccount();
  markFavorite();
}

// const inputElement = document.getElementById("searchInput");
const seriesFilter2 = document.querySelector("#movies-filter");
const seriesContainer = document.getElementById("upcoming-movies");
const seriesFilter = document.querySelector("#movies-filter");
const selectBtnTv = document.getElementById("select-genre");
const popularSeriesContainer = document.getElementById("popular-series");
const displayPopularSeries = document.getElementById(
  "popular-series-container"
);

const renderFilteredTv = (data) => {
  seriesFilter2.innerHTML = "";
  seriesFilter2.style.display = "grid";
  const results = data.results;

  let output = ``;
  for (let i in results) {
    if (!results[i].media_type || results[i].media_type === "tv") {
      if (results[i].poster_path) {
        output += `
              <div class="movie-item">
        <div class ="img-container">
           <img class="movie-poster series-poster" id="series-poster" src ="${
             IMAGE_URL + results[i].poster_path
           }" data-series-id="${results[i].id}"/>
           <div class="details-btn">
              <button>Details</button>
           </div>
        </div>
        <span class="movie-title">${results[i].name}</span> 
        <div class ="movie-rating">
           <i class="far fa-star"></i><p>${results[i].vote_average}</p>
        </div>
     </div>  
            `;
      }
    }
    document.querySelector("#movies-filter").innerHTML = output;
  }

  document.querySelector(".filter-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const genreValue = selectBtn.value;
    const popularValue = popularSelect.value;
    const genreTxt = selectBtn.options[selectBtn.selectedIndex].text;
    const filterTxt = filterSelect.options[filterSelect.selectedIndex].text;
    displayPopularSeries.style.display = "none";

    filterTv(genreValue, popularValue);

    document.querySelector("form").classList.remove("nav-active");
    document.querySelector(".name-value").style.display = "none";
    document.querySelector(".item-searched").style.display = "flex";
    document.getElementById("genre").innerHTML = genreTxt;
    document.getElementById("filter").innerHTML = filterTxt;

    document
      .querySelector(".pagination-btn")
      .classList.add("show", "pagination");
  });
};

//Series Details
document.addEventListener("click", (e) => {
  if (e.target.id == "series-poster") {
    let movieId = e.target.getAttribute("data-series-id");
    seriesDetails(movieId);
  }
});

function renderPopularSeries(data) {
  const series = data.results;

  let output = ``;
  for (let i in series) {
    if (series[i].poster_path) {
      output += `
          <div class="movie-item">
           <div class ="img-container">
              <img class="movie-poster series-poster" id="series-poster" src ="${
                IMAGE_URL + series[i].poster_path
              }" data-series-id="${series[i].id}"/>
           <div class="details-btn">
              <button>Details</button>
           </div>
           </div>
           <span class="movie-title">${series[i].name}</span>    
           <div class ="movie-rating">
              <i class="far fa-star"></i><p>${series[i].vote_average}</p>
           </div>
          </div>  
       `;
      document.getElementById("popular-series").innerHTML = output;
    }
  }
}

//get series id
function seriesDetails(id) {
  sessionStorage.setItem("seriesId", id);
  window.location = "tv-show.html";
  return false;
}

function getSeriesImages(data) {
  const img = data.backdrops;
  document.getElementById("movie-banner").style.backgroundImage = `url('${
    "https://image.tmdb.org/t/p/original" + img[0].file_path
  }')`;
}

const getSeriesDetails = (data) => {
  const series = data;
  // console.log(series)
  const genre = data.genres;
  const genreName = genre.map((e) => `<span>${e.name}</span>`).join(", ");

  let output = `
          <div class = "poster-movie">
          <img src = "${IMAGE_URL + series.poster_path}"/>
          <div class="bgimg"></div>
        </div>
        <div class= "details-container">    
          <div class="movie-title">
              <span></span>
              <h1>${series.title}</h1>
          </div>
          <div class = "overview">
             <div class="title-section">
                <span></span>
                <h1>Sinopse do filme</h1>
             </div>
          <p>${series.overview}</p>
        </div>
        <div class = "detail-info">
           <div class="title-section">
              <span></span>
              <h1>Detalhes do filme</h1>
           </div>    
           <ul>
             <li><span class="contrast">Titulo:</span> ${series.title}</li>
             <li><span class="contrast">Data de lançamento:</span> ${
              series.release_date
             }</li>
             <li><span class="contrast">Gênero:</span> ${genreName}</li>
             <li><span class="contrast">Duração:</span> ${
              series.runtime
             } min</li>
             <li><span class="contrast">Avaliação: </span> ${
              series.vote_average
             }</li>
           </ul>
           

           <div class="streams">
              
           </div>
           
           <div class"actions">
           <button class="favorite-tv">Favoritar <i class="fas fa-heart"></i></button> 
           <button class="watchlist3">Adicionar à lista <i class="fas fa-list"></i></button>
           </div>
        </div>
          
      `;
  document.getElementById("series-detail").innerHTML = output;

  document.addEventListener("click", (e) => {
   if (e.target.className === "favorite-tv") {
      fetch(
        `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=4a5e130486cb63a2caff652d783f6a36&session_id=${localStorage.getItem(
          "sessionId"
        )}`,
        {
          method: "POST",
          body: JSON.stringify({
            media_type: "tv",
            media_id: `${series.id}`,
            favorite: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
    } else if (e.target.className === "watchlist3") {
      fetch(
        `https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=4a5e130486cb63a2caff652d783f6a36&session_id=${localStorage.getItem(
          "sessionId"
        )}`,
        {
          method: "POST",
          body: JSON.stringify({
            media_type: "tv",
            media_id: `${series.id}`,
            watchlist: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });

    } else if(e.target.classList === "removeTv"){
      console.log('xd')
      fetch(
        `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=4a5e130486cb63a2caff652d783f6a36&session_id=${localStorage.getItem(
          "sessionId"
        )}`,
        {
          method: "POST",
          body: JSON.stringify({
            media_type: "tv",
            media_id: `${series.id}`,
            favorite: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
    }
  });
};

//select genres
function selectGenresTv(data) {
  const genreOptions = data.genres;
  let output = `<option value = "" selected="true">Todos</option>`;
  for (let i in genreOptions) {
    output += `
           <option value="${genreOptions[i].id}">${genreOptions[i].name}</option>
      `;
    document.getElementById("select-genre").innerHTML = output;
  }
}

//Series Reviews
function getSeriesReviews(data) {
  const series = data.results;
  let output = ``;
  if (series.length === 0) {
    document.querySelector(".reviews-section").style.display = "none";
  } else {
    for (let i in series) {
      if (series[i].content) {
        output += `
          <div>
              <h3>Por: ${series[i].author}</h3>
              <p>${series[i].content}</p>
              <a href = "${series[i].url}">Review oficial</a>
          </div>
          `;
        document.querySelector(".movie-reviews").innerHTML = output;
      }
    }
  }
}

//Similar series
function getSimilarSeries(data) {
  const series = data.results;
  let output = ``;
  if (series.length === 0) {
    document.querySelector(".similar-section").style.display = "none";
  } else {
    for (let i in series) {
      if (series[i].poster_path) {
        output += `
            <div class ="swiper-slide">
               <img class="movie-poster series-poster" id="series-poster" src ="${
                 IMAGE_URL + series[i].poster_path
               }" data-series-id="${series[i].id}"/> 
               <p>${series[i].name}</p>
            </div>
          `;
        document.querySelector(".swiper-wrapper").innerHTML = output;
      }
    }
  }
}

const getSerieTrailer = (data) => {
  const movie = data.results;
  let output = `
       <a class="popup-youtube" href="https://www.youtube.com/watch?v=${movie[0].key}"><i class="far fa-play-circle"></i></a>   
    `;
  document.querySelector(".movie-trailer").innerHTML = output;
};

//Pagination of popular Series
function seriesPagination() {
  var value = 1;
  document.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.id === "next-series") {
      if (value < 1000) {
        value++;
        getPopularSeries(value);
        popularSeriesContainer.innerHTML = "";
      }
    } else if (e.target.id === "previous-series") {
      if (value !== 1) {
        value--;
        getPopularSeries(value);
        popularSeriesContainer.innerHTML = "";
      }
    } else if (e.target.className === "filter-next") {
      if (value < 1000) {
        value++;
        const genreValue = selectBtn.value;
        const popularValue = popularSelect.value;
        filterTv(genreValue, popularValue, value);
        // popularContainer.innerHTML = ""
      }
    } else if (e.target.className === "filter-prev") {
      if (value !== 1) {
        value--;
        const genreValue = selectBtn.value;
        const popularValue = popularSelect.value;
        filterTv(genreValue, popularValue, value);
        // popularContainer.innerHTML = ""
      }
    }
  });
}

//search button
document.querySelector("#search").addEventListener("click", (e) => {
  e.preventDefault();
  if (inputElement.value) {
    displayPopularSeries.classList.add("hide");
  }
});

function renderAiring(data) {
  const series = data.results;
  // console.log(series);
  let output = ``;
  for (let i in series) {
    if (series[i].poster_path) {
      output += `
        <div class ="swiper-slide">
           <img class="movie-poster series-poster" id="series-poster" src ="${
             IMAGE_URL + series[i].poster_path
           }" data-series-id="${series[i].id}"/>
           <span class="movie-date serie-name"><p>${series[i].name}</p></span>
        </div>
     `;
      document.querySelector(".series-airing").innerHTML = output;
    }
  }
}

const renderTvStreams = (data) => {
  const movie = data.results;
  const streams = movie.BR;
  const streamDisponivel = streams.flatrate;
  // console.log(streams)

  let output = `
  
  
  <div class="disponivel">
    <div class="title-section">
      <span></span>
      <h1>Disponível em:</h1>
    </div>
    <img src = "${streamImg + streamDisponivel[0].logo_path}"/> 
  </div>  
  `;
  document.querySelector(".streams").innerHTML = output;
};

// let token = ""
// const getRequestToken = (data) => {
//   const movie = data;
//   console.log(movie)
//   // getAccountd(data.request_token);

//   document.querySelector(".login").addEventListener("click", () => {
//     window.location = `https://www.themoviedb.org/authenticate/${movie.request_token}?redirect_to=http://127.0.0.1:5500/index.html`;
//     localStorage.setItem("request_token", movie.request_token);
//   });
// };

// localStorage.removeItem('sessionId')
// localStorage.removeItem('request_token')

// console.log(token)

// const getAccountd = (data) => {
//   let output = `${data.username} `;
//   // console.log(data)
//   document.querySelector(".login").innerHTML = output;
//   document.querySelector(".username").innerHTML = output;
// };

document.querySelector(".homeSerie").addEventListener("click", () => {
  window.location = "series.html";
  // console.log("xd");
});

document.querySelector(".back-home").addEventListener("click", () => {
  window.location = "series.html";
  // console.log("xd");
});
