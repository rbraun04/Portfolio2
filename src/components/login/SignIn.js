import React, { Component } from 'react';

class SignIn extends Component {
    render() {
        return (
            <div className="form-container sign-in-container">
                <form className="form" action="#">
                    <h1 className="form-title">Welcome Back!</h1>

                    <input type="email" placeholder="Email" className="form-control" />
                    <input type="password" placeholder="Password" className="form-control"/>

                    <button className="form-button">sign in</button>
                    <a className="find-password" href="#">Forgot Password</a>
                </form>
            </div>
        );
    }
}

export default SignIn;
