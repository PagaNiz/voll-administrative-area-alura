import review from "./assets/review.png"
import graphic from './assets/graphic.png'
import consultation from './assets/consultation.png'
import { IImage, TitleProps } from "./interfaces"
import { ContainerStyled, SpanStyled, TitleStyled } from "./styles"


const Title = ({image, children}: TitleProps) => {
    const imageList: IImage = {
        review: review,
        consultation: consultation,
        graphic: graphic
    }
    return (
        <ContainerStyled>
            {image && <SpanStyled image={imageList[image as keyof IImage]}/>}
            <TitleStyled>{children}</TitleStyled>
        </ContainerStyled>
    )
}

export default Title