import { HiBars3 } from "react-icons/hi2";
import { FiTv, FiFilm } from "react-icons/fi";

const buttonStyle = 'group rounded-full text-white bg-sky-600 p-6 shrink-0 min-h-min max-h-8 hover:cursor-pointer hover:ring-2 ring-sky-800 hover:transition-all hover:ease-in-out hover:duration-150 active:bg-sky-700'

/**
 * @todo 
 * 
 * 
 * viewport for steven is messed up (margin on top is messed look at discord for more details)
 *
 * search bar is messed up when adding text to it
 * add placeholder text to search bar
 * add button indicating search beside search bar
 * 
 * @returns Makes the navigation bar to the website.
 */
export default function NavBar () {

    return (
        <div className="bg-sky-50 flex justify-between p-6">
            <a href='../'><header className="text-xl font-bold text-sky-600 mt-2">My Movie Mash</header></a>
            
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
            <input type="search" id="movie-search" placeholder="Search" className="hidden md:flex bg-sky-100 border-2 border-sky-600 rounded-md max-h-10 mt-1 shrink outline-none pl-3"/>
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