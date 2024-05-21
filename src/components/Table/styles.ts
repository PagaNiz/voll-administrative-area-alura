import styled from "@emotion/styled";
import { TableCell, TableRow, tableCellClasses } from "@mui/material";


export const CellStyled = styled(TableCell)(()=> ({
    [`&.${tableCellClasses.head}`]: {
        color: 'var(--azul-escuro)',
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

export const LineStyled = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: 'right'
    }
}))