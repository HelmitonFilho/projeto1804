import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FormularioMedico = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = () => {
    // lógica para enviar o formulário
    console.log(nome, idade, sintomas);
  };

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
          Formulário Médico
        </Text>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16 }}>Nome:</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', padding: 5 }}
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16 }}>Idade:</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', padding: 5 }}
            value={idade}
            onChangeText={setIdade}
            keyboardType="numeric"
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 16 }}>Sintomas:</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', padding: 5 }}
            value={sintomas}
            onChangeText={setSintomas}
            multiline
          />
        </View>

        <Button title="Enviar" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default FormularioMedico;
