# TV Show Search API

A responsive TV show search application built using **HTML, CSS, and JavaScript**. The project uses the **TVMaze API** to search for TV shows and dynamically display the corresponding show image.

## 🚀 Features

* Search for TV shows by name
* Fetch TV show data from the TVMaze API
* Dynamically display the TV show image
* Default poster displayed before searching
* Handles empty search input
* Handles API request errors
* Responsive design for different screen sizes
* Uses modern JavaScript features such as `async/await`
* No frameworks or external JavaScript libraries used

## 🔗 API Used

**TVMaze API**

API endpoint:

`https://api.tvmaze.com/search/shows`

The search query is dynamically added based on the user's input.

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Fetch API
* Async/Await
* TVMaze API

## 📂 Project Structure

```text
tv-show-search-api/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

1. Enter the name of a TV show in the search box.
2. Click the **Search** button.
3. JavaScript sends a request to the TVMaze API.
4. The API returns matching TV show data.
5. The first matching show's image is extracted from the response.
6. The image is displayed dynamically on the webpage.

## 🧩 Error Handling

The application uses `try...catch` to handle API request errors and checks the API response before processing the returned data.

## 📱 Responsive Design

The application is designed to work across different screen sizes, including desktop, tablet, and mobile devices.
