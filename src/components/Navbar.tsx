// Navbar.jsx
import React, { useState, useEffect } from 'react';
import '../assets/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>

            <div className="navbar sticky-top navbar-expand-lg bg444">
                <div className="container">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto w-100 justify-content-end">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={`/sponser`}>About</a>
                                
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a></li>
                            <li className="nav-item">
                                <a className="nav-link" href={`/sponser`}>Sponser</a></li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Other</a>
                            </li>
                        </ul>
                        <button className="btn bg-style">Register Now</button>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Navbar;
