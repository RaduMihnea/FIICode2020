import React, {Component} from 'react';
import axiosRequest from "axios";

export default class ResetPassword extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            newPassword: "",
            confirmNewPassword: "",
            mesaj: "",
            token: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount() {
        this.setState({
            token: this.props.location.pathname.slice(16),
            email: this.props.location.search.slice(7).replace("%40", "@")
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const new_password_details = {
            password: this.state.newPassword,
            email: this.state.email,
            token: this.state.token
        }
        if (this.state.newPassword === this.state.confirmNewPassword) {
            axiosRequest.post("password/reset", new_password_details).then(response => {
                this.setState({mesaj: "Your new password is set, please log in!"})
            }).catch(error => {
                console.log("registration error", error);
            })
            window.location.href = '/home';
        }
        else
            this.setState({mesaj: "Password and password confirmation do not match"})
    }

    render() {
        return (
            <div className="forgot-password">
                <div className="forgot-password-title">Reset your password:</div>
                <form>
                    <input
                        className="h-auto"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required/>

                    <input
                        className="h-auto"
                        type="password"
                        name="newPassword"
                        placeholder="Enter your new password"
                        value={this.state.newPassword}
                        maxLength={16}
                        minLength={8}
                        onChange={this.handleChange}
                        required/>

                    <input
                        className="h-auto"
                        type="password"
                        name="confirmNewPassword"
                        placeholder="Confirm your new password"
                        value={this.state.confirmNewPassword}
                        maxLength={16}
                        minLength={8}
                        onChange={this.handleChange}
                        required/>

                    <button type="submit h-auto" onClick={this.handleSubmit}>Submit</button>
                </form>

                <div className="forgot_password_spatiu_erori">{this.state.mesaj}</div>
            </div>
        )
    }
}
