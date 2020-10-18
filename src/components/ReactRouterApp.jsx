import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import HeaderComponent from "./HeaderComponent";
import HomeComponent from "./HomeComponent";
import CategoryComponent from "./CategoryComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";
import AdminComponent from "./AdminComponent";
import ProductsComponent from "./ProductsComponent";
import FooterComponent from "./FooterComponent";

export default class ReactRouterApp extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={LoginComponent}/>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route exact path="/" component={HomeComponent}/>
                            <Route path="/category" component={CategoryComponent}/>
                            <AuthenticatedRoute path="/admin" component={AdminComponent}/>
                            <Route path="/products" component={ProductsComponent}/>
                        </Switch>
                    </>
                </Switch>
                <FooterComponent/>
            </BrowserRouter>
        )
    }
}