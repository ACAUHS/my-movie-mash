import Movie from "./movie";

/**
 * Get the list of the movies that the user has.
 * 
 * -- only returns a random list of movies for now.
 * 
 * @returns 
 */
export function GetUserMovies(): Array<Movie> {
    return [
        new Movie("Joshua and Adele"),
        new Movie("Steven and Christine"),
        new Movie("Snoopy goes to Hell"),
        new Movie("Family Guy"),
        new Movie("Alvin and the Chipmunks")
    ];
}

