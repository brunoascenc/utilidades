const getFavoriteTv = () => {
  fetch(
    `https://api.themoviedb.org/3/account/{account_id}/favorite/tv?api_key=4a5e130486cb63a2caff652d783f6a36&language=en-US&session_id=${localStorage.getItem(
      "sessionId"
    )}&sort_by=created_at.asc&page=1`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res.results);
      const series = res.results;
      let output = ``;
      if(series.length === 0){
        output = `<h3>Nenhuma série encontrada</h3>`
        document.querySelector(".fav-series").innerHTML = output;
      }else{
        for (let i in series) {
          if (series[i].poster_path) {
            output += `
                  <div class ="swiper-slide">
                     <img class="movie-poster" src ="${
                       IMAGE_URL + series[i].poster_path
                     }" data-movie-id="${series[i].id}"/> 
                     <p>${series[i].name}</p>
                     <button class="removeTv">Remover</button>
                  </div>
                `;
            document.querySelector(".fav-series").innerHTML = output;
          }
        }

      }
      

      // for (let i in series) {
      //   if (series[i].poster_path) {
      //     output += `
      //           <div class ="swiper-slide">
      //              <img class="movie-poster" src ="${
      //                IMAGE_URL + series[i].poster_path
      //              }" data-movie-id="${series[i].id}"/> 
      //              <p>${series[i].name}</p>
      //              <button class="removeTv">Remover</button>
      //           </div>
      //         `;
      //     document.querySelector(".fav-series").innerHTML = output;
      //   }
      // }
      //   localStorage.setItem("sessionId", res.session_id);
      // getAccount(localStorage.getItem('sessionId'))
    });
};
getFavoriteTv();

const getFavoriteMovies = () => {
  fetch(
    `https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=4a5e130486cb63a2caff652d783f6a36&session_id=${localStorage.getItem(
      "sessionId"
    )}&language=en-US&sort_by=created_at.asc&page=1`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res.results);
      const series = res.results;
      let output = ``;
      if(series.length === 0){
        output = `<h3>Nenhum filme encontrado</h3>`
        document.querySelector(".fav-movies").innerHTML = output;
      } else{
        for (let i in series) {
          if (series[i].poster_path) {
            output += `
                  <div class ="swiper-slide">
                     <img class="movie-poster" src ="${
                       IMAGE_URL + series[i].poster_path
                     }" data-movie-id="${series[i].id}"/> 
                     <p>${series[i].title}</p>
                     <button class="removeTv">Remover</button>
                  </div>
                `;
            document.querySelector(".fav-movies").innerHTML = output;
          }
        }

      }

      // for (let i in series) {
      //   if (series[i].poster_path) {
      //     output += `
      //           <div class ="swiper-slide">
      //              <img class="movie-poster" src ="${
      //                IMAGE_URL + series[i].poster_path
      //              }" data-movie-id="${series[i].id}"/> 
      //              <p>${series[i].title}</p>
      //              <button class="removeMovie">Remover</button>
      //           </div>
      //         `;
      //     document.querySelector(".fav-movies").innerHTML = output;
      //   }
      // }
      //   localStorage.setItem("sessionId", res.session_id);
      // getAccount(localStorage.getItem('sessionId'))
    });
};
getFavoriteMovies();

const getWatchList = () => {
  fetch(
    `https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=4a5e130486cb63a2caff652d783f6a36&session_id=${localStorage.getItem(
      "sessionId"
    )}&language=en-US&sort_by=created_at.asc&page=1`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res.results);
      const series = res.results;
      let output = ``;
      if(series.length === 0){
        output = `<h3>Nenhum filme encontrado</h3>`
        document.querySelector(".watchlist-wrapper").innerHTML = output;
      } else{
        for (let i in series) {
          if (series[i].poster_path) {
            output += `
                  <div class ="swiper-slide">
                     <img class="movie-poster" src ="${
                       IMAGE_URL + series[i].poster_path
                     }" data-movie-id="${series[i].id}"/> 
                     <p>${series[i].title}</p>
                     <button class="removeTv">Remover</button>
                  </div>
                `;
            document.querySelector(".watchlist-wrapper").innerHTML = output;
          }
        }

      }

      // for (let i in series) {
      //   if (series[i].poster_path) {
      //     output += `
      //           <div class ="swiper-slide">
      //              <img class="movie-poster" src ="${
      //                IMAGE_URL + series[i].poster_path
      //              }" data-movie-id="${series[i].id}"/> 
      //              <p>${series[i].title}</p>
      //              <button class="removeWatchMovie">Remover</button>
      //           </div>
      //         `;
      //     document.querySelector(".watchlist-wrapper").innerHTML = output;
      //   }
      // }
    });
};

getWatchList();

const getWatchListSerie = () => {
  fetch(
    `https://api.themoviedb.org/3/account/{account_id}/watchlist/tv?api_key=4a5e130486cb63a2caff652d783f6a36&session_id=${localStorage.getItem(
      "sessionId"
    )}&language=en-US&sort_by=created_at.asc&page=1`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res.results);
      const series = res.results;
      let output = ``;

      if(series.length === 0){
        output = `<h3>Nenhuma série encontrada</h3>`
        document.querySelector(".watchlist-serie-wrapper").innerHTML = output;
      }else{
        for (let i in series) {
          if (series[i].poster_path) {
            output += `
                  <div class ="swiper-slide">
                     <img class="movie-poster" src ="${
                       IMAGE_URL + series[i].poster_path
                     }" data-movie-id="${series[i].id}"/> 
                     <p>${series[i].name}</p>
                     <button class="removeTv">Remover</button>
                  </div>
                `;
            document.querySelector(".watchlist-serie-wrapper").innerHTML = output;
          }
        }

      }

      // for (let i in series) {
      //   if (series[i].poster_path) {
      //     output += `
      //             <div class ="swiper-slide">
      //                <img class="movie-poster" src ="${
      //                  IMAGE_URL + series[i].poster_path
      //                }" data-movie-id="${series[i].id}"/> 
      //                <p>${series[i].name}</p>
      //                <button class="removeWatchTv">Remover</button>
      //             </div>
      //           `;
      //     document.querySelector(".watchlist-serie-wrapper").innerHTML = output;
      //   }
      // }
    });
};

getWatchListSerie();


// document.addEventListener('click', (e) => {
//   if(e.target.classList === "removeTv"){
//     fetch(
//       `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=4a5e130486cb63a2caff652d783f6a36&session_id=${localStorage.getItem(
//         "sessionId"
//       )}`,
//       {
//         method: "POST",
//         body: JSON.stringify({
//           media_type: "tv",
//           media_id: `${series.id}`,
//           favorite: false,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     )
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//       });
//   }
// })