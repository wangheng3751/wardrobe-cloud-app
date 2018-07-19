import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NavigationBar from "../../../common/navigationBar";
import * as global from '../../../common/global';
import ActionSheet from '../../../common/actionsheet';
import ImagePicker from 'react-native-image-crop-picker';

class DressCollocation extends Component {
    _keyExtractor = (item, index) => item.id;
    constructor(props) {
        super(props);
        this.state={
            tags:["我喜欢","秋装","冬装","运动装"],
            clothes:[
                { id:1, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532506299&di=a9291e91edde8a408ce9a2e7bccb819c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140910%2F0020033040098348_b.jpg" },
                { id:2, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532512287&di=18b6226b76f490b77ce63b86c53d4d83&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.xiaoman.com%2Fstatics%2Fattachment%2Fmerchants%2F1%2Fpictureroom%2Fphotos%2F201709251035459187_big.jpg" },
                { id:4, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531917588854&di=07c97885beae23e34eb1697d338528fe&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fphotoblog%2F1306%2F03%2Fc3%2F21621718_21621718_1370265101845_mthumb.jpg"},
                { id:5, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532506299&di=a9291e91edde8a408ce9a2e7bccb819c&imgtype=jpg&er=1&src=http%3A%2F%2Fpic32.photophoto.cn%2F20140910%2F0020033040098348_b.jpg" },
                { id:6, picture:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532503526&di=8af023f9f36944c04282f938956380e5&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01929258b7df16a801219c77e0f171.jpg%40900w_1l_2o_100sh.jpg" },
                { id:0 }
            ]
        }
    }

    componentWillReceiveProps(nextProps,nextState){
        
    }
    onSelected(index){
        if(index==0){
            this.openCamera();
        }else{
            this.openPicker();
        } 
    }
    openCamera(){
        ImagePicker.openCamera({
            cropping: true,
            width: 600,
            height: 600,
            includeBase64:true,
            compressImageQuality:  0.3,
            compressImageMaxWidth:300,
            compressImageMaxHeight: 300
        }).then(image => {
            
        }).catch(e => { 
            
         });
    }
    openPicker(){
        ImagePicker.openPicker({
            width: 600,
            height: 600,
            cropping: true,
            includeBase64:true,
            cropperCircleOverlay: false,
            compressImageMaxWidth:300,
            compressImageMaxHeight: 300,
            compressImageQuality: 0.3,
            compressVideoPreset: 'MediumQuality'
        }).then(image => {
            
        }).catch(e => {
            
        });
    }
    render() {
        return (
            <View style={[styles.container]}>
                <NavigationBar title="服装搭配" allowLeft={true} rightComponents={
                        (<TouchableOpacity onPress={()=>{ }}>
                            <Text style={{color:"#fff",fontSize:20,fontWeight:'600'}}>···</Text>
                        </TouchableOpacity>)
                    }
                />
                <View style={styles.content}>
                    <FlatList 
                        style={[{marginTop:10}]}
                        data={this.state.clothes} numColumns={2}
                        keyExtractor={this._keyExtractor}
                        ListFooterComponent={(<View style={[{height:50},styles.center]}></View>)}
                        ItemSeparatorComponent={()=>{return (<View style={{height:10}}></View>)}}
                        renderItem={({item, separators,index}) => (
                                item.id>0?
                                <View style={[{backgroundColor:global.mainColor},index%2==0&&{marginRight:10}]}>
                                    <Image source={{uri:item.picture}} style={styles.clothes}/>
                                    <TouchableOpacity onPress={()=>{}} style={styles.deleteView}>
                                        <Image source={require('../../../resource/images/delete.png')} style={styles.delete_img}/>
                                    </TouchableOpacity>
                                </View>
                                :
                                <TouchableOpacity onPress={()=>{ this.refs.actionSheet.open(); }} style={[styles.clothes,styles.center,{borderColor:global.mainColor,borderWidth:1},,index%2==0&&{marginRight:10}]}>
                                    <Text style={{fontSize:80,color:global.mainColor}}>+</Text>
                                </TouchableOpacity>
                        )}
                        />
                </View>
                <ActionSheet items={["拍照","从相册选择"]} title="选择图片"  ref='actionSheet' onSelected={this.onSelected.bind(this)}/>        
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
    clothes:{
        height:200,
        width:clothesWidth
    },
    deleteView:{
        position:"absolute",
        bottom:0,
        right:0
    },
    delete_img:{
        height:25,
        width:25
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
