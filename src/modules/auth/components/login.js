import React, { Component } from 'react';
import { Platform,StyleSheet, StatusBar, TextInput, View, Dimensions, Text,ImageBackground, Image, TouchableOpacity,TouchableWithoutFeedback } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../authActions';
import * as global from '../../../common/global';
import { Actions } from 'react-native-router-flux';

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps,nextState){
        if(nextProps.isLogin){
            alert("登录成功");
        }
    }

    render() {
        return (
            <ImageBackground source={require('../../../resource/images/login-background.jpeg')} resizeMode='stretch' style={[styles.container]}>
                <StatusBar backgroundColor="#1296db" barStyle="light-content" translucent={false} />               
                <View style={styles.head}>
                    <TouchableWithoutFeedback onPress={Actions.pop}>
                        <View style={styles.back_view}>
                            <Image source={require('../../../resource/images/allow-left.png')} style={styles.left}/>
                            <Text style={styles.back}>返回</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={styles.back}>注册</Text>
                </View>
                
                <View style={[styles.login_area,styles.center]}>
                    <Image source={require('../../../resource/images/logo.png')} style={styles.logo}/>
                    <TextInput placeholder='请输入您的用户名' style={styles.input}/>
                    <TextInput placeholder='请输入您的密码' secureTextEntry={true} style={styles.input}/>
                    <TouchableOpacity style={[styles.btn,styles.center]} onPress={this.props.onLogin}>
                        <Text style={styles.text}>登录</Text>
                    </TouchableOpacity>
                    <View style={styles.forgot}>
                        <Text style={styles.forgot_text}>忘记密码 ？</Text>
                    </View>
                    <View style={styles.wechat_login_view}>
                        <Image source={require('../../../resource/images/wechat-login.png')} style={[styles.wechat,{marginRight:30}]}/>
                        <Image source={require('../../../resource/images/qq-login.png')} style={styles.wechat}/>
                    </View>
                </View>
                
            </ImageBackground>
        )
    }  
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    head:{
        width:width,
        flexDirection: 'row',
        alignItems: 'center',
        padding:20
    },
    left:{
        height:25,
        width:25
    },
    back_view:{
        flexDirection: 'row',
        flex:1,
        alignItems: 'center'
    },
    back:{
        color:"#fff"
    },
    logo:{
        width:80,
        height:80,
        marginBottom:50
    },
    login_area:{
        width:width*0.8,
        backgroundColor:"#fff",
        borderRadius:10,
        paddingTop:20,
        paddingBottom:20,
        marginTop:30
    },
    center:{
        alignItems: 'center',
        justifyContent:"center"
    },
    container: {
        height:height,
        width:width,
        paddingTop:(Platform.OS === 'android') ? 0 : 20,
        alignItems: 'center'
    },
    input:{
        height:30,
        width:width*0.6,
        padding:0,
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:global.mainColor,
        paddingLeft:20,
        marginBottom:10
    },
    btn:{
        width:width*0.6,
        backgroundColor:global.mainColor,
        height:32,
        marginTop:30,
        marginBottom:10,
        borderRadius:8
    },
    forgot:{
        width:width*0.6,
        alignItems: 'flex-end'
    },
    text:{
        color:"#fff",
        fontSize:16
    },
    wechat_login_view:{
        flexDirection: 'row',
        marginTop:15,
        paddingTop:15,
        width:width*0.8,
        borderTopWidth:1,
        justifyContent: 'center',
        borderTopColor:"#bfe2ed"
    },
    wechat:{
        height:40,
        width:40
    },
    forgot_text:{
        color:global.mainColor,
    }
});

function mapStateToProps(state) {
    return {
        isLogin:state.auth.isLogin
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
