import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput, View, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DressCollocation extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps,nextState){
        
    }

    render() {
        return (
            <View style={[styles.center,styles.container]}>
                <Text>搭配</Text>
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
