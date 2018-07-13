import React, { Component } from 'react';
import { View, Image, Text, StyleSheet,Dimensions } from 'react-native';
class TabIcon extends Component {
    constructor(props){
        super(props);       
    }

    render(){
        let selected=this.props.focused;
        let data={
            home:{
                title:"搭配",
                icon:!selected?require("../resource/images/match.png"):require("../resource/images/match_selected.png")
            },
            clothes:{
                title:"衣服",
                icon:!selected?require("../resource/images/clothes.png"):require("../resource/images/clothes_selected.png")
            },
            mine:{
                title:"我的",
                icon:!selected?require("../resource/images/mine.png"):require("../resource/images/mine_selected.png")
            }
      }
      let param=data[this.props.navigation.state.key];
      return  <View style={styles.tabbarContainer}>
                <Image style={{ width: 25, height: 25,resizeMode:'contain' }} source={param.icon} />
                <Text style={[styles.tabbarItem,selected&&{color:'#1296db'}]}>{param.title}</Text>
              </View>
    }
}

const styles = StyleSheet.create({
    tabbarContainer:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
      width:Dimensions.get('window').width/4
    },
    tabbarItem:{  
      marginTop:5,    
      textAlign:"center"
    }
});

module.exports = TabIcon;