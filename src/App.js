import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import AppBar from './components/Header'
import Home from './components/Home/Home'

const App = () => (
        <BrowserRouter>
            <div className="App">
                <AppBar />
                <Route path="/" exact component={Home}/>
            </div>
        </BrowserRouter>
);

export default App;
