import styled from "styled-components";
import { TitleProps } from "./interfaces";

export const SpanStyled = styled.span<TitleProps>`
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 25px;
    height: 25px;
    background-image: ${props => props.image ? `url(${props.image})`: 'none'};
`

export const TitleStyled = styled.h2`
    color: var(--azul-claro);
`

export const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`