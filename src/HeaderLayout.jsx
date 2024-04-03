import {Link} from "react-router-dom";

function HeaderLayout() {
    return (

        <nav>
            <div>
                <Link to='/'>Games</Link>
                <Link to='/score'>Score</Link>
            </div>
        </nav>
    );
}

export default HeaderLayout;