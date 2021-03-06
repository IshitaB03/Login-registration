import React, { Component } from 'react'
import './form.css'
import Details from './Details'
import {withRouter} from 'react-router-dom'

class register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            fname:'',
            userName: '',
            password:'',
            email:'',
        }
        this.inputRef = React.createRef()
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
    
    handleSubmit= async (event)=> {
        this.props.history.push('./details')
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
        render() {
            const {fname,username,password,email,address}= this.state
            return (
                <>
                <h2 className="align">Registration Page</h2>
                <form onSubmit={this.handleSubmit} > 
                    <div>
                        <label>Full Name : </label>
                        <input type="text" ref={this.inputRef} 
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
                        <label>Email ID : </label>
                        <input type="email" 
                        value={email}
                        onChange={this.handleEmail}/>
                    </div>
                    <br></br>
                    <div>
                        <button className="btn btn-dark" type="submit">Submit</button>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <a href="/login">Go to Login Page</a>
                    </div>
                </form>
                </>
            )
        }
}

export default withRouter(register)