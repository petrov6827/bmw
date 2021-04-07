import logo from './images/logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Buy from './components/Buy/Buy';
import Footer from './components/Footer/Footer';
import Products from "./components/Product/Product";
import React, { useState } from 'react';


function App(props) {
    return (
        <div className="App">
            <Header/>
            <Products />
            {/*<Charachters*/}
            <Buy />
            <Footer/>
        </div>
    );
}


export default App;
