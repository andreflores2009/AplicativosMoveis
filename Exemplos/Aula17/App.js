// Importa o React e o hook useState para gerenciamento de estado
import React, { useState } from 'react';

// Importa os componentes visuais básicos do React Native
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

// Função principal do aplicativo (componente funcional)
export default function App() {
  // Estado que armazena o nome digitado pelo usuário
  const [nome, setNome] = useState('');

  // Estado que armazena a lista de contatos
  const [contatos, setContatos] = useState([]);

  // Estado que armazena o próximo ID a ser atribuído (começa em 1)
  const [proximoId, setProximoId] = useState(1);

  // Função que é chamada quando o botão "Adicionar" é pressionado
  const adicionarContato = () => {
    // Ignora se o campo estiver em branco
    if (nome.trim() === '') return;

    // Cria um novo objeto de contato com ID numérico sequencial
    const novoContato = {
      id: proximoId.toString(),  // converte o número em string para usar como key
      nome: nome                 // nome digitado pelo usuário
    };

    // Adiciona o novo contato à lista existente
    setContatos([...contatos, novoContato]);

    // Atualiza o próximo ID para o valor seguinte
    setProximoId(proximoId + 1);

    // Limpa o campo de texto
    setNome('');
  };

  // Estrutura visual do aplicativo
  return (
    <View style={styles.container}>
      {/* Título da aplicação */}
      <Text style={styles.titulo}>Lista de Contatos</Text>

      {/* Campo de entrada de texto */}
      <TextInput
        style={styles.input}
        placeholder="Digite um nome"
        value={nome}
        onChangeText={setNome}  // atualiza o estado nome enquanto o usuário digita
      />

      {/* Botão para adicionar contato */}
      <Button
        title="Adicionar"
        onPress={adicionarContato} // chama a função ao clicar
      />

      {/* Lista dos contatos adicionados */}
      <FlatList
        data={contatos}                         // array de contatos
        keyExtractor={item => item.id}          // define o ID como chave única
        renderItem={({ item }) => (
          // exibe ID e nome do contato
		  <Text style={styles.item}>
            {item.id} - {item.nome}             
          </Text>
        )}
      />
    </View>
  );
}

// Estilos da aplicação (semelhante ao CSS)
const styles = StyleSheet.create({
  container: {
    flex: 1,              // ocupa toda a tela disponível
    padding: 20,          // espaçamento interno
    marginTop: 40         // margem superior
  },
  titulo: {
    fontSize: 24,         // tamanho da fonte do título
    marginBottom: 10      // espaço abaixo do título
  },
  input: {
    borderWidth: 1,       // borda visível
    borderColor: '#ccc',  // cor da borda
    padding: 10,          // espaço interno no campo
    marginBottom: 10      // espaço abaixo do campo
  },
  item: {
    fontSize: 18,         // tamanho do texto de cada item da lista
    marginTop: 10         // espaço entre os itens
  }
});
