import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import AppBar from './components/Header'
import Home from './components/Home/Home'
import SignIn from './components/Auth/SignIn'
import NewsTable from './components/News/NewsTable'
import Profile from './components/Profile/Profile'
import Ex from './components/Ex'

const App = () => (
        <BrowserRouter>
            <div className="App">
                <AppBar />
                <Route path="/" exact component={Home}/>
                <Route path="/signin" exact component={SignIn}/>
                <Route path="/news" exact component={NewsTable}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/logout" exact component={Ex}/>
            </div>
        </BrowserRouter>
);


export default App;
