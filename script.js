// API 1
/**
 * https://dummyjson.com/quotes
 */
const URL = "https://dummyjson.com/quotes";

fetch(URL)
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