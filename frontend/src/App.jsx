import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Form from "./pages/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/:category/add" element={<Form />} />
            <Route path="/:category/:id/edit" element={<Form />} />
        </Routes>
        <Footer />
    </>
);

export default App;
