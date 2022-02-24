import React from 'react';
import { BackToTop, Footer } from '../../components';
import '../../styles/output.css';
import { Contact, Home, Projects, Services, Stack } from '../index.js';

function Main() {
    return (
        <>
            <Home />
            <Services />
            <Stack />
            <Projects />
            <Contact />
            <BackToTop />
            <Footer />
        </>
    );
}

export default Main;
