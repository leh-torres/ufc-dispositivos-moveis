import React, {useState} from 'react';
import { Container, Content, Form, Item, Input, Text} from 'native-base';
import { StyleSheet } from 'react-native';


export default function App() {
  const [nome, setNome] = useState('')

    return(
        <Content style={[styles.formulario]}>
            <Text style={[styles.primeiroTexto]}> Qual o seu nome? </Text>
            <Form>
                <Item>
                    <Input placeholder='Nome'
                    onChangeText={text => setNome(text)}/>
                </Item>
            </Form>
            <Text style={[styles.texto]}> Nome: {nome} </Text>
        </Content>
    );
}

const styles = StyleSheet.create({
  formulario:{
      flex:2,
      paddingTop: 150,
  },
  primeiroTexto:{
      paddingTop:20,
      fontSize: 20,
  },
  texto:{
      paddingTop:20,
      color: 'steelblue',
      textAlign:'center',

  },
})

