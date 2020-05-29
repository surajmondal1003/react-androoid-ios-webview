import { combineReducers } from "redux";
import fullPageLoaderReducer from '../../reducers/fullPageLoaderReducer';
import messagePopupReducer from '../../reducers/messagePopupReducer';
import chatReducer from '../../reducers/chatReducer';
import storeReducer from '../../reducers/storeReducer';
import storeSearchReducer from '../../reducers/storeSearchReducer';
import userReducer from '../../reducers/userReducer';

const IndexReducer = combineReducers({
  storeReducer,
  fullPageLoaderReducer,
  messagePopupReducer,
  chatReducer,
  storeSearchReducer,
  userReducer
});

export default IndexReducer; 