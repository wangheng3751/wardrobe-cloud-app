import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavigationBar from "../../../common/navigationBar";
import * as global from '../../../common/global';
import {  Actions } from 'react-native-router-flux';

class DressCollocationList extends Component {
    _keyExtractor = (item, index) => item.id;
    constructor(props) {
        super(props);
        this.state={
            tags:["我喜欢","秋装","冬装","运动装"],
            clothes:[
                {id:0, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532503526&di=8af023f9f36944c04282f938956380e5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01929258b7df16a801219c77e0f171.jpg%40900w_1l_2o_100sh.jpg",tages:["秋装","冬装","运动装"] },
                {id:1, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532506299&di=a9291e91edde8a408ce9a2e7bccb819c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140910%2F0020033040098348_b.jpg",tages:["我喜欢","秋装","冬装"] },
                {id:2, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532503526&di=8af023f9f36944c04282f938956380e5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01929258b7df16a801219c77e0f171.jpg%40900w_1l_2o_100sh.jpg",tages:["秋装","冬装"] },
                {id:4, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532503526&di=8af023f9f36944c04282f938956380e5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01929258b7df16a801219c77e0f171.jpg%40900w_1l_2o_100sh.jpg",tages:["秋装","冬装","运动装"] },
                {id:5, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532506299&di=a9291e91edde8a408ce9a2e7bccb819c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140910%2F0020033040098348_b.jpg",tages:["我喜欢","秋装","冬装"] },
                {id:6, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532503526&di=8af023f9f36944c04282f938956380e5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01929258b7df16a801219c77e0f171.jpg%40900w_1l_2o_100sh.jpg",tages:["秋装","冬装"] }
            ],
            menu:false,
            checking:false
        }
    }

    componentWillReceiveProps(nextProps,nextState){
        
    }
    dressCollocation(){
        this.setState({menu:false});
        Actions.dressCollocation();
    }
    render() {
        return (
            <View style={[styles.container]}>
                <NavigationBar title="搭配" rightComponents={
                        (<TouchableOpacity onPress={()=>{this.setState({menu:!this.state.menu})}}>
                            <Text style={{color:"#fff",fontSize:20,fontWeight:'600'}}>···</Text>
                        </TouchableOpacity>)
                    }
                />
                <View style={styles.content}>
                    <View style={styles.tagsContainer}>
                        <TouchableOpacity style={styles.tags} onPress={()=>{}}>
                            <Text>全部</Text>
                        </TouchableOpacity>
                        {
                            this.state.tags.map((item,index)=>{
                                return (<TouchableOpacity style={styles.tags} key={index} onPress={()=>{}}>
                                    <Text>{item}</Text>
                                 </TouchableOpacity>)
                            })
                        }
                    </View>
                    <FlatList 
                        style={[{marginTop:10}]}
                        data={this.state.clothes} numColumns={2}
                        keyExtractor={this._keyExtractor}
                        ItemSeparatorComponent={()=>{return (<View style={{height:10}}></View>)}}
                        ListFooterComponent={(<View style={[{height:50},styles.center]}><Text>没有更多了～</Text></View>)}
                        renderItem={({item, separators,index}) => (
                            <TouchableOpacity  onPress={() => {}}>
                                <View style={[{backgroundColor:global.mainColor},index%2==0&&{marginRight:10}]}>
                                    <Image source={{uri:item.picture}} style={styles.clothes}/>
                                    <View style={styles.clothesTags}>
                                        <Text style={styles.tag_text}>我喜欢</Text>
                                        <Text style={styles.tag_text}>秋装</Text>
                                        <Text style={styles.tag_text}>很好</Text>
                                        <Image source={require('../../../resource/images/edit.png')} style={styles.edit}/>
                                    </View>
                                    {
                                        this.state.checking&&
                                        <View style={styles.check_view}>
                                            <Image source={require('../../../resource/images/uncheck-blue.png')} style={styles.check}/>
                                        </View>
                                    }        
                                </View>
                            </TouchableOpacity>
                        )}
                        />
                        {
                            this.state.menu&&
                            <View style={styles.menus}>
                                <TouchableOpacity onPress={ this.dressCollocation.bind(this) }>
                                    <View style={[styles.menu_view,{borderBottomColor:"#fff",borderBottomWidth:1}]}><Text style={styles.tag_text}>添加</Text></View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{this.setState({checking:!this.state.checking})}}>
                                    <View style={styles.menu_view}><Text style={styles.tag_text}>选择</Text></View>
                                </TouchableOpacity>
                            </View>    
                        }
                </View>
            </View>   
        )
    }  
}
const clothesWidth=(global.windowWidth-30)/2;
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    center:{
        alignItems:"center",
        justifyContent:"center"
    },
    content:{
        flex:1,
        padding:10,
        paddingBottom:0,
        backgroundColor:"#fff"
    },
    tagsContainer:{
        padding:10,
        flexDirection: 'row'
    },
    tags:{
        marginRight:10
    },
    clothes:{
        height:200,
        width:clothesWidth
    },
    clothesTags:{
        position:"absolute",
        height:40,
        backgroundColor:"rgba(0,0,0,0.5)",
        width:clothesWidth,
        bottom:0,
        alignItems:"center",
        flexDirection: 'row'
    },
    tag_text:{
        color:"#fff",
        marginLeft:5
    },
    edit:{
        height:20,
        width:20,
        marginLeft:10
    },
    menus:{
        position:"absolute",
        top:0,
        right:0,
        backgroundColor:global.mainColor
    },
    menu_view:{
        padding:10,
        paddingLeft:20,
        paddingRight:20
    },
    check:{
        height:25,
        width:25
    },
    check_view:{
        position:"absolute",
        top:0,
        right:0
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

export default connect(mapStateToProps, mapDispatchToProps)(DressCollocationList);
