import styled from "styled-components";

export const ContainerStyled = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #FFFFFF;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
`

export const ListStyled = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0;
`

export const ItemStyled = styled.li`
    list-style: none;
`

export const ItemInfoStyled = styled(ItemStyled)`
    flex-grow: 1;
`

export const ImageStyled = styled.img`
    border-radius: 100%;
    width: 100px;
    object-fit: cover;
    height: 100px;
    border: 2px solid var(--azul-claro);
    margin-right: 1em;
`

export const ParagraphNameStyled = styled.p`
    font-weight: 700;
`

export const ParagraphStyled = styled.p`
    margin: .5em 0;
    font-size: 14px;
`