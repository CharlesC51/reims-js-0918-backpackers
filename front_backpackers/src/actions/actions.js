import {
  VIEW_PLACES,
  FETCH_PLACES,
  VIEW_ACTIVITIES,
  FETCH_ACTIVITIES,
  CREATE_ACTIVITY
} from "./actionTypes";

export const makeViewPlacesAction = places => ({
  type: VIEW_PLACES,
  places
});

export const makeFetchPlacesAction = () => ({
  type: FETCH_PLACES
});

export const makeViewActivitiesAction = activities => ({
  type: VIEW_ACTIVITIES,
  activities
});

export const makeFetchActivitiesAction = () => ({
  type: FETCH_ACTIVITIES
});

export const makeCreateActivityAction = () => ({
  type: CREATE_ACTIVITY
});
