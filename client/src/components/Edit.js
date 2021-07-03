import React,{useState} from 'react'

function Edit() {
    const initialValues={
        fname:'',
        userName: '',
        password:'',
        email:'',
        address:'',
    }
    const [user,setUser]= useState(initialValues)
    
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
                        <label>Email ID : </label>
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

export default Edit
