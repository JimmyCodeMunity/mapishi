import React, { useState } from 'react';
import clsx from 'clsx';
import Content from '../components/Content';
import SideBar from '../components/SideBar';
import ProductAdd from '../components/ProductAdd';
import UserAdd from '../components/UserAdd';
import AllUsers from '../components/AllUsers';
import AllAdmins from '../components/AllAdmins';
import UserRestrictions from '../components/UserRestrictions';

const RestrictUserPage = () => {



    const [showSidebar, onSetShowSidebar] = useState(false);
    return (
        <div className="flex">
            <SideBar
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
                showSidebar={showSidebar}
            />
            <UserRestrictions
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
            />
        </div>
    );

}

export default RestrictUserPage;