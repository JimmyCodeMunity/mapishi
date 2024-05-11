import React, { useState } from 'react';

import SideBar from '../components/SideBar';

import AllSales from '../components/AllSales';

const Sales = () => {



    const [showSidebar, onSetShowSidebar] = useState(false);
    return (
        <div className="flex">
            <SideBar
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
                showSidebar={showSidebar}
            />
            <AllSales
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
            />
        </div>
    );

}

export default Sales;
