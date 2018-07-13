import authState from '../modules/auth/authState';

export default function getAppState () {
  const appState = {
    auth: new authState()
    //...其他模块State
  }
  return appState;
}