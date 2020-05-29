import { fromJS } from "immutable";
import { createReducerFromObject } from "../utils/miscellaneous/reducerUtils";
import { STORE_SEARCH_LIST, STORE_INITIAL_SEARCH_QUERY, STORE_HOT_CATEGORIES, STORE_STORE_SEARCH_CATEGORY_LIST } from "../views/nearby/state/constants";


const initialState = fromJS({
  storeSearchList: null,
  hotCategoriesList: fromJS([]),
  totalRecords: 0,
  currentQuery: null,
  initialQuery: null,
  categoryList: [],
  requestType: 'initial'


});

const reducerFunction = {
  [STORE_SEARCH_LIST]: (state, payload) => {
    const { fromAction, data } = payload;
    const { type, query } = fromAction;
    let dataToStore = data.hits;
    let newState = null;
    console.log('payload', payload)
    if (type === 'initial' || type == 'filter') {
      newState = state.merge({ storeSearchList: fromJS(dataToStore), totalRecords: data.totalRecords, initialQuery: fromJS(query), currentQuery: fromJS(query), requestType: type });
    } else if (type === 'pagination') {
      const prevData = state.get('storeSearchList').toJS();
      // const prevCategoryList = state.get()
      dataToStore = prevData.concat(dataToStore);
      newState = state.merge({ storeSearchList: fromJS(dataToStore), currentQuery: fromJS(query), requestType: type });
    }
    return newState;
  },
  [STORE_INITIAL_SEARCH_QUERY]: (state, payload) => {
    console.log('reducer', payload)
    let newState = state.set('initialQuery', fromJS(payload));
    console.log('newState', newState);
    return newState;
  },
  [STORE_STORE_SEARCH_CATEGORY_LIST]: (state, payload) => {
    let currentCategoryList = payload.data.obj;
    try {
      console.log('try', payload.data.groupByBusinessCategory.buckets)
      currentCategoryList = generateCategoryList(payload.data.groupByBusinessCategory.buckets);
    } catch (e) { }
    let newState = state.set('categoryList', currentCategoryList);
    return newState;
  },
  [STORE_HOT_CATEGORIES]: (state, payload) =>
    state.set('hotCategoriesList', fromJS(payload))
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

const storeSearchReducer = createReducerFromObject(
  reducerFunction,
  initialState
);
export default storeSearchReducer;
