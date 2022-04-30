import { Button, FormControl, Input, Text, WarningOutlineIcon } from 'native-base';
import { useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { View } from '../components/Themed';
import axios from 'axios';

const URL = 'http://localhost:3200/api/contatos'

export const ContatoFormScreen = ({ navigation }) => {

  const [nome, setNome] = useState('');
  const [isNomeValido, setNomeValido] = useState(true);
  const [email, setEmail] = useState('');
  const [isEmailValido, setEmailValido] = useState(true);
  const [assunto, setAssunto] = useState('');
  const [isAssuntoValido, setAssuntoValido] = useState(true);

  const limpar = () => {
    setNome(''),
    setNomeValido(true);
    setEmail(''),
    setEmailValido(true);
    setAssunto(''),
    setAssuntoValido(true);
  }

  const alteraNome = (texto) => {
    setNome(texto);
    if (texto && texto.length > 2) {
      return setNomeValido(true);
    }
    setNomeValido(false);
  }

  const alteraEmail = (texto) => {
    setEmail(texto);
    if (texto && texto.length >= 5 && texto.includes('@') && texto.includes('.')) {
      return setEmailValido(true);
    }
    setEmailValido(false);
  }

  const alteraAssunto = (texto) => {
    setAssunto(texto);
    if (texto && texto.length > 10) {
      return setAssuntoValido(true);
    }
    setAssuntoValido(false);
  }

  const enviarContato = async() => {
    try{
      const body = {
        data: Date(),
        nome: nome,
        email: email,
        assunto : assunto
      }

      await axios.post(URL,body);
      navigation.navigate('Lista')

      // Alert.alert('Obrigado pelo envio', 'Recebemos sua solicitação, nosso time entrará em contato o mais breve possível.',
      // [
      //   {text: 'Retornar para home', onPress: () => navigation.navigate('Lista')},
      //   {text: 'Cancelar', onPress: () => limpar()},
      // ]);
    }catch(e){
      console.log('Ocorreu erro ao salvar contato:', e);
    }
  }

  return (
    <View style={styles.container}>
      <FormControl isInvalid={!isNomeValido}>
        <FormControl.Label>Nome</FormControl.Label>
        <Input placeholder="Informe seu nome"
          value={nome}
          onChangeText={alteraNome}
        />
        {!isNomeValido && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Nome inválido
        </FormControl.ErrorMessage>}
      </FormControl>
      <FormControl isInvalid={!isEmailValido}>
        <FormControl.Label>Email</FormControl.Label>
        <Input placeholder="Informe seu email"
          value={email}
          onChangeText={alteraEmail}
        />
        {!isEmailValido && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Email inválido
        </FormControl.ErrorMessage>}
      </FormControl>
      <FormControl isInvalid={!isAssuntoValido}>
        <FormControl.Label>Mensagem</FormControl.Label>
        <Input placeholder="Diga-nos como podemos te ajudar"
          value={assunto}
          onChangeText={alteraAssunto}
          style={styles.area}
        />
        {!isAssuntoValido && <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Mensagem inválido
        </FormControl.ErrorMessage>}
      </FormControl>
      <Button disabled={!isNomeValido || !isEmailValido || !isAssuntoValido 
          || !nome || !email || !assunto}
        style={styles.button}
        onPress={enviarContato}>
          Enviar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  area: {
    height: 200
  },
  button: {
    width: '100%',
    marginTop: 20,
  }
});
