import logo from './images/logo.svg';
import './App.css';
import Header from './components/Header/Header';
// import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import ProductList from "./components/Product/Product";
import Charachters from "./components/Charachters/Charachters";
import React, { useState } from 'react';


function App(props) {
    return (
        <div className="App">
            <Header/>
            <ProductList products={products}/>
            <Charachters spec={spec}/>
            <Footer/>
        </div>
    );
}

const products = [
    {id: 1, name: 'BMW CRUISE BIKE', image: '../../images/bmw1.png'},
    {id: 2, name: 'BMW M BIKE', image: '../../images/bmw1_blue.png'},
];
const spec = [
    {id: 1, about: 'Велосипед BMW Cruise из коллекции 2020 года. ', year: '2020'},
    {id: 2, about: 'Велосипед BMW с полосами «M Motorsport»', year: '2021'},
]


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
