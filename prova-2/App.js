import axios from 'axios';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button,FlatList} from 'react-native';
import Rating from './Rating';
import {Content } from 'native-base';

export default function App() {

  const [searchText,setSearchText] = useState('');
  const [valores,setValores] = useState(new Object());

  const getBook = () => {

    axios
    .get('https://hn.algolia.com/api/v1/search?query=' + searchText)
    .then(function (response){
      setValores(Object.values(response.data)[0])
      console.log(Object.values(valores)[0]);
    })
    .catch(function (error){
      console.log(error.message);
    })
    .finally(function(){
      console.log('final do called');
    })

  }


const Item = ({ title,author,url }) => (
  <View style={styles.item}>
    <Text style={styles.title}>Titulo: <Text style={styles.textTitle}>{title}</Text></Text>
    <Text style={styles.title}>Autor: <Text style={styles.textTitle}>{author}</Text></Text>
    <Text style={styles.title}>Url: <Text style={styles.textTitle}>{url}</Text></Text>
    <Content>
          <Rating rating='0' />
    </Content>
  </View>
);

const renderItem1 = ({ item }) => (
  <Item title={item.title} autor={item.author} url={item.url}/>
);



  return (
    <View style={styles.container}>
        <View style={styles.containerSearch}>
          <Text style={styles.textTitle}>Busca de Livros</Text>
          <TextInput style={styles.inputBusca} placeholder='Digite sua pesquisa' onChangeText={texto => setSearchText(texto)}></TextInput> 
          <Button color={'#FFA500'} onPress={getBook} title="Pesquisar"></Button>  
        </View>
        
        <FlatList
          styles={styles.itemLista}
          data = {valores}
          renderItem = {renderItem1}
          keyExtractor={function (item) {
          return item.author + item.title + item.url;
          }
        }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textTitle:{
    fontSize: 16,

  },
  containerSearch: {
    flex: 0,
    backgroundColor: '#fff',
    marginVertical: 50,
    minHeight: 100,
    minWidth: 300,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputBusca:{
    backgroundColor: '#DCDCDC',
    color: '#000',
    width: 300,
    height: 40,
    padding: 5,
    borderRadius: 10,
  },
  itemLista: {
    flex: 0,
    backgroundColor: '#fff', 
    marginHorizontal: 16,
    marginVertical: 8,
  },
  item: {
    flex: 2,
    backgroundColor: '#DCDCDC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
  },
  textTitle:{
    fontSize: 16,
  }
});