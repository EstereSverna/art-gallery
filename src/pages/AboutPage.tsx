import React from 'react';
import '../styles/AboutPage.css';
import Navbar from '../components/NavBar';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <Navbar />
            <h1>ABOUT</h1>
            <p>
                Welcome to Rijksmuseum Shuffle, a dynamic art gallery web application
                designed to bring the rich collection of the Rijksmuseum to life in an
                interactive way. This project allows you to explore and discover artwork
                from the museum's vast collection, offering a fresh experience with each
                shuffle.
                <br />
                <br />
                At the core of the application is the Shuffle Button—click it, and
                you'll see three new random pieces of art displayed on the screen. Each
                time you shuffle, you're presented with different masterpieces from the
                museum's collection. The experience doesn't stop there: clicking on any
                individual artwork opens a dedicated page featuring detailed information
                about that specific piece.
                <br />
                <br />
                This project was created as a technical challenge for front-end
                developers, showcasing skills in React, API integration, and the use of
                clean and maintainable code. We interact directly with the Rijksmuseum's
                open API to fetch real-time data and images, offering you a seamless
                experience of art exploration. Get ready to shuffle, discover, and dive
                into the world of art!
            </p>
        </div>
    );
};

export default AboutPage;
