import {NavLink} from "react-router-dom";
import Logo from "./Logo";

export default function Navigation() {
    return (
        <div className="navigation">
            <Logo />
            <ul className="navbar">
                <li>
                    <NavLink to='/topMems'>TOP</NavLink>
                </li>
                <li>
                    <NavLink to='/addMemeForm'>Dodaj mema</NavLink>
                </li>
                <li>
                    <NavLink to='/error404'>Error404</NavLink>
                </li>
            </ul>
        </div>
    )
}