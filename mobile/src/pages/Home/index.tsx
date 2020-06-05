import React, { useEffect, useState } from 'react';
import { Feather as Icon } from "@expo/vector-icons";
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';

interface IBGEUFResponse {
  sigla: string
}
interface IBGECityResponse {
  nome: string
}

interface Ufs {
  label: string
  value: string
}

interface Cities {
  label: string
  value: string
}

const Home = () => {
  const [ufs, setUfs] = useState<Ufs[]>([]);
  const [cities, setCities] = useState<Cities[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  const navigation = useNavigation();

  function handleNavigateToPoint(){
    navigation.navigate('Points', {
      uf: selectedUf,
      city: selectedCity
    })
  }

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome').then(response => {
      const ufInitials = response.data.map(function(uf) {
        return {
          label: uf.sigla,
          value: uf.sigla
        }
      });
      setUfs(ufInitials)
    })
  }, [])

  useEffect(() => {
    if(selectedUf === '0'){
      return
    }
    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
      const cityNames = response.data.map(function(city){
        return {
          label: city.nome,
          value: city.nome
        }
      });
      setCities(cityNames);
    })
  }, [selectedUf])

  function handleSelectUf(uf: string){
    setSelectedUf(uf);
  }

  function handleSelectCity(city: string){
    setSelectedCity(city);
  }

  return (
    <ImageBackground
      style={styles.container}
      source={ require('../../assets/home-background.png') }
      imageStyle={{ width:274, height:368 }}
    >
      <View style={styles.main}>
        <Image source={ require('../../assets/logo.png') } />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.containerSelect}>
          <RNPickerSelect
            onValueChange={(value) => handleSelectUf(value)}
            items={ufs}
            placeholder={{label: 'Selecione um estado'}}
          />
        </View>

        <View style={styles.containerSelect}>
          <RNPickerSelect
            onValueChange={(value) => handleSelectCity(value)}
            items={cities}
            placeholder={{label: 'Selecione uma cidade'}}
          />
        </View>
        <RectButton
          style={styles.button}
          onPress={handleNavigateToPoint}
        >
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#FFF" size={24} />
            </Text>
          </View>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  containerSelect:{
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor:'#fff'
  }
});
