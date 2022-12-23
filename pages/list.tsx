import Header from "./components/header";
import Watchable from "./logic/watchable";
import WatchableEntry from "./components/watchable_entry";
import { ForageWatchableInterface } from "./logic/user_storage";

/**
 * The list page where users can add or remove movies from their list. Uses localStorage to achieve database functions.
 * 
 * @returns the my-list page.
 */
export default function List() {
    const table_header_styling: string = "text-left font-normal text-xl border p-5";

    function TableHeader(props: { children: React.ReactNode }) {
        return (
            <th className={table_header_styling}>
                {props.children}
            </th>
        )
    }

    function TableSortButton(props: { children: React.ReactNode }) {
        return (
            <div className="bg-sky-300 w-fit p-3 rounded-md text-white font-bold text-xl">
                {props.children}
            </div>
        )
    }

    return (
        <div>
            <Header />
            <div className='m-auto w-4/6'>
                <div className='text-center'><h2 className='text-5xl mt-3 mb-3'>Your list</h2></div>
                <div className='mt-5 mb-5'>
                    <div>
                        <span className='text-xl'>Filter:</span>
                        <div className='flex gap-3 mt-3 mb-3'>
                            <TableSortButton>Movies</TableSortButton>
                            <TableSortButton>TV Shows</TableSortButton>
                        </div>

                    </div>
                    <div>
                        <span className='text-xl'>Sort by:</span>
                        <div className='flex gap-3 mt-3 mb-3'>
                            <TableSortButton>Name</TableSortButton>
                            <TableSortButton>Type</TableSortButton>
                        </div>
                    </div>

                </div>
                <div className='mb-5'>
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <TableHeader>Number</TableHeader>
                                <TableHeader>Name</TableHeader>
                                <TableHeader>Description</TableHeader>
                                <TableHeader>Type</TableHeader>
                            </tr>
                            {ForageWatchableInterface.GetUserWatchables().map(function (m: Watchable, index: number) {
                                return (<WatchableEntry order={index + 1} name={m.GetName()} type={m.GetType()} />)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}