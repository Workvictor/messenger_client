import { user }         from './user';
import { getValueProp } from '../utils';


const getActions=getValueProp(`actions`);
const getTypes=getValueProp(`types`);

export const actions={
  ...getActions({
    user
  })
};

export const types={
  ...getTypes({
    user
  })
};