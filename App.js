import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { useState } from 'react'

export default function App() {
  const [nome, setNome] = useState("Luiz")
  const [input, setInput] = useState("")

  const alterarNome = () => {
    setNome(input)
    setInput("")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o novo nome"
        value={input}
        onChangeText={(texto) => setInput(texto)}
      ></TextInput>

      <TouchableOpacity 
        style={styles.btn}
        onPress={alterarNome} 
      >
        <Text style={styles.btnText}>Alterar Nome</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>{nome}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#22272e"
  },
  titulo: {
    fontSize: 90,
    color: "#4682B4"
  },
  btn: {
    backgroundColor: "#FFA500",
    alignItems: "center",
    justifyContent: "center",
    height: 50
  },
  btnText: {
    color: "#ffffff",
    fontSize: 22
  },
  input: {
    backgroundColor: "#ffffff",
    height: 50
  }
});
