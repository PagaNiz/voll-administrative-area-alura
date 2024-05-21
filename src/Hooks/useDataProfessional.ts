import IProfessional from "../types/IProfessional"
import useFetch from "../useFetch"

const useDataProfessional = () => {
    return useFetch<IProfessional[]>({url: 'professionals'})
}

export default useDataProfessional