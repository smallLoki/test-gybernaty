import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Header, Menu, Item } from "./styled.ts";
import './navigation.styles.css'
import cn from 'classnames';

function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();

    const styleProject = cn("item", location.pathname == "/" || location.pathname == "/create" ? " active" : "");
    const styleInvites = cn("item", location.pathname == "/invites" ? " active" : "");

    const handleNavigation = () => {
        navigate('/create');
    }

    return (
        <Header>
            <Button  onClick={handleNavigation}>CREATE</Button>
            <Menu>
                <Link className={styleProject} to="/">Projects</Link>
                <Link className={styleInvites} to="/invites">Invites</Link>
                <Item>Users</Item>
                <Item>Teams</Item>
            </Menu>
        </Header>
    )
}

export default Navigation
