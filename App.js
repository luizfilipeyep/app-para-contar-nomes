import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, AsyncStorage } from 'react-native'
import { useState, useEffect, useMemo, useRef } from 'react'

export default function App() {
  const [nome, setNome] = useState("Luiz")
  const [input, setInput] = useState("")
  const nomeInput = useRef()

  useEffect(() => {
    async function getStorage() {
      const nomeStorage = await AsyncStorage.getItem("nomes")
      if(nomeStorage !== null){
        setNome(nomeStorage)
      }
    }
    getStorage()
  }, [])

  useEffect (() => {
    async function AsyncStorage() {
      await AsyncStorage.setItem("nomes", nome)
    }
    AsyncStorage()
  }, [nome])

  const alterarNome = () => {
    setNome(input)
    setInput("")
  }

  const novoNome = () => {
    nomeInput.current.focus()
  }

  const letrasNome = useMemo(() => nome.length, [nome])
  console.log(letrasNome)

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o novo nome"
        value={input}
        onChangeText={(texto) => setInput(texto)}
        ref={nomeInput}
      ></TextInput>

      <TouchableOpacity 
        style={styles.btn}
        onPress={alterarNome} 
      >
        <Text style={styles.btnText}>Alterar Nome</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>{nome}</Text>
      <Text style={styles.resultado}>tem {letrasNome} letras.</Text>

      <TouchableOpacity 
        style={styles.btn}
        onPress={novoNome}
      >
        <Text style={styles.titulo}Novo nome></Text>
      </TouchableOpacity>

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
  },
  resultado: {
    color: "white",
    fontSize: 22
  }
});
