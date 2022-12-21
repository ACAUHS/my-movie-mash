import Header from "./components/header";
import { GetUserMovies } from "./logic/user_storage";
import Movie from "./logic/movie";
import MovieEntry from "./components/movie_entry";

/**
 * The list page where users can add or remove movies from their list. Uses localStorage to achieve database functions.
 * 
 * @returns the my-list page.
 */
export default function List() {
    const table_header_styling: string = "text-left font-normal text-xl border p-5";

    return (
        <div>
            <Header />
            <div className='m-auto w-4/6'>
                <h2 className='text-3xl mt-3 mb-3'>Your list</h2>
                <div>
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <th className={table_header_styling}>Rank</th>
                                <th className={table_header_styling}>Name</th>
                                <th className={table_header_styling}>Description</th>
                            </tr>
                            {GetUserMovies().map(function (m: Movie) {
                                return (<MovieEntry movieName={m.GetName()} />)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}