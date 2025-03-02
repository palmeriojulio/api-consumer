import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../servicos/api';
import { useNavigation } from '@react-navigation/native';

const Lista = () => {
  const [itens, setItens] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchItens = async () => {
      const response = await api.get('/products');
      setItens(response.data.products);
    };
    fetchItens();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Detalhes', { id: item.id })}>
      <Text style={styles.itemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={itens}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#f8f8f8', // Cor de fundo da lista
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white', // Cor de fundo dos itens
  },
  itemText: {
    fontSize: 16,
    color: '#333', // Cor do texto dos itens
  },
});

export default Lista;