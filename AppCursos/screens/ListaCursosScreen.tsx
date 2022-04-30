import { Box, Card, Column, Row } from 'native-base';
import { useState, useEffect } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text } from 'react-native';
import { Curso, RootTabScreenProps } from '../types';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export const ListaCursosScreen = ({ navigation }: RootTabScreenProps<'Lista'>) => {
  const colorScheme = useColorScheme();
  const [cursos, setCursos] = useState<Array<Curso>>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getCursos = async() => {
    try{
      setLoading(true);
      const response = await axios.get(URL);
      if(response && response.data){
        setCursos(response.data);
      }
    }catch(e : any){
      console.log('Erro ao buscar cursos:', e.response);
    }
    setLoading(false);
  }

  useEffect(() => {
    getCursos();
  }, []);

  const renderCurso = ({ item } : ListRenderItem<Curso>) => (
    <Card style={{...styles.card, backgroundColor: Colors[colorScheme].background}}>
      <Row>
        <Text style={[styles.text, styles.bold]}>Descrição: {item.descricao}</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={[styles.text]}>Codigo: {item.codigo}</Text>
        <Text style={styles.text}>Carga Horária: {item.cargaHoraria}</Text>
      </Row>
      <Row style={styles.row}>
        <Text style={styles.text}>Preço: {item.preco}</Text>
        <Text style={styles.text}>Categoria: {item.categoria}</Text>
      </Row>
    </Card>
  );


  return (
    <FlatList
      style={styles.container}
      data={cursos}
      keyExtractor={(item : Curso) => item._id}
      renderItem={renderCurso}
      refreshing={isLoading}
      onRefresh={getCursos}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  card: {
    flex: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  },
  bold: {
    fontWeight: 'bold',
  },
  row: {
    width: '100%',
    justifyContent: 'space-between'
  }
});
