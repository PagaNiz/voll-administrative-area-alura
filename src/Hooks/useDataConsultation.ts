import IConsultation from "../types/IConsultation"
import useFetch from "../useFetch"

const useDataConsultation = () => {
    return useFetch<IConsultation[]>({url: 'consultations'})
}

export default useDataConsultation