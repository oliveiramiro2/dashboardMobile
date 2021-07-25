export const changeSymbol = (simbolo) => {
    // construindo a funcao que vai trocar os valores do reducer
    const payload = simbolo

    return {
        type: "TROCA_SIMBOLO",
        payload
    }   
}