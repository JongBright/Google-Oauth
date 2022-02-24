import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

class App extends Component {

    constructor() {
        super()
        this.state = { ClientID: "920396170918-a37g2pj68tfspfat73i3pu9oqmo63ggr.apps.googleusercontent.com" }
    }


    loginSuccess = (res) => {
        alert('Login Success')
        console.log(res)
    }

    loginFailure = (res) => {
        //alert('Login Failure')

    }


    render() {
        return (
            <div className="grid place-items-center">
                <h1 className="mt-40 text-white font-bold text-xl">Login with Google</h1>
                <GoogleLogin
                    className="mt-4"
                    clientId={this.state.ClientID}
                    buttonText="Login"
                    onSuccess={this.loginSuccess}
                    onFailure={this.loginFailure}
                    cookiePolicy={'single_host_origin'}

                />


            </div>

        )

    }

}

export default App;