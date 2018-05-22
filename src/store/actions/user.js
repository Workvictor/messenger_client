import { keyMirror } from '../utils';


const types=keyMirror({
  signIn: null,
  logout: null,
  update: null,
}, `user`);

const actionSignIn=payload=>({ type: types.signIn, payload });
const actionUpdate=payload=>({ type: types.update, payload });

const signIn=data=>dispatch=>dispatch(actionSignIn(data));
const update=data=>dispatch=>dispatch(actionUpdate(data));

const actions={
  signIn,
  update,
};

export const user={
  types,
  actions
};