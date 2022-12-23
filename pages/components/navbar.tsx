

/**
 * 
 * @returns Makes the navigation bar to the website.
 */

//make buttons hover text and bigger!

export default function NavBar () {
    const buttonStyle = 'rounded-full bg-sky-600 p-6 shrink-0 min-h-min max-h-8 hover:cursor-pointer hover:ring-2 ring-sky-800 hover:transition-all hover:duration-150 active:bg-sky-700'

    return (
        <div className="bg-sky-50 flex justify-between p-6">
            <header className="text-xl font-bold text-sky-600 mt-2">My Movie Mash</header>
            <ol className="flex gap-6 justify-between">
                <a href='/list'>
                    <li className={buttonStyle} />
                </a>
                <a href='/random-show'>
                    <li className={buttonStyle} />
                </a>
                <a href='/random-movie'>
                    <li className={buttonStyle} />
                </a>
            </ol>
            <input type="search" id="movie-search" className="bg-sky-100 border-2 border-sky-600 rounded-md max-h-10 pt-6 mt-1"/>
        </div>
    )
}