import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import AllStaff from '../components/AllStaff';
import AllProducts from '../components/AllProducts';
import AllFeedbacks from '../components/AllFeedbacks';

const FeedbacksPage = () => {



    const [showSidebar, onSetShowSidebar] = useState(false);
    return (
        <div className="flex">
            <SideBar
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
                showSidebar={showSidebar}
            />
            <AllFeedbacks
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
            />
        </div>
    );

}

export default FeedbacksPage;
