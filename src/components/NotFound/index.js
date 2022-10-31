import './index.css'
import { Component } from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const cookieExit = Cookies.get('jwt_token') === undefined ? false : true


class NotFound extends Component {

    getNotFound = () => {
        return(
            <h1 className="not-found">Not Found</h1>
        )
    }

    render() {
        return cookieExit ? this.getHome() : <Navigate to='/login'/>
    }
}
export default NotFound