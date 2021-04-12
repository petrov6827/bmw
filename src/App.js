import './App.css';
import Header from './components/Header/Header';
import Buy from './components/Buy/Buy';
import Footer from './components/Footer/Footer';
import Products from "./components/Product/Product";
import React, { useState } from 'react';
import Delivery from "./components/Delivery/Delivery";
import 'fontsource-roboto';

function App(props) {
    return (
        <div className="App">
            <Header/>
            <Products />
            <Buy />
            <Delivery />
            <Footer/>
        </div>
    );
}

export default App;
