import { Photo } from '../interfaces';
import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_ERROR
} from './constants';

export function fetchPhotos() {
  return {
    type: FETCH_PHOTOS
  }
}

export function fetchPhotosSuccess(data: Photo[]) {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    data
  }
}

export function fetchPhotosError(error: string) {
  return {
    type: FETCH_PHOTOS_ERROR,
    errorMsg: error
  }
}


