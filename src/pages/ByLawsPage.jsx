import React, { useState } from 'react';
import clsx from 'clsx';
import Content from '../components/Content';
import SideBar from '../components/SideBar';
import ProductAdd from '../components/ProductAdd';
import UserAdd from '../components/UserAdd';
import AllUsers from '../components/AllUsers';
import AllAdmins from '../components/AllAdmins';

const ByLawsPage = () => {



    const [showSidebar, onSetShowSidebar] = useState(false);
    return (
        <div className="flex">
            <SideBar
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
                showSidebar={showSidebar}
            />
            <AllAdmins
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
            />
        </div>
    );

}

export default ByLawsPage;
