import React from "react";
import AddToFavorites from "./AddToFavorites";
const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
                    <div>
                        <p>{movie.Year}</p>
                        <p>{movie.Plot}</p>
                    </div>

                    <div>
                        <img src={movie.Poster !== 'N/A' ? movie.Poster: 'https://via.placeholder.com/400'} alt={movie.title} />
                    </div>

                    <div>
                       <span>{movie.Type}</span>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Genre}</p>
                        <h3>{movie.isFavorite}</h3>
                        <div className='row'>

			</div>
                    </div>
                    </div>
    );
}

export default MovieCard;
