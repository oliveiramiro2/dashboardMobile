import * as React from "react";
import { View, Text } from "react-native";
import { connect } from 'react-redux'

import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts'
import { changeCompany } from './../store/actions/TrocaEmpresa'

export let intervalo = null                             // var p/ receber o setInterval e para-lo caso necessario

function DashBoardAcoes({ informacoes, changeCompany }){

    React.useEffect(()=> {                              // setInterval para deixar o dashboard interativo
        intervalo = setInterval(()=>{
            if(informacoes.simbolo.simbolo)
                changeCompany(
                    `https://cloud.iexapis.com/v1/stock/${informacoes.simbolo.simbolo}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`
                )
        }, 7000)
    }, [informacoes.simbolo.simbolo, changeCompany])
    console.log(informacoes.informacoes)
    return (
        <View>
            <Text>Dashboard</Text>
            <LineChart width={700} height={400} data={informacoes.informacoes.map((valor)=>{
                return valor.informacoes
            })}>
                <XAxis dataKey="companyName"/>
                <YAxis />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="latestPrice" stroke="#ff0000" />
                <Line type="monotone" dataKey="high" stroke="#1a1aff" />
            </LineChart>           
        </View>
    )
}

const mapStateToProps = state => {
    return { 
        informacoes: state,
    }
}

export default connect(mapStateToProps, { changeCompany })(DashBoardAcoes)