import './index.css'
import { Component } from 'react'
import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'


class Login extends Component {
    state = {username:'rahul',password:'rahul@2021'}

    onSubmitSuccess = jwt_token => {
        Cookies.set('jwt_token',jwt_token,{expires:100})
        window.location.assign('/')
    }

    onClickLogin = async() => {
        const {username,password} = this.state
        const userDetails = {username,password}
        const options = {
            method:'POST',
            body: JSON.stringify(userDetails)
        }
        const apiUrl = 'https://apis.ccbp.in/login'
        const response = await fetch(options,apiUrl)
        const data = await response.json()
        if (response.ok === true) {
            this.onSubmitSuccess(data.jwt_token)
        }
    }

    render() {
        const jwt_token = Cookies.get('jwt_token')
        if (jwt_token === undefined) {
            return <Navigate to='/'/>
        }
        return (
            <div>
                <h1 className="login-heading">Please Login</h1>
                <div className="login-btn-container">
                    <button type="button" onClick={this.onClickLogin}>Login with Sample Creds</button>
                </div>
            </div>
        )
    }
}
export default Login