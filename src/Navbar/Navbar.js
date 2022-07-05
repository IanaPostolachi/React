import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


function Navbar() {
const [sidebar, setSidebar] = useState(false)

const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <div className='navbar'>
        <Link to="#" className='menu-bars'>
           <FaIcons.FaBars className='burger' size={25} onClick={showSidebar} /> 
        </Link>
      </div>
      <nav className={sidebar ? 'nav-manu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
            <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                </Link>
            </li>
        </ul>
      </nav>
    </>
  )
}
export default Navbar