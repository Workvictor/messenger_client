import { keyMirror } from '../utils';


const types=keyMirror({
  update: null,
}, `chats`);

const chatsUpdate=payload=>({ type: types.update, payload });

const update=data=>dispatch=>dispatch(chatsUpdate(data));

const actions={
  update,
};

export const chats={
  types,
  actions
};