import React from 'react';
import '../../styles/output.css';
import { Home, Projects, Services, Stack } from '../index.js';

function Main() {
    return (
        <>
            <Home />
            <Services />
            <Stack />
            <Projects />
        </>
    );
}

export default Main;
