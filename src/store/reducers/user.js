import { types } from '../actions';


const initialState={
  id: null,
  name: ``,
  chats_ids: [],
};

export const user=(state=initialState, action)=>{
  const { type, payload }=action;
  switch(type){
    case types.user.update:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};