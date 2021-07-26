import React from 'react'
import { View, Text } from "react-native";
import { connect } from 'react-redux'

function InfoDashboard({ informacoes }){
    // imprimindo as informacoes da empresa consultada
    const [data, setData] = React.useState(null)
    if(informacoes && informacoes[0] !== data)
        setData(informacoes[0])                     //informacoes que serao usadas na descricao

    return (
        <View>
            {data ?
                <View>
                    <Text>Nome da empresa: {data.informacoes.companyName}</Text>
                    <Text>Símbolo da empresa: {data.informacoes.symbol}</Text>
                    <Text>Latest Price: {data.informacoes.latestPrice}</Text>
                    <Text>High: {data.informacoes.high}</Text>
                    <Text>Low: {data.informacoes.low}</Text>
                </View>
            :
                <Text>Procure um empresa pelos seu símbolo. Ex: aapl = Apple</Text>
            }
        </View>
    )
}


const mapStateToProps = state => {
    return { 
        informacoes: state.informacoes
    }
}

export default connect(mapStateToProps)(InfoDashboard)