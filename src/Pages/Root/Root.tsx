import { Outlet } from "react-router-dom";

const Root = () => {

    return (
        <>
            <nav>
                <a href="/login">Login</a>
                <a href="/register">register</a>
            </nav>
            <Outlet/>
        </>
    )
}

export default Root;