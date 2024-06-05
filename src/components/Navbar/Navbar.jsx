import { NavLink } from "react-router-dom";
import { navItems } from "../../constants/navItems";
import logo from '../../assets/logo.svg';

const Navbar = () => {
    return (
        <nav className="flex items-center">
            <img src={logo} alt="Logo" />
            <ul className="flex items-center justify-between px-8 py-4">
                {
                    navItems.map(item => {
                        return(
                            <li className="" key={item.id}>
                                <NavLink className='font-bold text-green-400' to={item.path}>{item.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar