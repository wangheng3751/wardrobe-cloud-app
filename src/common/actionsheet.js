import React, { Component } from 'react';
import {Dimensions,StyleSheet, Text, View,Platform,TouchableOpacity} from 'react-native';
var Modalbox   = require('react-native-modalbox');

class ActionSheet extends Component {
    constructor() {
        super();       
        this.state = {
          isOpen:false
        };
    }
    hide(){
        this.setState({isOpen:false});
    }
    open(){
        this.setState({isOpen:true});
    }
    onSelected(index){
        this.hide();
        this.props.onSelected&&this.props.onSelected(index);
    }
    render() {
        var items=this.props.items;
        return(<Modalbox style={[styles.modal,{height:items.length*40+90}]} backdropOpacity={0.2} position={"bottom"} isOpen={this.state.isOpen} backdropPressToClose={false} swipeToClose={false} backdrop={true} onClose={this.hide.bind(this)}>
                <View style={styles.item_view}>
                    <View style={[styles.item,{height:35}]}>
                    <Text style={{color:'gray',fontSize:12}}>{this.props.title}</Text>
                    </View>
                    {
                        items.map((item,index)=>{
                            return (
                                <TouchableOpacity onPress={()=>{this.onSelected(index)}} key={index}>
                                    <View style={[styles.item,(index==items.length-1)&&{borderBottomWidth:0}]}>
                                        <Text style={styles.text}>{item}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>

                <TouchableOpacity onPress={()=>{this.hide()}}>
                    <View style={styles.cancel}>
                        <Text style={styles.text}>{this.props.cancelText||"取消"}</Text>
                    </View>
                </TouchableOpacity>
            </Modalbox>)

    }
}

var width=Dimensions.get('window').width;
const styles = StyleSheet.create({
    modal:{
        alignItems: 'center', 
        justifyContent: 'flex-start',
        backgroundColor:'transparent',
        paddingLeft:10,
        paddingRight:10,
        width:width
    },
    item_view:{
        borderRadius:10,
        width:width-20,
        backgroundColor:'#fff'
    },
    item:{
        height:40,
        borderBottomWidth:1,
        borderBottomColor:'#e0e0e0',
        width:width-20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontSize:14,
        color:'#0077FF'
    },
    cancel:{
        borderRadius:10,
        backgroundColor:'#fff',
        marginTop:5,
        marginBottom:5,
        height:40,
        //borderBottomWidth:1,
        width:width-20,
        alignItems: 'center', 
        justifyContent: 'center'
    }
});

module.exports = ActionSheet;

