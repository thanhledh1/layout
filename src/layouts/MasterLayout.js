import React from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';

function MasterLayout({children}) {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
            
        </>
    );
}

export default MasterLayout;