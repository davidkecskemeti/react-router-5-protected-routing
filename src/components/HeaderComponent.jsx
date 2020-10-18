import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class HeaderComponent extends Component {
    render() {
        return (
            <>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a className="navbar-brand" href="http://www.google.com">DavidK</a>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-link"><Link to="/">Home</Link></li>
                            <li className="nav-link"><Link to="/products">Products</Link></li>
                            <li className="nav-link"><Link to="/category">Category</Link></li>
                            <li  className="nav-link"><Link to="/admin">Admin area</Link></li>
                        </ul>
                    </nav>
                </header>
            </>
        )
    }
}