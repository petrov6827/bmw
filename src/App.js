import logo from './images/logo.svg';
import './App.css';
import Header from './components/Header/Header';
// import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Products from "./components/Product/Product";
import React, { useState } from 'react';


function App(props) {
    return (
        <div className="App">
            <Header/>
            <Products />
            {/*<Charachters*/}
            <Footer/>
        </div>
    );
}


// const spec1 = [
//     { id: 1, about: 'Велосипед BMW Cruise из коллекции 2020 года. ', year: '2020' },
//     // { id: 2, about: 'Велосипед BMW с полосами «M Motorsport»', year: '2021'},
// ]
//
// const spec2 = [
//     // { id: 1, about: 'Велосипед BMW Cruise из коллекции 2020 года. ', year: '2020' },
//     { id: 2, about: 'Велосипед BMW с полосами «M Motorsport»', year: '2021'},
// ]

export default App;
