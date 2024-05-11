import React, { useState } from 'react';

import SideBar from '../components/SideBar';
import AddAd from '../components/AddAd';


const CreateAdPage = () => {



    const [showSidebar, onSetShowSidebar] = useState(false);
    return (
        <div className="flex">
            <SideBar
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
                showSidebar={showSidebar}
            />
            <AddAd
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
            />
        </div>
    );

}

export default CreateAdPage;
