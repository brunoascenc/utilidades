const fetch = require('node-fetch');


const getPeople = fetch => {
    return fetch('https://swapi.py4e.com/api/people/')
        .then(response => response.json())
        .then(data => {
            return{
                count: data.count,
                results: data.results
            }
        })
}