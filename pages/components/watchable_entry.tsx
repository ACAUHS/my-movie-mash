/**
 * A movie entry for use, should be placed inside a <table> element with columns
 * 
 * @param props movieName - the name of the movie
 * @returns 
 */
export default function WatchableEntry(props: { name: string, type: string, order: number }) {
    const table_entry_styling: string = "p-5 border";

    function TableData(props: { children: any }) {
        return (
            <td className={table_entry_styling}>
                {props.children}
            </td>
        )
    }

    return (
        <tr className='border'>
            <td className="text-center pt-3 pb-3 font-medium text-5xl">{props.order}</td>
            <TableData>{props.name}</TableData>
            <TableData>Trash</TableData>
            <TableData>{props.type}</TableData>
        </tr>
    )
}