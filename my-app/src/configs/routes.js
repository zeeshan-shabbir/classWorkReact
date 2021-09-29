import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Nav from '../components/navbar';
import FreeAPI from '../screens/free-api';
import AnimalAPI from '../screens/animal-api-name';
import Snacks from '../screens/snacks';
import Signup from "../screens/sign-up";
import Login from "../screens/Login";

export default function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/animal-api">
                        <AnimalAPI />
                    </Route>
                    <Route exact path="/snacks">
                        <Snacks />
                    </Route>
                    <Route exact path="/sign-up">
                        <Signup />
                    </Route>
                    <Route exact path="/Login">
                        <Login />
                    </Route>
                    <Route exact path="/">
                        <FreeAPI />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}