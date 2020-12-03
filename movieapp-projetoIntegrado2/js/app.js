// Getting elements from the dom
const inputElement = document.getElementById("searchInput");
const movieFilter = document.querySelector("#movies-filter");
const moviesContainer = document.getElementById("upcoming-movies");
const similarMovies = document.getElementById("similar-movies");
const selectBtn = document.getElementById("select-genre");
const popularSelect = document.getElementById("filter-movie");
const displayPopular = document.getElementById("popular-container");
const popularContainer = document.getElementById("popular-movies");
const filterSelect = document.getElementById("filter-movie");
const searchBtn = document.getElementById("search");

//searchMovies/filter
const renderFilteredMovie = (data) => {
  seriesFilter.innerHTML = "";
  seriesFilter.style.display = "grid";
  const results = data.results;
  let output = ``;
  for (let i in results) {
    if (!results[i].media_type || results[i].media_type === "movie") {
      if (results[i].poster_path) {
        output += `
        <div class="movie-item">
          <div class ="img-container">
             <img class="movie-poster" src ="${
               IMAGE_URL + results[i].poster_path
             }" data-movie-id="${results[i].id}"/>
             <div class="details-btn">
                <button>Details</button>
             </div>
          </div>
          <span class="movie-title">${results[i].title}</span> 
          <div class ="movie-rating">
             <i class="far fa-star"></i><p>${results[i].vote_average}</p>
          </div>
       </div>  
      `;
      }
    } else if (results[i].media_type === "tv" && results[i].poster_path) {
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
    document.querySelector("#movies-filter").innerHTML = output;
  }

  document.querySelector(".filter-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const genreValue = selectBtn.value;
    const popularValue = popularSelect.value;
    const genreTxt = selectBtn.options[selectBtn.selectedIndex].text;
    const filterTxt = filterSelect.options[filterSelect.selectedIndex].text;

    filterMovie(genreValue, popularValue);

    document.querySelector("form").classList.remove("nav-active");
    document.querySelector(".name-value").style.display = "none";
    document.querySelector(".item-searched").style.display = "flex";
    document.getElementById("genre").innerHTML = genreTxt;
    document.getElementById("filter").innerHTML = filterTxt;

    document
      .querySelector(".pagination-btn")
      .classList.add("show", "pagination");
    displayPopular.classList.add("hide");

    // document
    //   .querySelector(".pagination-btn")
    //   .classList.add("show", "pagination");
  });
};

//render movies
function renderUpcoming(data) {
  const movies = data.results;
  // console.log(movies);
  let output = ``;
  for (let i in movies) {
    if (movies[i].poster_path) {
      output += `
      <div class ="swiper-slide">
         <img class="movie-poster" src ="${
           IMAGE_URL + movies[i].poster_path
         }" data-movie-id="${movies[i].id}"/>
         <span class="movie-date"><p>${movies[i].title}</p></span>
      </div>
   `;
      document.querySelector(".swiper-wrapper").innerHTML = output;
    }
  }
}

//render trending results
function renderTrending(data) {
  const results = data.results;
  let output = ``;
  for (let i in results) {
    if (results[i].media_type === "movie") {
      output += `
      <div class ="swiper-slide">
         <img class="movie-poster" src ="${
           IMAGE_URL + results[i].poster_path
         }" data-movie-id="${results[i].id}"/>
         <span class="movie-date">${results[i].release_date}</span>
      </div>
   `;
    } else if (results[i].media_type === "tv") {
      output += `
    <div class ="swiper-slide">
    <img class="movie-poster series-poster" id="series-poster" src ="${
      IMAGE_URL + results[i].poster_path
    }" data-series-id="${results[i].id}"/>
    <span class="movie-date">${results[i].first_air_date}</span>
    </div>
    `;
    }
    document.querySelector("#trending-wrapper").innerHTML = output;
  }
}

