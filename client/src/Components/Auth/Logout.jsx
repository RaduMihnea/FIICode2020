import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import axiosRequest from "../../Utils/axios";

import LogoutImage from '../../assets/images/buttons/Logout.svg';

export default class Logout extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/home'/>
        }
    }

    componentDidMount() {
        axiosRequest.post("logout")
            .then(response => {
                console.log("res from logout", response);
                this.props.emptyCart()
                this.props.doLogout()
            }).catch(error => {
            console.log("logout error", error);
        });
        setTimeout(() => {
            this.setState({redirect: true,})
        }, 1000);
    }

    render() {
        return (
            <>
            {this.renderRedirect()}
            <div className="container h-100">
                <div class="row">
                    <div class="col-sm-3"/>
                    <div class="col-sm-6">
                        <img src={LogoutImage} alt="logout" class="title-image"/>
                        <div class="row justify-content-center">
                            <div class="display-1 font-main color-primary pt-5 mt-5">
                                <h1>Logging you out...</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3"/>
                </div>
            </div>
            </>
        )
    }
}
