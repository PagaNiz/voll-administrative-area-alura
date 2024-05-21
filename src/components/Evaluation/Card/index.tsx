import { Rating } from "@mui/material"
import IProfessional from "../../../types/IProfessional"
import { ContainerStyled } from "./styles"
import { ImageStyled, ItemStyled, ListStyled, ParagraphNameStyled, ParagraphStyled } from "./styles"

const Card = ({ professional }: { professional: IProfessional }) => {
    return (
        <ContainerStyled>
            <ListStyled>
                <ItemStyled>
                    <ImageStyled src={professional.image} alt={`Professional Profile Picture ${professional.name}`} />
                </ItemStyled>
                <ItemStyled>
                    <ParagraphNameStyled>{professional.name}</ParagraphNameStyled>
                    <ParagraphStyled>{professional.specialty}</ParagraphStyled>
                </ItemStyled>
                <ItemStyled>
                    <Rating
                        name="simple-controlled"
                        value={professional.note}
                        readOnly={true}
                    />
                </ItemStyled>
            </ListStyled>
        </ContainerStyled>
    )
}

export default Card