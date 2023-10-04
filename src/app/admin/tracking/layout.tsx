"use client";

import { ReactNode } from "react";

const Layout = ({
    children,
    modal,
}: {
    children: ReactNode;
    modal: ReactNode;
}) => {
    return (
        <>
            {children}
        </>
    );
};

export default Layout;
