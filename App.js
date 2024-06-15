import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity  } from 'react-native';



export default function App() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState(null);

  const handlePress = (value) => {
    if (value === 'C') {
      setDisplay('');
      setResult(null);
    } else if (value === '=') {
      try {
        const evalResult = eval(display);
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
    } else {
      setDisplay(display + value);
    }
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
        {result !== null && <Text style={styles.resultText}>{result}</Text>}
      </View>
      <View style={styles.buttonsContainer}>
        {[
          ['C', '+/-', '%', '/'],
          ['7', '8', '9', '*'],
          ['4', '5', '6', '-'],
          ['1', '2', '3', '+'],
          ['0', '.', '=']
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[
                  styles.button,
                  button === '=' && styles.equalsButton,
                  button === '0' && styles.zeroButton
                ]}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#000',
    paddingRight: 20,
    paddingBottom: 20,
  },
  displayText: {
    fontSize: 48,
    color: '#fff',
  },
  resultText: {
    fontSize: 32,
    color: 'grey',
  },
  buttonsContainer: {
    flex: 2,
    backgroundColor: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
  equalsButton: {
    backgroundColor: '#f09a36',
  },
  zeroButton: {
    width: 170,
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
});
