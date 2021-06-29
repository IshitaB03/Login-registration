import React, { Component } from 'react'
import './form.css'

class register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fname:'',
            userName: '',
            password:'',
            email:'',
            address:''
        }
    }
    handlename= event =>{
        this.setState({
            fname: event.target.value
        })
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
    
    handleEmail = event =>{
        this.setState({
            email : event.target.value
        })
    }
    
    handleAddress = event =>{
        this.setState({
            address : event.target.value
        })
    }
    
    handleSubmit= event=> {
        
    }
    
        render() {
            const {fname,username,password,email,address}= this.state
            return (
                <>
                <h2 className="align">Registration Page</h2>
                <form onSubmit={this.handleSubmit} > 
                    <div>
                        <label>Full Name : </label>
                        <input type="text" 
                        value={fname}
                        onChange={this.handlename}/>
                    </div>
                    <br></br>
                    <div>
                        <label>Username : </label>
                        <input type="text" 
                        value={username}
                        onChange={this.handleUsername}/>
                    </div>
                    <br></br>
                    <div>
                        <label>Password : </label>
                        <input type="password" 
                        value={password}
                        onChange={this.handlePassword}/>
                    </div>
                    <br></br>
                    <div>
                        <label>email ID : </label>
                        <input type="email" 
                        value={email}
                        onChange={this.handleEmail}/>
                    </div>
                    <br></br>
                    <div>
                        <label>Address : </label>
                        <textarea
                        value={address}
                        onChange={this.handleAddress}
                        />
                    </div>
                    <br></br>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <a href="">Go to Login Page</a>
                    </div>
                </form>
                </>
            )
        }
}

export default register