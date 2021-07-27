import React from 'react'
import { SafeAreaView, Text, View } from "react-native";
import { connect } from 'react-redux'
import styleHome from '../estilos/styleHome';

function InfoDashboard({ informacoes }){
    // imprimindo as informacoes da empresa consultada
    const [data, setData] = React.useState(null)
    if(informacoes && informacoes[0] !== data)
        setData(informacoes[0])                     //informacoes que serao usadas na descricao

    return (
        <SafeAreaView>
            {data ?
                <View style={styleHome.containerInfo}>
                    <Text>Informações da empresa:</Text>
                    <Text>Nome da empresa: {data.informacoes.companyName}</Text>
                    <Text>Símbolo da empresa: {data.informacoes.symbol}</Text>
                    <Text>Latest Price: {data.informacoes.latestPrice}</Text>
                    <Text>High: {data.informacoes.high}</Text>
                    <Text>Low: {data.informacoes.low}</Text>
                </View>
            :
                <View style={styleHome.containerInfo}>
                    <Text>Procure uma empresa pelo símbolo. Ex: aapl = Apple</Text>
                </View>
            }
        </SafeAreaView>
    )
}


const mapStateToProps = state => {
    return { 
        informacoes: state.informacoes
    }
}

export default connect(mapStateToProps)(InfoDashboard)