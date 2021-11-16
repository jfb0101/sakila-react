import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/login/Login';

function App() {
  return <div style={containerStyle}>
    <Login
      onDoLogin={() => {}}/>
  </div>
}

export default App;

const containerStyle : React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
}