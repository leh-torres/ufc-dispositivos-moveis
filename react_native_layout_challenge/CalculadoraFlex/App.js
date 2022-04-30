import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import React, { useState } from 'react';
import Display from './componentes/Display';
import Botao from './componentes/botao'

let estados={
  valorTela:'',
  resultado:0,
  operado:false,
  ponto:false 
}

export default function App() {
  
  const[vTela, setVTela]= useState(estados.valorTela)
  const[vRes, setVRes]=useState(estados.resultado)
  
  const addDigito=(d)=>{

    if((d == '+' || d == '-' || d == '/' || d === '*') && estados.opera){
      estados.valorTela = estados.resultado
      estados.resultado = 0
      alert(d)
    }

    estados.valorTela += d 
    setVTela(estados.valorTela)
    setVRes(estados.resultado)
    estados.operado = false
  }

  const limparTela=()=>{
    estados={
      valorTela:'',
      resultado:0,
      operado:false,
      ponto:false 
    }
    setVTela(estados.valorTela)
    setVRes(estados.resultado)
  }

  const opera=(d)=>{
    if(d == 'AC'){
      limparTela()
      return
    }
    if(d == '<'){
      const vt=vTela.substring(0, (vTela.length-1))
      estados.valorTela =  vt
      setVTela(vt)
      return
    }
    try {
      estados.resultado=eval(vTela)
      estados.operado=true
      setVRes(estados.resultado)
    } catch (error) {
      estados.resultado='Erro'
      estados.operado=true
      setVRes(estados.resultado)
    }
  }

  return (
      <SafeAreaView style={styles.container}>
        <Display valor={vTela} res={vRes}/>
        <View style={styles.botoes}>
            <Botao label='AC' ac duplo aoClicar={()=>{opera('AC')}}></Botao>
            <Botao label='<' bs duplo aoClicar={()=>{opera('<')}}></Botao>
            <Botao label='7' aoClicar={()=>{addDigito('7')}}></Botao>
            <Botao label='8' aoClicar={()=>{addDigito('8')}}></Botao>
            <Botao label='9' aoClicar={()=>{addDigito('9')}}></Botao>
            <Botao label='/' operacao aoClicar={()=>{addDigito('/')}}></Botao>
            <Botao label='4' aoClicar={()=>{addDigito('4')}}></Botao>
            <Botao label='5' aoClicar={()=>{addDigito('5')}}></Botao>
            <Botao label='6' aoClicar={()=>{addDigito('6')}}></Botao>
            <Botao label='*' operacao aoClicar={()=>{addDigito('*')}}></Botao>
            <Botao label='1' aoClicar={()=>{addDigito('1')}}></Botao>
            <Botao label='2' aoClicar={()=>{addDigito('2')}}></Botao>
            <Botao label='3' aoClicar={()=>{addDigito('3')}}></Botao>
            <Botao label='-' operacao aoClicar={()=>{addDigito('-')}}></Botao>
            <Botao label='0' duplo aoClicar={()=>{addDigito('0')}}></Botao>
            <Botao label='=' igual aoClicar={()=>{opera('=')}}></Botao>
            <Botao label='+' operacao aoClicar={()=>{addDigito('+')}}></Botao>
            
        </View>

      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#121012'
  },
  botoes:{
    flexDirection:'row',
    flexWrap:'wrap',  
  }
});
