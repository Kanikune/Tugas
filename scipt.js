async function getJSON() {
    const response = await fetch("movies.json");
    const movieJSON = await response.json()
    return movieJSON
}

