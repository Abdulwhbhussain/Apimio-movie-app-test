// Event Listener

window.addEventListener('load', () => { 
    const search = document.getElementById('search-button');

    search.addEventListener('click', (e) => {
        const searchText = document.getElementById('search-bar').value;
        getMovies(searchText);
    });
});

function getMovies(searchText) {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=278fc6ec`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let movies = data.Search;
            let output = '';
            for (let movie of movies) {
                output += `
                    <div class="col-md-3">
                        <div class="well text-center">
                            <img src="${movie.Poster}">
                            <h5>${movie.Title}</h5>
                            <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                        </div>
                    </div>
                `;
            }
            document.getElementById('movies').innerHTML = output;
        })
        .catch((err) => {
            console.log(err);
        });
}