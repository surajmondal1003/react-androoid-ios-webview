import { fromJS } from "immutable";
import { createReducerFromObject } from "../utils/miscellaneous/reducerUtils";
import { UPDATE_LOADER_STATE } from "../containers/full-page-loader/state/constants";

const initialState = fromJS({
  loaderState: false
});

const countryRegionReducerFunction = {
  [UPDATE_LOADER_STATE]: (state, payload) =>
    state.set('loaderState', payload)

};


const fullPageLoaderReducer = createReducerFromObject(
  countryRegionReducerFunction,
  initialState
);
export default fullPageLoaderReducer;
