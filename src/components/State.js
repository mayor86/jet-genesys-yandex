export default class State {
  constructor(state){
    this._state = state;
  }

  setState(name, value){
    this._state[name] = value;
  }

  getState(name) {
    return this._state[name];
  }
}