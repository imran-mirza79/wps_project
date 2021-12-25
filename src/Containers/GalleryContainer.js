import React from 'react';
import Gallery from '../Components/Gallery/Gallery';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const GalleryContainer = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Gallery />
            <Footer/>
        </React.Fragment>
    );
};

export default GalleryContainer;