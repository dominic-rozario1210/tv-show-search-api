const apiUrl = "https://api.tvmaze.com/search/shows?q=";

const input = document.getElementById("movieInput");
const button = document.getElementById("movieBtn");
const image = document.querySelector(".image img");


// Fetch TV shows from the TVMaze API
async function fetchShows() {

    const searchValue = input.value.trim();

    if (!searchValue) {
        return;
    }

    try {

        const response = await fetch(
            `${apiUrl}${encodeURIComponent(searchValue)}`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch TV shows");
        }

        const data = await response.json();

        console.log(data);

        displayShow(data);

    } catch (error) {

        console.error("Error:", error);

    }
}


// Display the TV show's image
function displayShow(data) {

    if (data.length === 0) {
        console.log("No TV show found");
        return;
    }

    const show = data[0].show;

    if (show.image) {
        image.src = show.image.original || show.image.medium;
        image.alt = show.name;
    } else {
        console.log("No image available for this show");
    }
}


// Search button click
button.addEventListener("click", fetchShows);