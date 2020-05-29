import { fromJS } from "immutable";
import { createReducerFromObject } from "../utils/miscellaneous/reducerUtils";
import { STORE_STORE_LIST_FROM_ZONE, STORE_STORE_CATEGORY_LIST_ZONE, STORE_DEMO_STORE_LIST } from "../views/home/state/constants";
import { STORE_STORE_PROFILE_PAGE_DETAILS, STORE_STORE_COMPLIANCE_DETAILS, STORE_BUSINESS_CATEGORY_LIST } from "../containers/store-profile/state/constants";


const initialState = fromJS({
  businessCategoryList: [],
  storeList: null,
  totalRecords: 0,
  currentQuery: null,
  initialQuery: null,
  categoryList: [],
  storeProfilePageDetails: null,
  storeComplianceDetails: null,
  requestType: 'initial',

});

const reducerFunction = {
  [STORE_STORE_LIST_FROM_ZONE]: (state, payload) => {
    const { type, query, data } = payload;
    // const prevCategoryList = state.get('categoryList');
    let dataToStore = data.hits;
    // let currentCategoryList = payload.via == 'normal' ? Object.values(data.hotSoreCategory) : prevCategoryList;
    let newState = null;
    if (type === 'initial'|| type == 'filter') {
      newState = state.merge({ storeList: fromJS(dataToStore), totalRecords: data.total.value, initialQuery: fromJS(query), currentQuery: fromJS(query), requestType: fromJS(type) });
    } else if (type === 'pagination') {
      const prevData = state.get('storeList').toJS();
      dataToStore = prevData.concat(dataToStore);
      newState = state.merge({ storeList: fromJS(dataToStore), currentQuery: fromJS(query), requestType: fromJS(type) });
    }
    return newState;
  },
  [STORE_STORE_CATEGORY_LIST_ZONE]: (state, payload) => {
    let currentCategoryList = payload.data.obj;
    try {
      console.log('try', payload.data.groupByBusinessCategory.buckets)
      currentCategoryList = generateCategoryList(payload.data.groupByBusinessCategory.buckets);
    } catch (e) { }
    let newState = state.set('categoryList', currentCategoryList);
    return newState;
  },
  [STORE_STORE_PROFILE_PAGE_DETAILS]: (state, payload) =>
    state.set('storeProfilePageDetails', fromJS(payload)),
  [STORE_STORE_COMPLIANCE_DETAILS]: (state, payload) => {
    let dataToStore = payload.data;
    // let fileObj = await getFileFromUrl(payload.data.certificateUrl);
    let newState = state.set('storeComplianceDetails', fromJS({ [payload.type]: dataToStore }));
    console.log('state', state)
    return newState;
  },
  [STORE_BUSINESS_CATEGORY_LIST]: (state, payload) =>
    state.set('businessCategoryList', payload),
  [STORE_DEMO_STORE_LIST]: (state, payload) =>
    state.set('demoStoreList', fromJS(payload.hits))
};

function generateCategoryList(bucketList) {
  console.log('bucketList', bucketList);
  if (bucketList.length > 0) {
    let tempArr = bucketList.map(cateObj => {
      let keySplit = cateObj.key.split('||');
      let obj = { id: Number(keySplit[0]), name: keySplit[1] };
      if (cateObj.groupByCategory) {
        if (cateObj.groupByCategory.buckets) {
          let store_category = generateCategoryList(cateObj.groupByCategory.buckets);
          obj.store_category = store_category;
        }
      }
      console.log('obj');
      return obj;
    });
    console.log('tempArr', tempArr);
    return tempArr;
  } else
    return [];
}

const storeReducer = createReducerFromObject(
  reducerFunction,
  initialState
);
export default storeReducer;
