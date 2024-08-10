import { Link } from "react-router-dom";
const MainMenu = () => {

    return (
        <>
        <div>Main menu</div>
        <nav>
            <Link to="/social">Social</Link>
            <Link to="/training">Training</Link>
        </nav>
        </>
        
    )
}

export default MainMenu;