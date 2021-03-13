import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SvgComponent from './logo'

export default function Header() {
    const {container, logo} = styles;
  return (
    <View style={container}>
        <SvgComponent style={logo}/>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{
        marginTop: 10,
    }

  });