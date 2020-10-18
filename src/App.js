import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from "./components/HeaderComponent";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import CategoryComponent from "./components/CategoryComponent";
import LoginComponent from "./components/LoginComponent";
import AdminComponent from "./components/AdminComponent";
import ProductsComponent from "./components/ProductsComponent";
import HomeComponent from "./components/HomeComponent";
import Login from "./components/LoginComponent";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import ReactRouterApp from "./components/ReactRouterApp";

function App() {
    return (
        <div className="App">
            <ReactRouterApp/>
        </div>
    );
}


// /* PrivateRoute component definition */
// const PrivateRoute = ({component: Component, ...rest}) => {
//     return (
//         <Route{...rest} render={props =>
//             fakeAuth.isAuthenticated === true ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                     to={{pathname: "/login", state: {from: props.location}}}
//                 />
//             )
//         }
//         />
//     );
// };

export default App;
