import React from "react";
import SessionForm from "./sessionForm";


class Login extends React.Component {


    render() {
        return(
            <div id='loginRegistrationBackground'>
                <div id="loginContainer">
                        < SessionForm />
                </div>
            </div>
        )
    }
}

export default Login