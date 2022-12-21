/**
 * A movie entry for use, should be placed inside a <table> element with columns
 * 
 * @param props movieName - the name of the movie
 * @returns 
 */
export default function MovieEntry(props: { movieName: string }) {
    return (
        <tr className='border'>
            <td className="text-center pt-3 pb-3 font-medium text-5xl">0</td>
            <td className='pl-5 border'>{props.movieName}</td>
            <td className='pl-5'>This movie is garbage!</td>
        </tr>
    )
}