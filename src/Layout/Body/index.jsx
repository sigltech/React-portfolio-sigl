import React from "react";
import HeaderLayout from '../HeaderLayout/index.jsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {

    return (
        <>
        <body>
            <HeaderLayout />
        </body>
        <Outlet />
        </>
    );
}
