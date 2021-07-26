import * as React from "react";
import { View, Text } from "react-native";
import { connect } from 'react-redux'
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native"

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

    return (
        <View>
            {/*<VictoryLine data={informacoes.informacoes.map((valor)=>{
                return valor.informacoes
            })} />*/}
            <VictoryChart width={350} theme={VictoryTheme.material}>
                <VictoryBar data={informacoes.informacoes.map((valor)=>{
                    return valor.informacoes
                })} y="latestPrice" x="CompanyName" />
            </VictoryChart>
        </View>
    )
}

const mapStateToProps = state => {
    return { 
        informacoes: state,
    }
}

export default connect(mapStateToProps, { changeCompany })(DashBoardAcoes)