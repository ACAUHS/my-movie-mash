import Movie from "./movie";
import Watchable from "./watchable";
import TVShow from "./tvshow";
import localForage from 'localforage'

/**
 * An interface that allows interactions with the localForage,
 * Add watchables or remove them, or get a sorted/unsorted list.
 * 
 */
export class ForageWatchableInterface {
    private constructor() {

    }

    /**
     * Remove a watchable to localForage
     * 
     * @todo implement
     * 
     * @param watch 
     */
    public static RemoveWatchable(watch: Watchable): void {

    }

    /**
     * Add a watchable to localForage
     * 
     * @todo implement
     * @param watch 
     */
    public static AddWatchable(watch: Watchable): void {

    }

    /**
     * Get the list of the movies/tv shows that the user has.
     * 
     * -- only returns a random list of movies for now.
     * 
     * @todo implement
     * 
     * @returns 
     */
    public static GetUserWatchables(): Array<Watchable> {
        return [
            new Movie("Joshua and Adele"),
            new Movie("Steven and Christine"),
            new Movie("Snoopy goes to Hell"),
            new Movie("Family Guy"),
            new Movie("Alvin and the Chipmunks"),
            new TVShow("Family Gois")
        ]
    }

    /**
     * Returns a sorted array of user watchables according to sort_lambda
     * @todo implement
     * @param sort_lambda the sort lambda that will be operated. If a < b == true, then it is the case that a will come before b.
     * @returns 
     */
    public static GetUserWatchablesSorted(sort_lambda: (a: Watchable, b: Watchable) => boolean): Array<Watchable> {
        return []
    }
}