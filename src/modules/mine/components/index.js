import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as global from '../../../common/global';
import { Actions } from 'react-native-router-flux';
import NavigationBar from "../../../common/navigationBar";

class Mine extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps,nextState){
        
    }
    login(){
        Actions.login();
    }
    render() {
        return (
            <View style={[styles.container]}>
                <NavigationBar title="我的"/>
                {
                    this.props.isLogin?
                    <View style={[styles.headContainer]}>               
                        <Image style={styles.headimg} source={require('../../../resource/images/head-img.jpg')}/> 
                        <View style={styles.info}>
                            <Text style={styles.text}>再见青春</Text>
                            <Text style={[styles.text,{marginTop:10}]}>15877924747@qq.com</Text>
                        </View>
                    </View>:
                    <View style={[styles.headContainer]}>               
                        <Image style={styles.headimg} source={require('../../../resource/images/head-common.png')}/> 
                        <TouchableOpacity onPress={this.login.bind(this)}>
                            <View style={styles.info}>
                                <Text style={styles.text}>登陆 ／ 注册</Text>
                                <Image style={styles.right} source={require('../../../resource/images/arrow-right.png')}/> 
                            </View>
                        </TouchableOpacity>
                    </View>
                }

                <View style={styles.item}>
                    <Image style={styles.item_logo} source={require('../../../resource/images/family.png')}/> 
                    <Text style={[styles.item_text,{flex:1}]}>功能一</Text>
                    <Image style={styles.right} source={require('../../../resource/images/arrow-right.png')}/> 
                </View>     
                <View style={styles.item}>
                    <Image style={styles.item_logo} source={require('../../../resource/images/family.png')}/> 
                    <Text style={[styles.item_text,{flex:1}]}>功能二</Text>
                    <Image style={styles.right} source={require('../../../resource/images/arrow-right.png')}/> 
                </View>    

            </View>   
        )
    }  
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    center:{
        alignItems:"center",
        justifyContent:"center"
    },
    headContainer:{
        backgroundColor:global.mainColor,
        width:global.windowWidth,
        alignItems:"center",
        padding:20,
        paddingTop:0,
        flexDirection: 'row'
    },
    headimg:{
        height:70,
        width:70,
        borderRadius:35,
        resizeMode:"contain"
    },
    info:{
        marginLeft:15,
        flexDirection: 'row',
        alignItems:"center"
    },
    text:{
        fontSize:15,
        color:"#fff"
    },
    right:{
        height:18,
        width:18,
        marginLeft:5
    },
    item:{
        width:global.windowWidth,
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:15,
        paddingRight:15,
        flexDirection: 'row',
        backgroundColor:"#fff",
        borderBottomWidth:1,
        alignItems:"center",
        borderBottomColor:"#eee"
    },
    item_logo:{
        height:25,
        width:25,
        marginRight:15
    },
    item_text:{
        fontSize:16,
        color:"#000"
    }
});

function mapStateToProps(state) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mine);
