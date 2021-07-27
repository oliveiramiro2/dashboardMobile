import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#ddd",
    },
    containerBusca:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '95%',
        margin: 5,
        backgroundColor: '#fff'
    },
    inputSearch: {
        borderColor: '#000',
        borderRadius: 3,
        borderWidth: 2,
        backgroundColor: "#fff",
        width: '70%',
        height: 35,
    },
    containerInfo: {
        backgroundColor: '#fff',
        padding: 5,
        marginBottom: 10
    },
    containerGrafico: {
        backgroundColor: '#eef'
    }, 
    image: {
        height: 180,
        resizeMode: 'contain'
    },
})