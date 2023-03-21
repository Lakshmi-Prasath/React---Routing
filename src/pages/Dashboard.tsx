import React from 'react'
import Header from '../layouts/Header';
import Maincontent from '../layouts/Maincontent';
import Sidebar from '../layouts/Sidebar';

function Dashboard() {

    return (
        <div>
            <Header />
            <Sidebar />
            <Maincontent />
        </div>
    )
}

export default Dashboard