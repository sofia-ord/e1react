import { NavLogo, NavbarContainer } from "./styles"
import { LinksContainer } from "./styles"
export const Navbar = () => {
    return (
        <NavbarContainer>
            <NavLogo>
                <h2>di
                <span>Pâle</span>
                </h2>
            </NavLogo>
            <LinksContainer>
                <a href="#">Home</a>
                <a href="#">Productos</a>
                <a href="#">Sobre Nosotros</a>
            </LinksContainer>
        </NavbarContainer>
    )
}