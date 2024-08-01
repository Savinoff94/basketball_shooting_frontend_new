import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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
                <Link to="/login">Login</Link>
                <Link to="/register">register</Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default Root;