import React from 'react';
import AboutUs from '../Components/AboutUs/AboutUs';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const AboutContainer = () => {
    return (
        <React.Fragment>
            <Navbar />
            <AboutUs/>
            <Footer/>
        </React.Fragment>
    );
};

export default AboutContainer;