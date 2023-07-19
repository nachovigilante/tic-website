import React, { type PropsWithChildren } from 'react';
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainLayout