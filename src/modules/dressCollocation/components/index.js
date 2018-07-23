import React, { Component } from 'react';
import { StyleSheet, Platform, TextInput, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavigationBar from "../../../common/navigationBar";
import * as global from '../../../common/global';
import {  Actions } from 'react-native-router-flux';
var Modalbox   = require('react-native-modalbox');

class DressCollocationList extends Component {
    _keyExtractor = (item, index) => item.id;
    constructor(props) {
        super(props);
        this.state={
            tags:[
                {id:1,name:"我喜欢",selected:false},
                {id:2,name:"秋装",selected:false},
                {id:3,name:"冬装",selected:false},
                {id:4,name:"运动装",selected:false},
                {id:5,name:"春装",selected:false},
                {id:6,name:"夏装",selected:false}
            ],
            clothes:[
                {id:0, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532503526&di=8af023f9f36944c04282f938956380e5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01929258b7df16a801219c77e0f171.jpg%40900w_1l_2o_100sh.jpg",tages:["秋装","冬装","运动装"] },
                {id:1, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532506299&di=a9291e91edde8a408ce9a2e7bccb819c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140910%2F0020033040098348_b.jpg",tages:["我喜欢","秋装","冬装"] },
                {id:2, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532503526&di=8af023f9f36944c04282f938956380e5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01929258b7df16a801219c77e0f171.jpg%40900w_1l_2o_100sh.jpg",tages:["秋装","冬装"] },
                {id:4, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532503526&di=8af023f9f36944c04282f938956380e5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01929258b7df16a801219c77e0f171.jpg%40900w_1l_2o_100sh.jpg",tages:["秋装","冬装","运动装"] },
                {id:5, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532506299&di=a9291e91edde8a408ce9a2e7bccb819c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140910%2F0020033040098348_b.jpg",tages:["我喜欢","秋装","冬装"] },
                {id:6, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532503526&di=8af023f9f36944c04282f938956380e5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01929258b7df16a801219c77e0f171.jpg%40900w_1l_2o_100sh.jpg",tages:["秋装","冬装"] }
            ],
            menu:false,
            checking:false,
            isTagsModalOpen:false //
        }
    }

    componentWillReceiveProps(nextProps,nextState){
        
    }
    dressCollocation(){
        this.setState({menu:false});
        Actions.dressCollocation();
    }
    hideTagsModal(){
        this.setState({isTagsModalOpen:false});
    }
    showTagsModal(){
        this.setState({isTagsModalOpen:true});
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
                                    <Text>{item.name}</Text>
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
                            
                                <View style={[{backgroundColor:global.mainColor},index%2==0&&{marginRight:10}]}>
                                    <TouchableOpacity  onPress={() => {this.dressCollocation()}}>
                                        <Image source={{uri:item.picture}} style={styles.clothes}/>
                                    </TouchableOpacity>
                                    <View style={styles.clothesTags}>
                                        <Text style={styles.tag_text}>我喜欢</Text>
                                        <Text style={styles.tag_text}>秋装</Text>
                                        <Text style={styles.tag_text}>很好</Text>
                                        <TouchableOpacity  onPress={() => {this.showTagsModal()}}>
                                             <Image source={require('../../../resource/images/edit.png')} style={styles.edit}/>
                                        </TouchableOpacity>
                                    </View>
                                    {
                                        this.state.checking&&
                                        <View style={styles.check_view}>
                                            <Image source={require('../../../resource/images/uncheck-blue.png')} style={styles.check}/>
                                        </View>
                                    }        
                                </View>
                            
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

                <Modalbox style={[styles.modal]} backdropOpacity={0.2} position={"center"} isOpen={this.state.isTagsModalOpen} backdropPressToClose={false} swipeToClose={false} backdrop={true} onClose={this.hideTagsModal.bind(this)}>
                    <View style={[styles.tagsView]}>
                        <View style={styles.titleView}>
                            <Text style={styles.modalTitle}>修改标签</Text>
                        </View>
                        <FlatList 
                            style={{paddingLeft:10}}
                            data={this.state.tags} numColumns={3}
                            keyExtractor={this._keyExtractor}
                            renderItem={({item}) => (
                                <TouchableOpacity  onPress={() => {}}>
                                    <View style={styles.checkView}>
                                        <Image source={require('../../../resource/images/uncheck-blue.png')} style={styles.check}/>
                                        <Text>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                        <View style={styles.btnView}>
                            <TouchableOpacity style={[styles.btnCommon,styles.cancelBtn]}  onPress={this.hideTagsModal.bind(this)}>
                                <Text>取消</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={[styles.btnCommon,styles.okBtn]} onPress={this.hideTagsModal.bind(this)}>
                                <Text style={{color:"#fff"}}>确定</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modalbox>

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
    },
    modal:{
        alignItems: 'center', 
        justifyContent: 'flex-start',
        backgroundColor:'transparent',
        paddingLeft:10,
        paddingRight:10,
        height:200
    },
    tagsView:{
        backgroundColor:"#fff",
        width:global.windowWidth*0.8,
        height:200
    },
    titleView:{
        padding:8,
        backgroundColor:global.mainColor
    },
    modalTitle:{
        textAlign:'center',
        color:"#fff"
    },
    checkView:{
        marginTop:10,
        flexDirection: 'row',
        alignItems:"center",
        width:(global.windowWidth*0.8-10)/3
    },
    btnView:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom:10
    },
    btnCommon:{
        width:60,
        alignItems:"center",
        padding:5,
        borderRadius:5
    },
    cancelBtn:{
        borderColor:global.mainColor,
        borderWidth:1,
        marginRight:20,
    },
    okBtn:{
        backgroundColor:global.mainColor
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
