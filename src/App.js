import React from 'react';
import Navbar from "./Components/Home/Navbar/Navbar";
import "../src/assets/Style/style.css"
import Section from "./Components/Home/Section/Section";
import Footer from "./Components/Home/Footer/Footer"


function App() {
    return (
        <div className="wrapper">
            <Navbar/>
            <Section/>
            <Footer/>
        </div>
    );
}

export default App;