import React from 'react';
import Header from './Header';
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Sorting Algo Visualizer</title>
            </Head>
            <Header />
            { children }
        </div>
    )
}

export default Layout;