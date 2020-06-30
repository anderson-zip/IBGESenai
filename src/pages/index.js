import React, {useState} from 'react';
import {View, Text, Image,KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import Styles from './styles';
import Logo from '../assets/logo.png';

import IbgeController from '../controllers/ibgeController';

export default function Home({navigation}){
    const [name,setName] = useState('');
    const [year,setYear] = useState('');
    return(
        <KeyboardAvoidingView style={Styles.container}>
            <View style={Styles.header}>
                <Image source={Logo} />
            </View>
            <View style={Styles.body}>             
                <Text style={Styles.title}>IBGE nomes</Text> 
                <TextInput placeholder='Digite seu primeiro nome' onChangeText={(name) => {setName(name);}} placeholderTextColor='#000' style={Styles.input} />
                <TextInput keyboardType='numeric' placeholder='Ano de nascimento' onChangeText={(year) => {setYear(year);}} placeholderTextColor='#000' style={Styles.input} />

                <TouchableOpacity style={Styles.button} onPress={() => {IbgeController(name, year, navigation);}} >
                <Text style={Styles.buttonText}>Pesquisar</Text>
            </TouchableOpacity>
            </View>
            
        </KeyboardAvoidingView>
    );
}