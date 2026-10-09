import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarItem = () => {
    if (item.trim() === '') return;

    setLista([...lista, { id: Date.now().toString(), nome: item }]);
    setItem(''); // Limpa o campo de texto
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um novo item..."
          value={item}
          onChangeText={setItem}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemLista}>
            <Text style={styles.textoItem}>{item.nome}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>Nenhum item na lista.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginLeft: 10,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemLista: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  textoItem: {
    fontSize: 16,
  },
  listaVazia: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});
