import { UPDATE_LOADER_STATE } from './constants';

export function updateFullScreenLoaderState(payload) {
  return {
    type: UPDATE_LOADER_STATE,
    payload
  }
}