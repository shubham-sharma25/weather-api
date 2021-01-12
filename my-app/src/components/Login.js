import React, { Component } from 'react';
import Weather from './Weather';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:"",
            pass:"",
            login:false
        }
    }
    

    logIn = (e) => {
        if(this.state.user!=="" && this.state.pass!==""){
            this.setState({ login: true });
        } else {
            alert("Enter credentials!!")
        }
    }

    render() {
        return (
            <div>
                <h3>Enter any username or password to login!</h3>
                {!this.state.login ? <form onSubmit={this.logIn}>
                    <div className="form-group">
                        <label >Name:</label>
                        <input type="text" className="form-control login-form" id="email" placeholder="Enter Username" onChange={(e)=>this.setState({user:e.target.value})}/>
                    </div>
                    <div className="form-group">
                        <label >Password:</label>
                        <input type="password" className="form-control login-form" id="pwd" placeholder="Enter password" onChange={(e)=>this.setState({pass:e.target.value})}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                    :
                    <Weather user={this.state.user}/>
                }
            </div>
        );
    }
}

export default Login;