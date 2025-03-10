import movies from "../data.js"

export const getAllMovies = (req, res) => {
    res.status(200).json(movies);
}

export const getMovieById = (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find(m=>m.id===movieId);
    if (!movie){
        return res.status(404).json({message:'Movie not found'});
    }
    res.status(200).json(movie);
}

export const addMovie = (req, res) => {
    const {title, director, releaseYear, wonOscar} = req.body;
    const newMovie = {
        id: movies.count+1,
        title,
        director,
        releaseYear,
        wonOscar
    };
    movies.push(newMovie)
    res.status(201).json(newMovie)
}

export const updateMovie = (req, res) =>{
    const movieId = parseInt(req.params.id);
    const {title, director, releaseYear, wonOscar}=req.body;
    const MovieIndex = movies.findIndex(m => m.id===movieId);
    if (MovieIndex===-1){
        return res.status(404).json({message: 'Movie not found'});
    }
    const updatedMovie = {
    id: movieId,
    title: title || movies[MovieIndex].title,
    director: director || movies[MovieIndex].director,
    releaseYear: releaseYear || movies[MovieIndex].releaseYear,
    wonOscar: wonOscar || movies[MovieIndex].wonOscar
    };
    movies[MovieIndex]=updateMovie;
    res.status(200).json(updateMovie);
};

export const deleteMovie = (req, res) =>{
    const movieId = parseInt(req.params.id);
    const MovieIndex = movies.findIndex(m => m.id ===movieId);
    if (MovieIndex ===-1){
        return res.status(404).json({message: 'Movie not found'});
    }
    movies.splice(MovieIndex, 1);
    res.status(204).end();
};