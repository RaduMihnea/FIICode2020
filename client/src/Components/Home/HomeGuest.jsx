import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Login from '../../assets/images/buttons/Login.svg';
import CreateAccount from '../../assets/images/buttons/CreateAccount.svg';
import About from '../../assets/images/buttons/About.svg';
import Products from '../../assets/images/buttons/Products.svg';

export default class HomeGuest extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="row h-75 w-100 justify-content-center no-margin">
                <div className="row w-100 h-auto">
                    <div className="d-flex justify-content-end col-lg-6 p-1 p-lg-3">
                        <div className="col-lg-6">
                            <Link to="/products" >
                                <img  src={Products} alt="products"/>
                            </Link>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start col-lg-6 p-1 p-lg-3">
                        <div className="col-lg-6">
                            <Link to="/about">
                                <img src={About} alt="about"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row w-100 h-auto">
                    <div className="d-flex justify-content-end col-lg-6 p-1 p-lg-3">
                        <div className="col-lg-6">
                            <Link to="/register">
                                <img src={CreateAccount} alt="createAccount"/>
                            </Link>
                        </div>
                    </div>
                    <div className="d-flex justify-content-start col-lg-6 p-1 p-lg-3">
                        <div className="col-lg-6">
                            <Link to="/login">
                                <img src={Login} alt="login"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
