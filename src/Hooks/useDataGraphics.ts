import { GraphicProps, IData } from "../components/Graphic/interface"

const useDataGraphics = ({professionals, consultations}: GraphicProps) => {
    let data: Array<IData> = []

    if(professionals && consultations){
        data = professionals.map((professional) => ({
            name: professional.name,
            consultations: consultations.filter((consultation) => 
                consultation.professional.some((prof) => prof.name === professional.name)
            ).length
        }))
    }

    return data
}

export default useDataGraphics