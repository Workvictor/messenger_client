import { user }         from './user';
import { chats }         from './chats';
import { getValueProp } from '../utils';


const getActions=getValueProp(`actions`);
const getTypes=getValueProp(`types`);

export const actions={
  ...getActions({
    user,
    chats
  })
};

export const types={
  ...getTypes({
    user,
    chats
  })
};