import {NavLink} from "react-router-dom";
import Logo from "./Logo";


export default function Navigation( {onAddMeme}) {
    return (
        <div className="navigation">
            <Logo />
            <ul className="navbar">
                <li>
                    <NavLink to='/topMems'>TOP</NavLink>
                </li>
                <li>
                    <NavLink to='/addMemeForm' onAddMeme={onAddMeme} >Dodaj mema</NavLink>
                </li>
            </ul>
        </div>
    )
}