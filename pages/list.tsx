import Header from "./components/header";
import Watchable from "./logic/watchable";
import WatchableEntry from "./components/watchable_entry";
import { ForageWatchableInterface } from "./logic/user_storage";
import { useState } from "react";

/**
 * The list page where users can add or remove movies from their list. Uses localStorage to achieve database functions.
 * 
 * @returns the my-list page.
 */
export default function List() {
    const table_header_styling: string = "text-left font-normal text-xl border p-5";

    const [sort, setSort] = useState("none");
    const [filter, setFilter] = useState("none");

    function TableHeader(props: { children: React.ReactNode }) {
        return (
            <th className={table_header_styling}>
                {props.children}
            </th>
        )
    }

    function TableSortButton(props: { children: React.ReactNode, onClick: any }) {
        return (
            <div onClick={props.onClick} className="cursor-pointer min-w-[5rem] text-center bg-sky-300 w-fit p-3 rounded-md text-white font-bold text-xl">
                {props.children}
            </div>
        )
    }


    function GetSortLambda(sort_string: string): (a: Watchable, b: Watchable) => number {
        if (sort_string === "name") {
            return (a: Watchable, b: Watchable): number => { return a.GetName() < b.GetName() ? -1 : 1; }
        } else if (sort_string === "rating") {
            return (a: Watchable, b: Watchable): number => { return a.GetName() < b.GetName() ? -1 : 1; }
        } else {
            return (a: Watchable, b: Watchable): number => { return -1 }
        }
    }

    function GetFilterLambda(lambda_string: string): (left: Watchable) => boolean {
        if (lambda_string === "Movie") {
            return (a: Watchable): boolean => { return a.GetType() === 'Movie' };
        } else if (lambda_string === 'TV Show') {
            return (a: Watchable): boolean => { return a.GetType() === 'TV Show' };
        } else {
            return (a: Watchable): boolean => { return true; };
        }
    }

    return (
        <div>
            <Header />
            <div className='m-auto w-4/6'>
                <div className='text-center'><h2 className='text-5xl mt-3 mb-3'>Your list</h2></div>
                <div className='mt-5 mb-5'>
                    <div className='flex'>
                        <span className='m-3 text-xl'>Filter:</span>
                        <div className='flex gap-3 mt-3 mb-3'>
                            <TableSortButton onClick={() => { setFilter("Movie") }}>Movies</TableSortButton>
                            <TableSortButton onClick={() => { setFilter("TV Show") }}>TV Shows</TableSortButton>
                            <TableSortButton onClick={() => { setFilter("none") }}>All</TableSortButton>
                        </div>
                        <span className='m-3 text-xl'>Sort by:</span>
                        <div className='flex gap-3 mt-3 mb-3'>
                            <TableSortButton onClick={() => { setSort("name") }}>Name</TableSortButton>
                            <TableSortButton onClick={() => { setSort("rating") }}>Rating</TableSortButton>
                            <TableSortButton onClick={() => { setSort("none") }}>None</TableSortButton>
                        </div>
                    </div>

                </div>
                <div className='mb-5'>
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <TableHeader>Number</TableHeader>
                                <TableHeader>Name</TableHeader>
                                <TableHeader>Rating</TableHeader>
                                <TableHeader>Type</TableHeader>
                            </tr>
                            {ForageWatchableInterface.GetUserWatchablesSorted(GetSortLambda(sort)).filter(GetFilterLambda(filter)).map(function (m: Watchable, index: number) {
                                return (<WatchableEntry order={index + 1} name={m.GetName()} type={m.GetType()} />)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}