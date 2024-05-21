import IProfessional from "./IProfessional";

export default interface IConsultation extends IProfessional{
    id: number,
    date: string,
    time: string,
    professional: Array<IProfessional>,
    specialty: string,
    patient: string,
    mode: string
}