import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import Logo from './components/Logo.js';
import Test from './components/Test.js';
import Styles from './styles/Styles.js';

export default function App() {

  return (
    <SumView />
  );
}

function SumView(){
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  //Calculate sum for two integers
  //Add all the necessary event handling for calculating the sum when pressing button
  //You may assure the number format in calculation using e.g. Number(num1)

  return (
    <View style={Styles.container}>
      <Text>Number 1:</Text>
      <TextInput 
        keyboardType='number-pad' 
        value={num1} 
        style={Styles.textInput}
      />
      <Text>Number 2:</Text>
      <TextInput 
        keyboardType='number-pad' 
        value={num2}
        style={Styles.textInput}
      />
      <Button title='Sum' />
      <Text>Sum is {sum}</Text>
    </View>
  );
}

/**
 * Create euros to pounds converter
 */
function CurrencyView(){
  const [euros, setEuros] = useState(0);
  const [pounds, setPounds] = useState(0);

  //JS uses . in decimal numbers.
  //You may replace comma given in UI with dot 
  //using e.g. let withoutComma = value.replace(',','.')

  //You may round the result to specific number of decimals by using e.g. result.toFixed(2) 

  return (
    <View>

    </View>
  );
}