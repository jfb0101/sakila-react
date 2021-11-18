import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/login/Login';
import { Routes } from './components/login/Routes';

function App() {
  return <Routes/>
}

export default App;

const containerStyle : React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
}