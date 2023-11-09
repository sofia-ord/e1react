import styled from "styled-components";

export const NavbarContainer = styled.div`
height: 80px;
background-color: #FAEDCD;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 4rem;
@media (max-with: 768px){
    padding: 1rem 2rem;
}`

export const NavLogo = styled.div`
color: #D4A373;
display: flex;
justify-content: center;
align-items: center;`

export const LinksContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
a{
    padding: 1rem 1.5rem;
    text-decoration: none;
    list-style: none;
    color: #D4A373;
    font-size: 1.2rem;
}
`