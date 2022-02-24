import React from 'react';
import { Footer } from '../../components';
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
            <Footer />
        </>
    );
}

export default Main;