//Movie Details
document.addEventListener("click", (e) => {
  if (e.target.className == "movie-poster") {
    let movieId = e.target.getAttribute("data-movie-id");
    movieDetails(movieId);
  }
});

// render popular movies
function renderPopular(data) {
  const movies = data.results;
  let output = ``;
  for (let i in movies) {
    if (movies[i].poster_path) {
      output += `
        <div class="movie-item">
         <div class ="img-container">
            <img class="movie-poster" src ="${
              IMAGE_URL + movies[i].poster_path
            }" data-movie-id="${movies[i].id}"/>
         <div class="details-btn">
            <button>Details</button>
         </div>
         </div>
         <span class="movie-title">${movies[i].title}</span>    
         <div class ="movie-rating">
            <i class="far fa-star"></i><p>${movies[i].vote_average}</p>
         </div>
        </div>  
     `;
      document.getElementById("popular-movies").innerHTML = output;
    }
  }
}

//Error
const handleError = (error) => {
  console.log(error);
};

//search button
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputElement.value) {
    const value = inputElement.value;
    searchMovie(value);

    seriesFilter.style.display = "grid";
    document.querySelector(".item-searched").style.display = "none";
    document.querySelector(".name-value").style.display = "flex";
    document.getElementById("movie-name").innerHTML = value;
    displayPopular.classList.add("hide");
    displayPopularSeries.classList.add("hide");
  } else {
    seriesFilter.style.display = "none";
    document
      .querySelector(".pagination-btn")
      .classList.remove("show", "pagination");
    document.querySelector(".name-value").style.display = "none";
    document.querySelector(".item-searched").style.display = "none";
    displayPopular.classList.remove("hide");
    displayPopularSeries.classList.remove("hide");
    getPopularMovies(1);
  }
});

inputElement.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    searchBtn.click();
  }
});

//get movies id
function movieDetails(id) {
  sessionStorage.setItem("movieId", id);
  window.location = "movie.html";
  return false;
}

//get movie images
function getImages(data) {
  const img = data.backdrops;
  document.getElementById("movie-banner").style.backgroundImage = `url('${
    "https://image.tmdb.org/t/p/original" + img[0].file_path
  }')`;
}

