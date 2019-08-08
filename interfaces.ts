export interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export interface PhotosState {
  data: Photo[];
  isFetching: boolean;
  error: boolean;
  errorMsg: string;
}
