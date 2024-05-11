import React, { useState } from 'react';
import SideBar from '../components/SideBar';

import AllBlockedAccounts from '../components/BlockedAccounts';

const BlockedAccountsPage = () => {



    const [showSidebar, onSetShowSidebar] = useState(false);
    return (
        <div className="flex">
            <SideBar
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
                showSidebar={showSidebar}
            />
            <AllBlockedAccounts
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
            />
        </div>
    );

}

export default BlockedAccountsPage;
