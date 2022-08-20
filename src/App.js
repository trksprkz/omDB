import { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
import AddToFavorites from './AddToFavorites';


const API_URL = "https://www.omdbapi.com?apikey=5ace3a4" //api

//default movie
const movie = {

}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([])
    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
        //default movie value, adjustable, currently set to On Deck for a little pun
        searchMovies('on deck')
    }, []);
    return (
        <div className="app">
                {/*title */}
            <h1><a href="./">-Ondeck Movies-</a></h1>

                {/*search */}
            <div className="search">
                <input
                placeholder="Search For Something..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}

               //allowing search with Enter key:
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        searchMovies(searchTerm)}}}
                />
                <img src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
               movies?.length > 0
               ? (
                <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie}
                    favoriteComponent={AddToFavorites}
                    />
                ))}
            </div>
               ) : (
               <div className="empty">
                   <h2>No movie found</h2>
                  </div>
               )
            }
        </div>
    );
}
export default App;

//Variable for api url with key
//variable search movies, async arrow func
    //searches for title
//variable response that awaits the fetch
//useEffect hook, empty brackets [] to do once on page load
