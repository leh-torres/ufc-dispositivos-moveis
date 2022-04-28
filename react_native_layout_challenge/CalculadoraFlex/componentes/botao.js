import {StyleSheet, Text, TouchableHighlight, Dimensions} from 'react-native';
import React, { useState } from 'react';

export default props=>{

    const estilosBotoes=[estilos.btn]

    if(props.duplo){
        estilosBotoes.push(estilos.btnDuplo)
    } 
    if(props.igual){
        estilosBotoes.push(estilos.btnIgual)
    }
    if(props.operacao){
        estilosBotoes.push(estilos.btnOp)
    }
    if(props.ac){
        estilosBotoes.push(estilos.btnAc)
    }
    if(props.bs){
        estilosBotoes.push(estilos.btnBs)
    }

    return(
        <TouchableHighlight 
            onPress={props.aoClicar}>
            <Text style={estilosBotoes}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    btn:{
        fontSize: 30,
        height: Dimensions.get('window').width/5,
        width: Dimensions.get('window').width/4,
        padding: 15,
        backgroundColor: 'black',
        color: '#9400D3',
        textAlign: 'center',
        borderRadius:50,
        marginTop: 1
    },
    btnIgual:{
        color:'#9400D3',
    },
    btnOp:{
        color: '#FFF',
        backgroundColor: '#9400D3',
        marginTop: 1, 
    },
    btnAc:{
        color: '#9400D3',
    },
    btnBs:{
        color: '#9400D3',
    },
    btnDuplo:{
        width: Dimensions.get('window').width/2,
    }
})