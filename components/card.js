import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';




class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        index: 0,
        setIndex: 0,
      };
    }

  
    componentDidMount() {
      fetch("https://dog.ceo/api/breeds/image/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.message
            });
}
          ,
         
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }            //</View><Image style={styles.images} source={items}/>
    
    

    render() {
      const { error, isLoaded, items,  } = this.state;
      if (error) {
        return <View>Błąd: {error.message}</View>;
      } else if (!isLoaded) {
        return <Text>Ładowanie...</Text>;
      } else {

        const {container, card, cardImage, textLeft, textRight} = styles;

        return (
          <View style={container}>
            <View style={card}>
           
                <Image source={items} style={cardImage}/>


            <View>
              <Text style={textLeft}>Test, 10</Text>
              <Text style={textRight}>1 Connection</Text>
            </View>
            </View>
          </View>
        );
      }
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    card:{
      width: 300,
      height: 300,
      padding: 10

    },

    cardImage:{
      height: 260,
      borderRadius: 30
    },

    textLeft:{
      position: 'absolute',
      left: 0,
      top: 0,
      fontSize: '2rem'
    },

    textRight:{
      position: 'absolute',
      right: 0,
      top: 0,
    },

    image: {
        width: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    images: {
        height: 400,
        width: 300,
        borderRadius: 30,

    }

  });

  export default Card