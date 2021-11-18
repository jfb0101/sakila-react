import React, { useState } from 'react'

export type LoginProps = {
    onDoLogin: (username: string, password: string) => void
}

export const Login = (props:LoginProps) => {
    
    const [loginData,setLoginData] = useState<{username: string, password: string}>({username: "usuario1", password: "usuario1"})

    return <>
        <div style={containerStyle}>
            <label>Usuário</label>
            <input type="text"
                value={loginData.username}
                onChange={e => setLoginData({...loginData, username: e.target.value})}/>
            <label>Senha</label>
            <input type="password"
                value={loginData.password}
                onChange={e => setLoginData({...loginData, password: e.target.value})}/>
            <button
                onClick={() => props.onDoLogin(loginData.username, loginData.password)}>Login</button>
        </div>
    </>
}

const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
}