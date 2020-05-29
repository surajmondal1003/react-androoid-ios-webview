import { all } from 'redux-saga/effects';
import ChatSaga from '../../containers/chat_test/state/sagas';
import HomeSaga from '../../views/home/state/sagas';
import StoreSearchSaga from '../../views/nearby/state/sagas';
import LoginSaga from '../../views/login/state/sagas';
import StoreProfileSaga from '../../containers/store-profile/state/sagas';
import UserProfileSaga from '../../containers/user-profile/state/sagas';

function* IndexSaga() {
  yield all([
    ChatSaga(),
    HomeSaga(),
    StoreSearchSaga(),
    LoginSaga(),
    StoreProfileSaga(),
    UserProfileSaga()
    
  ])
}

export default IndexSaga;
