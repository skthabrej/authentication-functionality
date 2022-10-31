import { Component } from "react";
import './index.css'
import Header from "../Header";
import Logout from "../Logout";
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const cookieExit = Cookies.get('jwt_token') === undefined ? false : true

class Home extends Component {

    getHome = () => {
        return(
            <>
            <Header/>
            <h1 className="home">Home Route</h1>
            <Logout />
            </>
        )
    }

    render() {
        return cookieExit ? this.getHome() : <Navigate to='/login'/>
    }
}
export default Home