//Movie Details output
const getDetails = (data) => {
  const movie = data;
  console.log(movie)
  const genre = data.genres;
  const genreName = genre.map((e) => `<span>${e.name}</span>`).join(", ");

  let output = `
        <div class = "poster-movie">
          <img src = "${IMAGE_URL + movie.poster_path}"/>
          <div class="bgimg"></div>
        </div>
        <div class= "details-container">    
          <div class="movie-title">
              <span></span>
              <h1>${movie.title}</h1>
          </div>
          <div class = "overview">
             <div class="title-section">
                <span></span>
                <h1>Sinopse do filme</h1>
             </div>
          <p>${movie.overview}</p>
        </div>
        <div class = "detail-info">
           <div class="title-section">
              <span></span>
              <h1>Detalhes do filme</h1>
           </div>    
           <ul>
             <li><span class="contrast">Titulo:</span> ${movie.title}</li>
             <li><span class="contrast">Data de lançamento:</span> ${
               movie.release_date
             }</li>
             <li><span class="contrast">Gênero:</span> ${genreName}</li>
             <li><span class="contrast">Duração:</span> ${
               movie.runtime
             } min</li>
             <li><span class="contrast">Avaliação: </span> ${
               movie.vote_average
             }</li>
           </ul>
           

           <div class="streams">
              
           </div>

           
           <div class"actions">
             <button class="favorite-movie">Favoritar <i class="fas fa-heart"></i></button> 
             <button class="watchlist-movie">Adicionar à lista <i class="fas fa-list"></i></button>
           </div>
        </div>
        
    `;
  document.getElementById("movie-detail").innerHTML = output;

  document.addEventListener("click", (e) => {
    if (e.target.className === "favorite-movie") {
      fetch(
        `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=4a5e130486cb63a2caff652d783f6a36&session_id=${localStorage.getItem("sessionId")}`, 
        {
          method: "POST",
          body: JSON.stringify({
            media_type: "movie",
            media_id: `${movie.id}`,
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
    } else if (e.target.className === "watchlist-movie") {
      fetch(
      `https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=4a5e130486cb63a2caff652d783f6a36&session_id=${localStorage.getItem("sessionId")} `,
        {
          method: "POST",
          body: JSON.stringify({
            media_type: "movie",
            media_id: `${movie.id}`,
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
    }
  });
};

// Display movie trailer
const getTrailer = (data) => {
  const movie = data.results;
  let output = `
     <a class="popup-youtube" href="https://www.youtube.com/watch?v=${movie[0].key}"><i class="far fa-play-circle"></i></a>   
  `;
  document.querySelector(".movie-trailer").innerHTML = output;
};

const streamImg = "https://image.tmdb.org/t/p/original/";
//Streams disponiveis
const getMovieStreams = (data) => {
  const movie = data.results;
  const streams = movie.BR;
  const streamDisponivel = streams.flatrate;
  console.log(streams);

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

//Movie Reviews
function getReviews(data) {
  const movie = data.results;
  let output = ``;
  if (movie.length === 0) {
    document.querySelector(".reviews-section").style.display = "none";
  } else {
    for (let i in movie) {
      if (movie[i].content) {
        output += `
        <div>
            <h3>Por: ${movie[i].author}</h3>
            <p>${movie[i].content}</p>
            <a href = "${movie[i].url}">Review oficial</a>
        </div>
        `;
        document.querySelector(".movie-reviews").innerHTML = output;
      }
    }
  }
}

//Similar movies
function getSimilarMovies(data) {
  const movies = data.results;
  let output = ``;
  if (movies.length === 0) {
    document.querySelector(".similar-section").style.display = "none";
  } else {
    for (let i in movies) {
      if (movies[i].poster_path) {
        output += `
          <div class ="swiper-slide">
             <img class="movie-poster" src ="${
               IMAGE_URL + movies[i].poster_path
             }" data-movie-id="${movies[i].id}"/> 
             <p>${movies[i].title}</p>
          </div>
        `;
        document.querySelector(".swiper-wrapper").innerHTML = output;
      }
    }
  }
}

//Filter genre
function selectGenres(data) {
  const genreOptions = data.genres;
  let output = `<option value = "" selected="true">Todos</option>`;
  for (let i in genreOptions) {
    output += `
         <option value="${genreOptions[i].id}">${genreOptions[i].name}</option>
    `;
    document.getElementById("select-genre").innerHTML = output;
  }
}

//Pagination of popular Movies
function pagination() {
  var value = 1;
  document.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.className === "next-page") {
      if (value < 1000) {
        value++;
        getPopularMovies(value);
        popularContainer.innerHTML = "";
      }
    } else if (e.target.className === "previous-page") {
      if (value !== 1) {
        value--;
        getPopularMovies(value);
        popularContainer.innerHTML = "";
      }
    } else if (e.target.className === "filter-next") {
      if (value < 1000) {
        value++;
        const genreValue = selectBtn.value;
        const popularValue = popularSelect.value;
        filterMovie(genreValue, popularValue, value);
        // popularContainer.innerHTML = ""
      }
    } else if (e.target.className === "filter-prev") {
      if (value !== 1) {
        value--;
        const genreValue = selectBtn.value;
        const popularValue = popularSelect.value;
        filterMovie(genreValue, popularValue, value);
        // popularContainer.innerHTML = ""
      }
    }
  });
}

document.querySelector(".serieLink").addEventListener("click", () => {
  window.location = "series.html";
});

document.querySelector(".filmeLink").addEventListener("click", () => {
  window.location = "index.html";
});

document.querySelector(".loginPage").addEventListener("click", () => {
  if(!localStorage.getItem('sessionId')){
    window.location = "login.html"
  }else{
    window.location = "listas.html"
  }
  // window.location = "login.html";
});
