import { doRequestCompany } from './../../api'

export const changeCompany = (url, troca = 0) => {
    // construindo a funcao que vai trocar os valores do reducer
    const payload = doRequestCompany(url)

    if(troca === 1){
        return {
            type: "APAGA_ARRAY",
            payload
        }   
    }
    return {
        type: "ATT_EMPRESA",
        payload
    } 
}