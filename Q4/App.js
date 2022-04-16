import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function App() {

const buttons = ['AC', '/', '7','8','9','*','4','5','6', '-', 
  '3','2','1','+','0','.', ' = ' ]

const[currentNumber, setCurrentNumber] = useState('')
const[lastNumber, setLastNumber] = useState('')

  function calculator(){
    const splitNumbers = currentNumber.split(" ")
    const operator = splitNumbers[1]
    console.log(splitNumbers)

    if(operator === '*'){
      setCurrentNumber((parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString())
    }
    if(operator === '/'){
      setCurrentNumber((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString())
    }
    if(operator === '+'){
      setCurrentNumber((parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString())
    }
    if(operator === '-'){
      setCurrentNumber((parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString())
    }
  }

  function hadleInput(buttonPressed){
    if(buttonPressed === '*' | buttonPressed === '/' | buttonPressed === '+' | buttonPressed === '-'){
      setCurrentNumber(currentNumber + ' ' + buttonPressed + '')
      return
    }
    if(buttonPressed === '.'){
      setCurrentNumber(currentNumber + buttonPressed)
      return
    }
    if(buttonPressed === 'AC'){
      setLastNumber("")
      setCurrentNumber("")
      return
    }
    if(buttonPressed === '='){
      setLastNumber(currentNumber + ' = ')
      calculator()
      return
    }
    setCurrentNumber(currentNumber + buttonPressed)
  }

  return (
    <View>
      <View style={styles.result}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button)=>{
          if(button === 'AC'){
           return (
            <TouchableOpacity key={button} style={styles.buttonAC} onPress={() => hadleInput(button)}>
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
           )
          } if(button === '/'| button === '*'| button === '-'| button === '+'){
            return (
             <TouchableOpacity key={button} style={styles.operators} onPress={() => hadleInput(button)}>
               <Text style={styles.textButton}>{button}</Text>
             </TouchableOpacity>
            )
          } if(button === ' = '){
            return (
             <TouchableOpacity key={button} style={styles.buttonEquals} onPress={() => hadleInput(button)}>
               <Text style={styles.textButton}>{button}</Text>
             </TouchableOpacity>
            )
          }  if(button === '0'){
            return (
             <TouchableOpacity key={button} style={styles.button0} onPress={() => hadleInput(button)}>
               <Text style={styles.textButton}>{button}</Text>
             </TouchableOpacity>
            )
          } else{
            return (<TouchableOpacity key={button} style={styles.button} onPress={() => hadleInput(button)}>
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
            )
          }
        }
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  result:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5',
  },
  buttons:{
    flexDirection:'row',
    flexWrap: 'wrap',
  },
  operators:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
    minHeight: 70,
    minWidth: 80,
    borderWidth:1,
    borderRadius:5,
    borderColor: '#fff'
  },
  button:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    minHeight: 70,
    minWidth: 80,
    borderWidth:1,
    borderRadius:5,
    borderColor: '#fff'
  },
  buttonAC:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#98FB98',
    minHeight: 70,
    minWidth: 260,
    borderWidth:1,
    borderRadius:5,
    borderColor: '#fff'
  },
  buttonEquals:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
    minHeight: 70,
    minWidth: 80,
    borderWidth:1,
    borderRadius:5,
    borderColor: '#fff'
  },
  button0:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    minHeight: 70,
    minWidth: 170,
    borderWidth:1,
    borderRadius:5,
    borderColor: '#fff'
  },
  textButton:{
    color:'#5b5b5b',
    fontSize:25,
  },
  resultText:{
    fontWeight:'100',
    fontSize: 80,
    margin: 10,
    alignSelf: 'flex-end',
  },
  historyText:{
    fontSize: 22,
    marginBottom:0,
    marginLeft: 10, 
    alignSelf: 'flex-end',
  },
});
