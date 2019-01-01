import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import AppBar from './components/Header'
import Home from './components/Home/Home'
import SignIn from './components/Auth/SignIn'

const App = () => (
        <BrowserRouter>
            <div className="App">
                <AppBar />
                <Route path="/" exact component={Home}/>
                <Route path="/signin" exact component={SignIn}/>
            </div>
        </BrowserRouter>
);

export default App;
