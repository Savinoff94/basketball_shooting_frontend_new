import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Social() {
    return (
        <>
            <nav>
                <Link to="/social">Search friends</Link>
                <Link to="social/my">My friends</Link>
                <Link to="social/pendingInvitations">Pending invitations</Link>
            </nav>
            <Outlet/>
        </>
    )
}

export default Social;