import logo from "./assets/logo.png"
import profile from "./assets/profile.png"
import { Container, HeaderStyled, LinkStyled } from "./styles"

const Header = () => {
    return (
        <HeaderStyled>
            <img src={logo} alt="Logo Voll" />
            <Container>
                <img src={profile} alt="imagem de perfil do user" />
                <LinkStyled href="#">Log out</LinkStyled>
            </Container>
        </HeaderStyled>
    )
}

export default Header