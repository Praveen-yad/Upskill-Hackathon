import { combineReducers } from "@reduxjs/toolkit";
import ActiveChatSlice from './activeChat'
import RecallSlice from "./recall";

export default combineReducers({
    activeChat: ActiveChatSlice,
    recall: RecallSlice
})