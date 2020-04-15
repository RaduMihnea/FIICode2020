import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axiosRequest from "../../Utils/axios";
import {Link} from 'react-router-dom';
import LoginImage from '../../assets/images/buttons/Login.svg';
import { store } from 'react-notifications-component';
import back_button from '../../assets/images/Icons/Back-button.svg';
import see_password from '../../assets/images/Icons/See_password.png';

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            loginErrors: "",
            redirect: false,
            seePassword:false
            };
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/home'/>
        }
    }

    handleChange=(event)=> {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    goBack=()=>{
        this.props.history.goBack();
    }


    handleSubmit=(event)=> {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };


        axiosRequest.post('login', user)
            .then(response => {
                console.log("res from login", response);
                if (response.status === 200) {
                    this.setState({redirect: true})
                    this.props.doLogin(response.data)
                    store.addNotification({
                        title: "Login message",
                        message: "You have been logged in successfully!",
                        type: "success",
                        insert: "bottom",
                        container: "bottom-right",
                        animationIn: ["animated", "fadeIn"],
                        animationOut: ["animated", "fadeOut"],
                        dismiss: {
                            duration: 3000
                         }
                      });
                }
            }).catch(error => {
            console.log("login error", error);
            store.addNotification({
                title: "Authentication error",
                message: "Check your connection and authentication data and try again",
                type: "warning",
                insert: "bottom",
                container: "bottom-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 3000
                 }
              });
        });
    }

    render() {
        return (
            <>
            {this.renderRedirect()}
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-sm-3"/>
                    <div className="col-sm-6">
                        <div className="row justify-content-center h-25">
                            <img src={LoginImage} alt="login" className="title-image"/>
                        </div>
                        <div className="row justify-content-center h-75 mt-2">
                            <div className="col-sm-2"/>
                            <div className="col-sm-8">
                                <div className="container no-margin">
                                    <form onSubmit={this.handleSubmit}>
                                        <input
                                            className="input-main"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            required/>

                                        <input
                                            className="input-main"
                                            type={this.state.seePassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            required/>

                                        <img src={see_password} alt="see_password" 
                                        style={{height:30, position:'absolute', right:40}} 
                                        onClick={()=>this.setState({seePassword:!this.state.seePassword})}/>
                                        <div className="row justify-content-center">
                                            <button className="input-button-main" type="submit" onClick={this.handleSubmit}>
                                            Login
                                        </button>
                                            </div>
                                        
                                   </form>
                                    <Link to="/password/forgot">
                                        <div className="login_forgot_password">Forgot password?</div>
                                    </Link>
                                    <div className="row justify-content-center">
                                        <img src={back_button} alt="backbtn_login" onClick={this.goBack} style={{height:32, backgroundColor:"darkred", borderRadius:15, marginTop: 7}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2"/>
                        </div>
                    </div>
                    <div className="col-sm-3"/>
                </div>
            </div>
            </>
        );
    }
}
