import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "./components/main-page";
import { AuthPage } from "./components/auth-page";
import {SecondaryPage} from "./components/secondary-page"

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/main" exact>
                    <MainPage />
                </Route>
                <Route path="/secondary" exact>
                    <SecondaryPage />
                </Route>
                <Redirect to="/main" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )

}