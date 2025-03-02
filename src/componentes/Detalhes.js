import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import api from '../servicos/api';

const Detalhes = ({ route }) => {
  const { id } = route.params;
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await api.get(`/products/${id}`);
      setItem(response.data);
    };
    fetchItem();
  }, [id]);

  if (!item) {
    return <Text style={styles.loading}>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      {/* Outros detalhes */}
      <Text style={styles.price}>Preço: ${item.price}</Text>
      <Text style={styles.brand}>Marca: {item.brand}</Text>
      <Text style={styles.category}>Categoria: {item.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    color: '#555',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#007bff',
  },
  brand: {
    fontSize: 16,
    marginBottom: 5,
    color: '#777',
  },
  category: {
    fontSize: 16,
    marginBottom: 5,
    color: '#777',
  },
  loading:{
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  }
});

export default Detalhes;