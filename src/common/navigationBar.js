import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
    View,
    Text,
    TouchableWithoutFeedback,
    StatusBar,
    Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';

class NavigationBar extends Component {
    constructor() {
        super();        
    }
    componentDidMount() { 

    }

    componentWillUnmount() {
        
    } 
    onBack(){
        if(!this.props.allowLeft) return;
        if(this.props.onBack){
            this.props.onBack();
        }else{
            Actions.pop();
        }
    }
    render() {
        return (
           <View>
                <StatusBar backgroundColor="#1296db" barStyle="light-content" translucent={false} />
                <View style={[styles.navbar,styles.center]}>
                    <TouchableWithoutFeedback onPress={this.onBack.bind(this)}>
                        <View style={[styles.button,{alignItems: 'flex-start'}]}>
                            {
                                this.props.allowLeft&&<Image source={require('../resource/images/allow-left.png')} style={styles.left}/>
                            }    
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={{flex:1}}>
                        <Text style={[styles.text,{fontSize:18,color:"#fff"}]}>{this.props.title}</Text>
                    </View>    
                    <View style={[styles.button,{alignItems: 'flex-end'}]}>
                        {this.props.rightComponents}
                    </View>           
                </View>
            </View>
        );
    }
}

var barHeight=(Platform.OS === 'android') ? 44 : 64;
const styles = StyleSheet.create({  
    navbar:{
        paddingTop:(Platform.OS === 'android')?0:20,
        height: barHeight,
        backgroundColor: "#1296db",
        flexDirection: 'row',
        paddingRight:10,
        paddingLeft:10
    },
    button:{
         height: 44,
         width:80,
         justifyContent: 'center'
    },
    center:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        textAlign:'center',
        textAlignVertical:'center'
    },
    left:{
        height:25,
        width:25
    }
});

module.exports = NavigationBar;