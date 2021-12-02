import {createContext} from 'react';

export const initialState = {
  userName: '',
};

var Context;

export default Context = createContext(initialState);
