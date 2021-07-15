import './App.css';
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';
import Products from "./components/Product/Product";
import React from 'react';
import Delivery from "./components/Delivery/Delivery";
import 'fontsource-roboto';


function App(props) {
    return (
        <div className="App">
            <Header/>
            <Products />

            <Delivery />
            <Footer/>
        </div>
    );
}

export default App;
