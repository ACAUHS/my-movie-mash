import { HiBars3 } from "react-icons/hi2";
import { FiTv, FiFilm } from "react-icons/fi";
/**
 * 
 * @returns Makes the navigation bar to the website.
 */

//make buttons hover text and bigger!
// Add funtionality to the header

const buttonStyle = 'rounded-full bg-sky-600 p-6 shrink-0 min-h-min max-h-8 hover:cursor-pointer hover:ring-2 ring-sky-800 hover:transition-all hover:duration-150 active:bg-sky-700'

export default function NavBar () {

    return (
        <div className="bg-sky-50 flex justify-between p-6">
            <header className="text-xl font-bold text-sky-600 mt-2">My Movie Mash</header> 
            <div className="flex gap-6 justify-between">
                <a href='/list'>
                    <NavBarIcon icon={<HiBars3 size="25"/>} />
                </a>
                <a href='/random-show'>
                    <NavBarIcon icon={<FiTv size="25"/>} />
                </a>
                <a href='/random-movie'>
                    <NavBarIcon icon={<FiFilm size="25"/>} />
                </a>
            </div>
            <input type="search" id="movie-search" className="bg-sky-100 border-2 border-sky-600 rounded-md max-h-10 pt-6 mt-1"/>
        </div>
    )
}

const NavBarIcon = ({ icon }) => (
    <div className={buttonStyle}>
        {icon}
    </div>
)