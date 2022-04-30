import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import React, { useState } from 'react';
import Display from './componentes/Display';
import Botao from './componentes/botao'
import { Grid, Row , Col} from 'react-native-easy-grid';

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
        <Grid>
          <Col>
            <Row style={styles.display}>
              <Col style={styles.col}></Col>
              <Col style={styles.col}></Col>
              <Col style={styles.col}></Col>
              <Col style={{backgroundColor: '#121012', height: 530}}>
                <Text style={styles.textDisplayOp} numberOfLines={1}>
                  {vTela}
                </Text>
                <Text style={styles.textDisplayRes} numberOfLines={1}>
                  {vRes}
                </Text>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col>
                <Botao label='AC' ac duplo aoClicar={()=>{opera('AC')}}></Botao>
              </Col>
              <Col>
                <Botao label='<' bs duplo aoClicar={()=>{opera('<')}}></Botao>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Botao label='7' aoClicar={()=>{addDigito('7')}}></Botao>
              </Col>
              <Col style={{}}>
                <Botao label='8' aoClicar={()=>{addDigito('8')}}></Botao>
              </Col>
              <Col style={styles.col}>
                <Botao label='9' aoClicar={()=>{addDigito('9')}}></Botao>
              </Col>
              <Col style={styles.col}>
                <Botao label='/' operacao aoClicar={()=>{addDigito('/')}}></Botao>
              </Col>
            </Row>
            
            <Row style={styles.row}>
              <Col style={styles.col}>
                <Botao label='4' aoClicar={()=>{addDigito('4')}}></Botao>
              </Col>
              <Col style={styles.col}>
                <Botao label='5' aoClicar={()=>{addDigito('5')}}></Botao>
              </Col>
              <Col style={styles.col}>
                <Botao label='6' aoClicar={()=>{addDigito('6')}}></Botao>
              </Col>
              <Col style={styles.col}>
                <Botao label='*' operacao aoClicar={()=>{addDigito('*')}}></Botao>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={styles.col}>
                <Botao label='1' aoClicar={()=>{addDigito('1')}}></Botao>
              </Col>
              <Col style={styles.col}>
                <Botao label='2' aoClicar={()=>{addDigito('2')}}></Botao>
              </Col>
              <Col style={styles.col}>
                <Botao label='3' aoClicar={()=>{addDigito('3')}}></Botao>
              </Col>
              <Col style={styles.col}>
                <Botao label='-' operacao aoClicar={()=>{addDigito('-')}}></Botao>
              </Col>
            </Row>

            <Row style={styles.row}>
              <Col style={{width: 182}}>
                <Botao label='0' duplo aoClicar={()=>{addDigito('0')}}></Botao>
              </Col>
              <Col style={styles.col}>
                <Botao label='=' igual aoClicar={()=>{opera('=')}}></Botao>
              </Col>
              <Col style={styles.col}>
                <Botao label='+' operacao aoClicar={()=>{addDigito('+')}}></Botao>
              </Col>
            </Row>

          </Col>

        </Grid>
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
  display:{
    backgroundColor: '#121012', 
    height: 240,
  },
  row:{
    backgroundColor: '#121012', 
    height: 80, 
    paddingTop: 2
  },
  col:{
    backgroundColor: '#121012', 
    height: 230
  },
  textDisplayRes:{
      fontSize: 50,
      color: '#fff',
  },
  textDisplayOp:{
      fontSize: 25,
      color: '#fff',
      paddingTop: 100,
      paddingLeft: 10
  }
});

