import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Form from "./pages/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
    <>
        <Navbar />
        <Routes>
            <Route path="/api/items/" element={<Home />} />
            <Route path="/api/items/:category" element={<Category />} />
            <Route path="/api/items/new" element={<Form />} />
            <Route path="/api/items/:itemId/detail" element={<Detail />} />
            <Route path="/:category/:itemId/edit" element={<Form />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<Error />} />
        </Routes>
        <Footer />
    </>
);

export default App;
