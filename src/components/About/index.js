import Header from '../Header'
import Logout from '../Logout'
import './index.css'
import { Component } from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const cookieExit = Cookies.get('jwt_token') === undefined ? false : true

class About extends Component {

    getAbout = () => {
        return(
            <>
            <Header/>
            <h1 className='about'>About Route</h1>
            <Logout/>
            </>
        )
    }

    render() {
        return cookieExit ? this.getHome() : <Navigate to='/login'/>
    }
}
export default About