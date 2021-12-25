import React from "react";
import HomePage from "../Components/HomePage/HomePage";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const HomeContainer = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <HomePage />
            <Footer/>
        </React.Fragment>
    )
};
export default HomeContainer;