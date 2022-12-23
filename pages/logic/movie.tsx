import Watchable from "./watchable";

/**
 *  A movie to be used... Contains a name, rating, etc.
 */
export default class Movie extends Watchable {
    GetType(): string {
        return "Movie";
    }
}