import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Root = () => {
    
    const { isAuth } = useSelector((state: RootState) => state.authorisation);
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuth) {
            navigate('/mainMenu')
        }
    }, [isAuth, navigate])

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