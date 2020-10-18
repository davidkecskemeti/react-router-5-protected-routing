import React, {Component} from "react";
import {Route, Redirect} from "react-router-dom";

export default class AuthenticatedRoute extends Component {
    render() {
        return (
            <>
                <Redirect to={{pathname: '/login'}}/>
            </>
        )
    }
}
