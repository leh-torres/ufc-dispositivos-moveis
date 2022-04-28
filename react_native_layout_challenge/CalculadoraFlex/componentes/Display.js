import {StyleSheet, Text, TouchableHighlight, View, ColorPropType} from 'react-native';
import React, { useState } from 'react';

export default props=>{
    return(
        <View style={estilos.diplay}>
            <Text style={estilos.textDisplayOp} numberOfLines={1}>
                {props.valor}
            </Text>
            <Text style={estilos.textDisplayRes} numberOfLines={1}>
                {props.res}
            </Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    diplay:{
        flex: 1,
        padding:20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#121012',
        width: '100%',
    },
    textDisplayRes:{
        fontSize: 50,
        color: '#fff',
    },
    textDisplayOp:{
        fontSize: 25,
        color: '#fff',
    }
})