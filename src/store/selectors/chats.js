import { createSelector }  from 'reselect';


const items=state=>state.chats.items;
const user_ids=state=>state.chats.user_ids;
const unread=state=>state.chats.unread;

const getItems=createSelector(
  items,
  items=>items
);
const getUser_ids=createSelector(
  user_ids,
  user_ids=>user_ids
);
const getUnread=createSelector(
  unread,
  unread=>unread
);

export const chats={
  getItems,
  getUser_ids,
  getUnread,
};