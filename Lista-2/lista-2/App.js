import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios'

export default function App() {
  const [books, setBooks] = useState({})
  const [searchBooks, setSearchBooks] = useState('')

  const getBooks = async ()=>{
    console.log(searchBooks)
    const {data} = await axios.get(
      'https://hn.algolia.com/api/v1/search?query={searchBooks}',
      )
    setBooks(data)
    console.log(data)
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput style={styles.input} 
        placeholder='Chave de Busca' 
        value={searchBooks} 
        onChangeText={text =>setSearchBooks(text)}
        />
        <TouchableOpacity style={styles.btn}
          onPress={getBooks}>
            <Text style={styles.btn_txt}>Buscar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.livros}>
        <View>
          <Text style={styles.txt}>Autor: {books.author}</Text>
          <Text style={styles.txt}>Título: {books.title}</Text>
          <Text style={styles.txt}>Url: {books.url}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  livros:{
    backgroundColor:'#DCDCDC',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    height: 120,
    marginTop: 45,
    borderRadius:5,
    padding: 7,
  },
  txt:{
    fontSize: 20,   
  },
  txt_break:{
    flexGrow: '75%'
  },
  input:{
    padding: 5,
    borderRadius: 5,
    marginTop: 55,
    width: 300,
    borderWidth:2,
    borderColor: '#008B8B',
  },
  btn:{
    marginTop: 5,
    padding:3,
    borderRadius: 5,
    height: 30,
    alignItems:'center',
    backgroundColor: '#008B8B'
  },
  btn_txt:{
    color: '#fff',
    fontSize: 17,
  }
});
