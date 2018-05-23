import { types } from '../actions';


const initialState={
  items: [],
  user_ids: [],
  unread: [],
};

export const chats=(state=initialState, action)=>{
  const { type, payload }=action;
  switch(type){
    case types.chats.update:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};