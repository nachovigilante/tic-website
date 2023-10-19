"use client";

import Timeline from "~/components/admin/Timeline";
import useLogin from "~/hooks/auth/useLogin";

const Page = () => {
    const { refreshToken } = useLogin();

    return (
        <>
            <h1 onClick={() => void refreshToken()}>ADMIN</h1>
        </>
    );
};

export default Page;
