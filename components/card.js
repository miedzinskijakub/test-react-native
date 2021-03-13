import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';


class Card extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://dog.ceo/api/breed/akita/images/random")
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
    }
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <View>Błąd: {error.message}</View>;
      } else if (!isLoaded) {
        return <Text>Ładowanie...</Text>;
      } else {
        console.log(items)

        return (
          <View style={styles.image}>
            <Image style={styles.images} source={items}/>
          </View>
        );
      }
    }
  }

  const styles = StyleSheet.create({
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