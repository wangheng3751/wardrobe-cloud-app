import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BackHandler,
    StyleSheet,
    Platform
} from 'react-native';
import { connect } from 'react-redux';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux';
import LoginPage from '../modules/auth/components/login';
import DressCollocation from '../modules/dressCollocation/components/index';
import Mine from '../modules/mine/components/index';
import Clothes from '../modules/clothes/components/index';
import TabIcon from '../common/tabIcons';
import * as global from '../common/global';

class AppRouter extends Component {
    static propTypes = {
        dispatch: PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    createReducer(params) {
        const defaultReducer = Reducer(params);
        return (state, action) => {
          this.props.dispatch(action);
          return defaultReducer(state, action);
        };
    }

    onExitApp(){
        BackHandler.exitApp();
        return true;
    }

    render() {
        return (
            <Router onExitApp={this.onExitApp} 
                    createReducer={ this.createReducer.bind(this) }
                    scenes={ scenes }
             >          
            </Router >
        )
    }    
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#fff',
        height:60
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#fff'
    },
    titleStyle: {
        color: 'white'
    },
    navigationBarStyle: {
        backgroundColor:  global.mainColor,
        height: (Platform.OS === 'android') ? 44 : 64
    }
})

const scenes = Actions.create(
    <Scene key="root" hideNavBar={true}>
        <Scene key="login" component={LoginPage} title="登录" hideNavBar={true} />
        <Scene key="tabbar"                
                tabs={true}
                initial
                tabBarPosition="bottom"
                showLabel={false}
                swipeEnabled={false}
                tabBarStyle={styles.tabBarStyle}
                tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                titleStyle={styles.titleStyle}>
                <Scene key="home"
                    hideNavBar={true}
                    component={DressCollocation}
                    icon={TabIcon}
                    titleStyle={styles.titleStyle}/>

                <Scene key="clothes"
                    hideNavBar={true}
                    component={Clothes}      
                    icon={TabIcon}                
                    titleStyle={styles.titleStyle} />

                <Scene key="mine"
                    hideNavBar={true}
                    component={Mine}                           
                    icon={TabIcon}
                    title="我的"
                    navigationBarStyle={styles.navigationBarStyle}
                    titleStyle={styles.titleStyle} />
            </Scene>
    </Scene>
)
export default connect()(AppRouter);