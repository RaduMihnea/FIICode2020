import React from 'react';
import {Redirect, Route} from 'react-router-dom'

export const PrivateRoute = ({component: Component, isLoggedIn: auth, ...rest}) => {
    return (
        <Route {...rest} render={
            (props) => {
                if (auth) {
                    return <Component {...props}/>
                }
                else {
                    return <Redirect to={
                        {
                            pathname: "/home",
                            state: {from: props.location}
                        }
                    }/>
                }
            }
        }/>
    );
};