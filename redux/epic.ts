import { Photo } from '../interfaces'
import { FETCH_PHOTOS } from "./constants";
import { fetchPhotosSuccess, fetchPhotosError } from "./actions";
import { ofType } from 'redux-observable';
import { concatMap, map, catchError } from 'rxjs/operators'
import { of, from } from "rxjs";

export const fetchPhotosEpic = action$ => {
  return action$.pipe(
    ofType(FETCH_PHOTOS),
    concatMap(action => {
      return from(fetch('https://jsonplaceholder.typicode.com/photos'));
    }),
    concatMap((response: Response) => from(response.json())),
    map((response: Photo[]) => response.filter((photo, index) => index < 50)),
    map((response: Photo[]) => fetchPhotosSuccess(response)),
    catchError((error: Error) => of(fetchPhotosError(error.message)))
  )
}