import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_ERROR
} from '../constants';

import { PhotosState } from '../../interfaces';

const initialState: PhotosState = {
  data: [],
  isFetching: false,
  error: false,
  errorMsg: ''
}

export default function photosReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isFetching: false
      }
    case FETCH_PHOTOS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMsg: action.errorMsg
      }
    default:
      return state;
  }
}
