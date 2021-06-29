import React, { Component } from 'react'
import './form.css'

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

    }

    render() {
        return (
            <>
            <h2 className="align">lOGIN Page</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username : </label>
                    <input type="text" 
                    value={username}
                    onChange={this.handleUsername}/>
                </div>
                <div>
                    <label>Password : </label>
                    <input type="password" 
                    value={password}
                    onChange={this.handlePassword}/>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
                <br></br>
                <br></br>
                <div>
                    <a href="">Go to Registration Page</a>
                </div>
            </form>
            </>
        )
    }
}

export default login