import React from "react";
import { TextInput, Button, KeyboardAvoidingView } from "react-native";
import { connect } from 'react-redux'

import { changeCompany } from './../store/actions/TrocaEmpresa'
import { changeSymbol } from './../store/actions/TrocaSimbolo'
import { intervalo } from './DashboardAcoes'
import styleHome from './../estilos/styleHome'

let choice = 0

function HeaderDashboard({ simbolo, changeCompany, changeSymbol }){
    //capturando o simbolo da empresa com um hook
    const [ symbol, setSymbol ] = React.useState({symbol: ''})      // criando o hook

    function GetInputValue(e){
        setSymbol({symbol: e})                         // capturando a informacao
    }

    function SetCompanyInformation(e){
        e.preventDefault()                                          // parando o refresh da pagina e chamando a funcao
        if(symbol.symbol === simbolo){                              // que troca as informações da empresa
            choice = 0                                              //if para verificar se vai concatenar ou
        }else{                                                      //excluir o atual array de informacao
            choice = 1
            clearInterval(intervalo)                                // pararando a setInterval do dashboard
            changeSymbol(symbol.symbol)                             //trocando o simbolo no reducer e att pag                              
            changeCompany(                                          //renderizando a nova empresa na tela
                `https://cloud.iexapis.com/v1/stock/${symbol.symbol}/quote/?token=pk_c778b6dbd2154d6fa15043568d469931`,
                choice
            )
        }
    }

    return(
        <KeyboardAvoidingView  style={styleHome.containerBusca}>            
            <TextInput
                style={styleHome.inputSearch}
                onChangeText={ GetInputValue } 
                value={symbol.symbol} 
                keyboardType='web-search'               
            />
            <Button
                onPress={ SetCompanyInformation }
                title="Pesquisar"
            />            
        </KeyboardAvoidingView>
    )
}


const mapStateToProps = state => {
    return { simbolo: state.simbolo }
}

export default connect(mapStateToProps, { changeCompany, changeSymbol })(HeaderDashboard)