import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavigationBar from "../../../common/navigationBar";

class DressCollocation extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps,nextState){
        
    }

    render() {
        return (
            <View style={[styles.container]}>
                <NavigationBar title="搭配"/>
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

export default connect(mapStateToProps, mapDispatchToProps)(DressCollocation);
