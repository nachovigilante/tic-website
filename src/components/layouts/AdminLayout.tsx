import React, { type PropsWithChildren } from "react";

const AdminLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <p>Admin</p>
            {children}
        </>
    )
}

export default AdminLayout