import React, { Component } from 'react'
import Details from './Details'
import './form.css'
import {withRouter} from 'react-router-dom'

class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:'',
            password :''
        }
    }

    handleUsername= event =>{
        this.setState({
            username: event.target.value
        })
    }
    handlePassword= event =>{
        this.setState({
            password : event.target.value
        })
    }
    handleSubmit= event=> {
        this.props.history.push('./details')
    }

    render() {
        return (
            <>
            <h2 className="align">Login Page</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username : </label>
                    <input type="text" 
                    value={this.state.username}
                    onChange={this.handleUsername}/>
                </div>
                <br></br>
                <div>
                    <label>Password : </label>
                    <input type="password" 
                    value={this.state.password}
                    onChange={this.handlePassword}/>
                </div>
                <br></br>
                <div>
                    <button type="submit">Login</button>
                </div>
                <br></br>
                <br></br>
                <div>
                    <a href="/">Go to Registration Page</a>
                </div>
            </form>
            </>
        )
    }
}

export default withRouter(login)