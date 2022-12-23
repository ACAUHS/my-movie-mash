import { HiBars3 } from "react-icons/hi2";
import { FiTv, FiFilm } from "react-icons/fi";

const buttonStyle = 'group rounded-full text-white bg-sky-600 p-6 shrink-0 min-h-min max-h-8 hover:cursor-pointer hover:ring-2 ring-sky-800 hover:transition-all hover:ease-in-out hover:duration-150 active:bg-sky-700'

/**
 * @todo 
 * make buttons hover text and bigger!
 * 
 * viewport for steven is messed up (margin on top is messed look at discord for more details)
 * 
 * center the icons to the button and make it white
 * 
 * add transitionout style
 * 
 * search bar is messed up when adding text to it
 * 
 * @returns Makes the navigation bar to the website.
 */
export default function NavBar () {

    return (
        <div className="bg-sky-50 flex justify-between p-6">
            <a href='../'><header className="text-xl font-bold text-sky-600 mt-2">My Movie Mash</header></a>
            <div className="flex gap-6 justify-between">
                <a href='/list'>
                    <NavBarIcon icon={<HiBars3 size="25" />} />
                </a>
                <a href='/random-show'>
                    <NavBarIcon icon={<FiTv size="25" />} />
                </a>
                <a href='/random-movie'>
                    <NavBarIcon icon={<FiFilm size="25" />} />
                </a>
            </div>
            <input type="search" id="movie-search" className="bg-sky-100 border-2 border-sky-600 rounded-md max-h-10 pt-6 mt-1"/>
        </div>
    )
}


/**
 * 
 * @param iconName 
 * @returns Imports an icon from React Icons
 */
const NavBarIcon = ({ icon }) => (
    <div className='navbar-icon'>
        {icon}

        <span className = "navbar-name">
        </span>
    </div>
)