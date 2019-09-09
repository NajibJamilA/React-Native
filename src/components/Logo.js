import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

export default class Logo extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Image  style={{width: 120, height: 160}}
          			source={require('../images/logonya.png')}/>
          		<Text style={styles.logoText}>MY IDEA!</Text>	
  			</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
  	marginVertical: 1,
	  fontSize:18,
	  fontStyle: "italic",
	  fontWeight: "bold",
  	color:'#ffffff'
  }
});