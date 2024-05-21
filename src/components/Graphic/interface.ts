import IConsultation from "../../types/IConsultation";
import IProfessional from "../../types/IProfessional";

export interface GraphicProps {
    professionals: IProfessional[] | null,
    consultations: IConsultation[] | null
}

export interface IData {
    name: string,
    consultations: number
}