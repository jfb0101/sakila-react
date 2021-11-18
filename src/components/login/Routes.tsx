import React from 'react'
import {Switch, Route, useLocation, useHistory} from 'react-router-dom'
import { RentFilmContainer } from '../rent-film/RentFilmContainer'
import { Login } from './Login'
import { LoginContainer } from './LoginContainer'

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const LoginRoute = () => {
    const history = useHistory()
    
    return <>
        <LoginContainer
            onLoggedIn={(token) => {history.push(`/rentFilm?token=${token}`)}}/>
    </>
}

const RentFilmRoute = () => {
    const query = useQuery()

    return <>
        <RentFilmContainer
            token={query.get('token')}/>
    </>
}

export const Routes = () => {
    return <Switch>
        <Route exact path="/">
            <LoginRoute/>
        </Route>

        <Route exact path="/rentFilm">
            <RentFilmRoute/>
        </Route>
    </Switch>
}