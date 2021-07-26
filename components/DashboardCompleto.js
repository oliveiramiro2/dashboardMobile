import React from "react";
import { View } from "react-native";

import InfoDashboard from "./InfoDashboard";
import DashBoardAcoes from './DashboardAcoes'

export default function(){

    return(
        <View>
            <InfoDashboard /> 
            <DashBoardAcoes />          
        </View>
    )
}