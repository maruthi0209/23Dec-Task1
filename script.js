// API 1
/**
 * https://dummyjson.com/quotes
 */
const URL_1 = "https://dummyjson.com/quotes";
fetch(URL_1)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            for (let i = 0; i < data['quotes'].length; i++) {
                console.log(data['quotes'][i]['quote']);
            }
        });


// API 2
/**
 * https://dummyjson.com/todos
 */
const URL_2 = "https://dummyjson.com/todos";
fetch(URL_2)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then( data => {
            for(let i = 0; i < data['todos'].length; i++) {
                console.log(data['todos'][i]['todo']);
            }
        });


// API 3
/**
 * https://jsonplaceholder.typicode.com/photos
 */
const URL_3 = "https://jsonplaceholder.typicode.com/photos";
fetch(URL_3)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            for (let i = 0; i <data.length; i++) {
                console.log(data[i]['title']);
            }   
        });


// API 4
/**
 * https://randomuser.me/api/
 */
const URL_4 = "https://randomuser.me/api/";
fetch(URL_4)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            console.log(data['results'][0]['name']);
        });


// API 5
/**
 * https://pokeapi.co/api/v2/pokemon/ditto
 */
const URL_5 = "https://pokeapi.co/api/v2/pokemon/ditto";
fetch(URL_5)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => {
            console.log(data);
        });