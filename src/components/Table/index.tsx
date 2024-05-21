import { Paper, Table, TableBody, TableContainer, TableHead } from "@mui/material"
import { Fragment } from "react"
import IConsultation from "../../types/IConsultation"
import { CellStyled, LineStyled } from "./styles"

const TableQuery = ({ consultation }: { consultation: IConsultation[] | null }) => {
    const tHead = ["Date", "Time", "Professional", "Specialty", "Patient", "Mode"]
    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="custom-table">
                    <TableHead>
                        <LineStyled>
                            {tHead.map(i => <CellStyled>{i}</CellStyled>)}
                        </LineStyled>
                    </TableHead>
                    <TableBody>
                        {consultation?.map((line) => {
                            return (
                                <LineStyled>
                                    <CellStyled component="th" scope="row">{new Date(line.date).toLocaleDateString()}</CellStyled>
                                    <CellStyled>{line.time}</CellStyled>
                                    <CellStyled>{line.professional[0].name}</CellStyled>
                                    <CellStyled>{line.professional[0].specialty}</CellStyled>
                                    <CellStyled>{line.patient}</CellStyled>
                                    <CellStyled>{line.mode}</CellStyled>
                                </LineStyled>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )
}

export default TableQuery