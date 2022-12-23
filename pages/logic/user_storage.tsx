import Movie from "./movie";
import Watchable from "./watchable";
import TVShow from "./tvshow";

/**
 * Get the list of the movies/tv shows that the user has.
 * 
 * -- only returns a random list of movies for now.
 * 
 * @returns 
 */
export function GetUserWatchables(): Array<Watchable> {
    return [
        new Movie("Joshua and Adele"),
        new Movie("Steven and Christine"),
        new Movie("Snoopy goes to Hell"),
        new Movie("Family Guy"),
        new Movie("Alvin and the Chipmunks"),
        new TVShow("Family Gois")
    ]
}