import { fromJS } from "immutable";
import { createReducerFromObject } from "../utils/miscellaneous/reducerUtils";
import { TOGGLE_OTP_MODAL, STORE_USER_DETAILS, STORE_COUNTRY_BASED_ON_IP, STORE_USER_STORE_INFO } from "../views/login/state/constants";
// import { STORE_STORE_LIVE_CHANGE } from "../containers/store-create/state/constants";
import { STORE_PROFILE_IMAGE_AFTER_UPDATE, TOOGLE_PROFILE_MODAL_STATE, STORE_CHAT_USER_LIST } from "../containers/user-profile/state/constants";

const initialState = fromJS({
  modalState: { open: false, data: null },
  userDetails: null,
  currentLocation: null,
  ipBasedCountry: {
    "id": 1,
    "countryMobileCode": "91",
    "countryCode": "IN",
    "countryName": "India",
    "imageUrl": "https://ndhbucket.s3.ap-south-1.amazonaws.com/File/flag/india.png"
  },
  userStoreInfo: null,
  addressList: null,
  addressDetailsById: null,
  locationServicable: null,
  cartAddress: null,
  profileModal: { open: true },
  chatUserList: null
});

const reducerFunction = {
  [STORE_USER_DETAILS]: (state, payload) =>
    state.set('userDetails', fromJS(payload)),
  [TOGGLE_OTP_MODAL]: (state, payload) =>
    state.set('modalState', fromJS(payload)),
  [STORE_COUNTRY_BASED_ON_IP]: (state, payload) =>
    state.set('ipBasedCountry', payload),
  [STORE_USER_STORE_INFO]: (state, payload) => {
    let userDetials = state.get('userDetails').toJS();
    if (userDetials) {
      if (!userDetials.roles.includes('SELLER')) {
        userDetials.isSeller = true;
        userDetials.roles.push('SELLER');
      }
    }
    let newState = state.merge({ 'userStoreInfo': fromJS(payload), userDetails: fromJS(userDetials) });
    return newState;
  },


  [STORE_PROFILE_IMAGE_AFTER_UPDATE]: (state, payload) => {
    let userRecord = state.get('userDetails').toJS();
    userRecord.profile_image = payload.profileImage;
    console.log('userRecord', userRecord)
    let newState = state.set('userDetails', fromJS(userRecord));
    return newState;
  },
  [TOOGLE_PROFILE_MODAL_STATE]: (state, payload) =>
    state.set('profileModal', fromJS(payload)),
  [STORE_CHAT_USER_LIST]: (state, payload) =>
    state.set('chatUserList', payload),

};


const userReducer = createReducerFromObject(
  reducerFunction,
  initialState
);
export default userReducer;
