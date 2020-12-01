// API
const API_KEY = '4a5e130486cb63a2caff652d783f6a36'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/'
const region = 'pt-BR'
//const language = '&language=pt-BR'
const language = ''

const url = `https://api.themoviedb.org/3/search/movie?api_key=4a5e130486cb63a2caff652d783f6a36${language}`

const dynamicUrl = path => {
    const url = `https://api.themoviedb.org/3${path}?api_key=4a5e130486cb63a2caff652d783f6a36`
    return url
}

const requestMovies = (url, onComplete, onError) => {
    fetch(url)
      .then((res) => res.json())
      .then(onComplete)
      .catch((onError))
}

//session id
// const getToken = () => {
//     const path = '/authentication/token/new'
//     const url =  dynamicUrl(path)

//     requestMovies(url, getGuest, handleError)
// }

// //account details
// const getAccount = (session_id) => {
//     const path = '/account'
//     const url =  `${dynamicUrl(path)}&session_id=${session_id}`

//     requestMovies(url, getAccountd, handleError)
// }

const searchMovie = value => {
    const path = '/search/multi'
    const url =  `${dynamicUrl(path)}&query=${value}&language=pt-BR`

    requestMovies(url, renderFilteredMovie, handleError)
}

//renderMovies
const getUpcomingMovies = () => {
    const path = '/movie/upcoming'
    const url =  `${dynamicUrl(path)}&region=US`
    const render = renderUpcoming.bind({title: 'Upcoming Movies'})
    requestMovies(url, render, handleError)
}

//render trending content
const getTrending = () => {
    const path = '/trending/all/day'
    const url =  `${dynamicUrl(path)}&region=BR&language=pt-BR`
    const render = renderTrending.bind({title: 'Trending'})
    requestMovies(url, render, handleError)
}

const getPopularMovies = (value) => {
    const path = '/movie/popular'
    const url =  `${dynamicUrl(path)}&page=${value}&region=BR&language=pt-BR`

    requestMovies(url, renderPopular, handleError)
}

const getPopularSeries = (value) => {
    const path = '/tv/popular'
    const url =  `${dynamicUrl(path)}&page=${value}&region=BR&language=pt-BR`

    requestMovies(url, renderPopularSeries, handleError)
}


//get movie detail
const getMovieDetails = () => {
    let movieId = sessionStorage.getItem("movieId");
    const path = `/movie/${movieId}`
    const url = `${dynamicUrl(path)}&language=pt-BR`;

    requestMovies(url, getDetails, handleError)
}

//get tv show details
const getTvShowDetails = () => {
    let seriesId = sessionStorage.getItem("seriesId");
    const path = `/tv/${seriesId}`
    const url = `${dynamicUrl(path)}&language=pt-BR`;

    requestMovies(url, getSeriesDetails, handleError)
}

// Get movie trailer
const getMovieTrailer = () => {
    let movieId = sessionStorage.getItem("movieId");
    const path = `/movie/${movieId}/videos`;
    const url = `${dynamicUrl(path)}&region=BR&language=pt-BR`;

    requestMovies(url, getTrailer, handleError)
}

//get movie Reviews
const getMovieReviews = () => {
    let movieId = sessionStorage.getItem("movieId");
    const path = `/movie/${movieId}/reviews`;
    const url = `${dynamicUrl(path)}&language=en-US`;

    requestMovies(url, getReviews, handleError)
}

//get tv show Reviews
const getTvShowReviews = () => {
    let seriesId = sessionStorage.getItem("seriesId");
    const path = `/tv/${seriesId}/reviews`;
    const url = `${dynamicUrl(path)}`;

    requestMovies(url, getSeriesReviews, handleError)
}

//trailer tv show
const getTvShowTrailer = () => {
    let seriesId = sessionStorage.getItem("seriesId");
    const path = `/tv/${seriesId}/videos`;
    const url = `${dynamicUrl(path)}`;

    requestMovies(url, getSerieTrailer, handleError)
}

//get recommendations
const getMovieRecommendations = () => {
    let movieId = sessionStorage.getItem("movieId");
    const path = `/movie/${movieId}/recommendations`
    const url = `${dynamicUrl(path)}&language=pt-BR`;

    const render = getSimilarMovies.bind({title: 'Similar Movies'})
    requestMovies(url, render, handleError)
}

//get recommendations
const getSeriesRecommendations = () => {
    let seriesId = sessionStorage.getItem("seriesId");
    const path = `/tv/${seriesId}/recommendations`
    const url = `${dynamicUrl(path)}&language=pt-BR`;

    const render = getSimilarSeries.bind({title: 'Similar Series'})
    requestMovies(url, render, handleError)
}


//get genres
const getGenres = () => {
    const path = '/genre/movie/list'
    const url = `${dynamicUrl(path)}&language=pt-BR`

    requestMovies(url, selectGenres, handleError)
}

//get serie genres
const getGenresTv = () => {
    const path = '/genre/tv/list'
    const url = `${dynamicUrl(path)}&language=pt-BR`

    requestMovies(url, selectGenresTv, handleError)
}

const filterMovie = (genre, options, value) => {
    const path = '/discover/movie'
    const url = `  ${dynamicUrl(path)}&sort_by=${options}&with_genres=${genre}&vote_count.gte=100&page=${value}&language=pt-BR`

    requestMovies(url, renderFilteredMovie, handleError)
}

const filterTv = (genre, options, value) => {
    const path = '/discover/tv'
    const url = `  ${dynamicUrl(path)}&sort_by=${options}&with_genres=${genre}&vote_count.gte=100&page=${value}&language=pt-BR`

    // console.log(url)
    requestMovies(url, renderFilteredTv, handleError)
}

//get movie detail
const getMovieImages = () => {
    let movieId = sessionStorage.getItem("movieId");
    const path = `/movie/${movieId}/images`
    const url = dynamicUrl(path);

    requestMovies(url, getImages, handleError)
}

//get tv show images
const getTvShowImages = () => {
    let seriesId = sessionStorage.getItem("seriesId");
    const path = `/tv/${seriesId}/images`
    const url = dynamicUrl(path);

    requestMovies(url, getSeriesImages, handleError)
}

//get streams
const getStreams = () => {
    let movieId = sessionStorage.getItem("movieId");
    const path = `/movie/${movieId}/watch/providers`
    const url =  dynamicUrl(path);

    requestMovies(url, getMovieStreams, handleError)
}

const getTvStreams = () => {
    let seriesId = sessionStorage.getItem("seriesId");
    const path = `/tv/${seriesId}/watch/providers`
    const url =  dynamicUrl(path);

    requestMovies(url, renderTvStreams, handleError)
}

//Airing tvshow
const getAiringSerie = () => {
    const path = '/tv/on_the_air'
    const url =  `${dynamicUrl(path)}&region=BR&language=pt-BR`
    // console.log(url)

    requestMovies(url, renderAiring, handleError)
}