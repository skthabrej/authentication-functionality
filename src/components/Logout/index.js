import './index.css'
import { Component } from 'react'
import Cookies from 'js-cookie'

class Logout extends Component {

    onLogout = () => {
        Cookies.remove('jwt_token')
        window.location.replace('/login')
      }
    
    render() {
        return (
            <div className="btn-container">
                <button type="button" onClick={this.onClickLogout}>Logout</button>
            </div>
        )
    }
}
export default Logout