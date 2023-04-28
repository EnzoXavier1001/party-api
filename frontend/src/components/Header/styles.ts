import styled from "styled-components";

export const Header = styled.header`
    padding: 2rem 2.8rem;
`

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        color: var(--primary-color);
        font-size: 2.6rem;
        font-weight: bold;
    }
`

export const NavbarList = styled.ul`
    a {
        background-color: var(--primary-color);
        color: #fff;
        padding: 1.2rem 1.8rem;
        border-radius: 8px;
        font-weight: bold;
        transition: all 0.4s linear;

        &:hover {
            filter: brightness(0.8);
        }
    }



    a:first-child {
        background-color: transparent;
        color: var(--second-color);
        margin-right: 1.6rem;
        color: var(--second-color);
        font-weight: bold;
    }
`



