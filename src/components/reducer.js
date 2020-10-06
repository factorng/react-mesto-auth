import React, { useReducer } from 'react';
import api from '../utils/Api';

export default function reducer(state, action) {
  switch (action.type) {
    case 'updUsr':
      return;
      console.log(state);
    default:
      throw new Error('default error');
  }
}
