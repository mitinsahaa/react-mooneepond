import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/others/header';
import Footer from './components/others/footer';
import Home from "./Home";
import Product from './components/pages/Product'
import Collection from "./components/pages/Collection";
import ContactUs from "./components/pages/ContactUs";

function App(){
    return(
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/collections/" element={<Collection />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App;