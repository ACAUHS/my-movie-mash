import { HiBars3 } from "react-icons/hi2";
import { FiTv, FiFilm } from "react-icons/fi";
import { GoSearch } from "react-icons/go";

const buttonStyle = 'group rounded-full text-white bg-sky-600 p-6 shrink-0 min-h-min max-h-8 hover:cursor-pointer hover:ring-2 ring-sky-800 hover:transition-all hover:ease-in-out hover:duration-150 active:bg-sky-700'

/**
 * @todo 
 * Center buttons (even though they look centered)
 * add bottom border to nav?
 * change item of list?
 * 
 * @returns Makes the navigation bar to the website.
 */
export default function NavBar () {

    return (
        <div className="bg-sky-50 flex justify-between p-6">
            <a href='../'><header className="text-xl font-bold text-sky-600 mt-3">My Movie Mash</header></a>
            
            {/** navbar for medium screens and above */}
            <div className="hidden md:flex gap-6 justify-between">
                <a href='/list'>
                    <NavBarIcon icon={<HiBars3 size="25" />} text ='Your list' />
                </a>
                <a href='/random-show'>
                    <NavBarIcon icon={<FiTv size="25" />} text = 'Random show'/>
                </a>
                <a href='/random-movie'>
                    <NavBarIcon icon={<FiFilm size="25" />} text = 'Random movie'/>
                </a>
            </div>

            {/** mobile icon thing*/}
            <div className="md:hidden flex items-center">
                <button className="text-sky-600">
                    <HiBars3 size="30" />
                </button>
            </div>

            {/** mobile menu */}
            <div className="md:hidden">
                <a href='/list' className="block py-2 text-sm px-2 text-sky-600 hover:bg-sky-500 hover:text-white">Your list</a>
                <a href='/random-show' className="block py-2 text-sm px-2 text-sky-600 hover:bg-sky-500 hover:text-white">Random show</a>
                <a href='/random-movie' className="block py-2 text-sm px-2 text-sky-600 hover:bg-sky-500 hover:text-white">Random movie</a>
            </div>

            {/** search bar for medium screens+ */}
            <div className="hidden md:inline-block bg-sky-100 border-2 border-sky-600 rounded-md max-h-8 shrink  self-center">
                <input type="search" id="movie-search" placeholder="Search" className="bg-sky-100 outline-none rounded-md pl-2 text-slate-500"/>
                <button id='search-button' type="submit" className="text-l pr-1.5 pt-1.5 pb-1.5 pl-1 mt-0 border-sky-600 "><GoSearch /></button>
            </div>
        </div>
    )
}


/**
 * 
 * @param iconName 
 * @returns Imports an icon from React Icons
 */
const NavBarIcon = ({ icon, text = '' }) => (
    <div className='navbar-icon group'>
        {icon}

        <span className = "navbar-name group-hover:scale-100">
            {text}
        </span>
    </div>
)