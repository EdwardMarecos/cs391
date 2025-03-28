import { Link } from "react-router-dom";
import { styled } from "styled-components";

const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const NavItem = styled.li`
    margin: 1vh 0.5vw;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #f2e9e4;
    font-size: 1.2em;
    display: block;
    padding: 0.5vh 1vw;
    border-radius: 10px;
`;

export default function Navigation() {
    return (
        <>
            <NavList>
                <NavItem><NavLink to="/">Home</NavLink></NavItem>
                <NavItem><NavLink to="/education">Education</NavLink></NavItem>
                <NavItem><NavLink to="/experiences">Experiences</NavLink></NavItem>
                <NavItem><NavLink to="/certifications">Certifications</NavLink></NavItem>
                <NavItem><NavLink to="/references">References</NavLink></NavItem>
                <NavItem><NavLink to="/achievements">Achievements</NavLink></NavItem>
                <NavItem><NavLink to="/projects">Projects</NavLink></NavItem>
            </NavList>
        </>
    );
}
