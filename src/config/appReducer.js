import auth from '../modules/auth/authReducer';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
    auth
    //...其他模块reducer
});
export default appReducer;