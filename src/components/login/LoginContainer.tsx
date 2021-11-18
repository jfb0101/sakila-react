import React from 'react'
import { doLogin } from '../../use-cases/do-login/doLogin'
import { IDoLogin } from '../../use-cases/do-login/IDoLogin'

import { Login } from './Login'

export type LoginContainerProps = {
    onLoggedIn: (token:string) => void
}

export const LoginContainer = (props: LoginContainerProps) => {

    const doLoginUseCase: IDoLogin = doLogin

    return <>
        <Login
            onDoLogin={async (username,password) => {
                const loginResult = await doLoginUseCase({username,password})

                props.onLoggedIn(loginResult.token)
            }}/>
    </>
}
