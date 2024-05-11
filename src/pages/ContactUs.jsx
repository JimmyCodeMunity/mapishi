import React, { useState } from 'react';
import clsx from 'clsx';
import Content from '../components/Content';
import SideBar from '../components/SideBar';
import ContactUsTable from '../components/ContactUsTable';

const ContactUs = () => {



    const [showSidebar, onSetShowSidebar] = useState(false);
    return (
        <div className="flex">
            <SideBar
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
                showSidebar={showSidebar}
            />
            <ContactUsTable
                onSidebarHide={() => {
                    onSetShowSidebar(false);
                }}
            />
        </div>
    );

}

export default ContactUs;
