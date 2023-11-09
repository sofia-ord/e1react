import { Button } from "../button/button"
import { HeaderContainer, HeaderImgContainer, HeaderTextContainer } from "./styles"

export const Header = () => {
    return(
        <HeaderContainer>
            <HeaderTextContainer>
                <h1>diPâle</h1>
                <h2>Helados 100% naturales</h2>
                <p>¿Cual vas a elegir hoy?</p>
                <Button>
                    Ver mas
                </Button>
            </HeaderTextContainer>
            <HeaderImgContainer>
                <img src="https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </HeaderImgContainer>
        </HeaderContainer>
    )
}