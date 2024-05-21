import facebook from "./assets/facebook.png"
import instagram from "./assets/instagram.png"
import google from "./assets/google.png"
import whatsapp from "./assets/whatsapp.png"
import { FooterStyled, ItemStyled, LinkStyled, ListStyled } from "./styles"

const Footer = () => {
    const socialMedias = [facebook, instagram, google, whatsapp]
    return (
        <FooterStyled>
            <ListStyled>
                <ItemStyled>
                    <LinkStyled href="#">
                        {socialMedias.map(logo => <img src={logo} alt="Facebook" />)}
                    </LinkStyled>
                </ItemStyled>
            </ListStyled>
            <p>2023 © Developed by Alura | Fictional non-commercial project.</p>
        </FooterStyled>
    )
}

export default Footer