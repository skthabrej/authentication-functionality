import { Component } from "react";
import './index.css'
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <nav className="nav-items">
                <Link to='/'><p className="item">Home</p></Link>
                <Link to='/about'><p className="item">About</p></Link>
            </nav>
        )
    }
}
export default Header
