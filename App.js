import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar
} from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarItem = () => {
    if (item.trim() === '') return;

    setLista([...lista, { id: Date.now().toString(), nome: item }]);
    setItem('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      <Text style={styles.titulo}>🛒 Lista de Compras</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite um novo item..."
          placeholderTextColor="#888"
          value={item}
          onChangeText={setItem}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarItem} activeOpacity={0.8}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => (
          <View style={styles.itemLista}>
            <View style={styles.pontoLaranja} />
            <Text style={styles.textoItem}>{item.nome}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.listaVazia}>Sua lista está vazia.</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 24,
    color: '#FF8C00',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    gap: 10,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#1E1E1E',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#FFF',
  },
  botao: {
    height: 50,
    backgroundColor: '#FF8C00',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 12,
    elevation: 3,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  flatListContent: {
    paddingBottom: 30,
  },
  itemLista: {
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  pontoLaranja: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF8C00',
    marginRight: 12,
  },
  textoItem: {
    fontSize: 16,
    color: '#E0E0E0',
    fontWeight: '500',
  },
  listaVazia: {
    textAlign: 'center',
    color: '#666',
    marginTop: 30,
    fontSize: 15,
  },
});
