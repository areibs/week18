import React from 'react';
import NavigationBar from "./navbar";
import Login from "./login";
import Username from './username';
import Password from './password';
import SubmitButton from './button';
import Logo from './logo';

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="container">
                <NavigationBar />
                <Logo/>

                <div id="loginForm" className="container">
                    <br></br>
                    <h3><Login/></h3>
                    <br></br>
                    <br></br>
                    <form id="formContainer" className="container form-control">
                       
                    </form>
                </div>
            </div>
        );
    }
}