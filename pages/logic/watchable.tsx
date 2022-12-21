/**
 * Something that is watchable
 */
export default abstract class Watchable {
    private name: string;

    /**
     * 
     * @param name the name of the movie
     */
    constructor(name: string) {
        this.name = name;
    }

    /**
     * 
     * @returns Get the name of the watchable
     */
    public GetName(): string {
        return this.name;
    }
}