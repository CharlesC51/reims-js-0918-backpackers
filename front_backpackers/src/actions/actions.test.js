import {
  VIEW_PLACES,
  VIEW_ACTIVITIES,
  FETCH_ACTIVITIES,
  FETCH_PLACES,
  CREATE_ACTIVITY
} from "./actionTypes";
import {
  makeViewPlacesAction,
  makeFetchPlacesAction,
  makeViewActivitiesAction,
  makeFetchActivitiesAction,
  makeCreateActivityAction
} from "./actions";

describe("makeViewPlacesAction", () => {
  it("should return a VIEW_PLACES action", () => {
    const places = [
      {
        name: "tokyo",
        description: "superbe tour"
      },
      {
        name: "tokyo",
        description: "superbe tour"
      }
    ];

    const expected = {
      type: VIEW_PLACES,
      places
    };

    expect(makeViewPlacesAction(places)).toEqual(expected);
  });
});

describe("makeFetchPlacesAction", () => {
  it("should return a FETCH_PLACES action", () => {
    const expected = {
      type: FETCH_PLACES
    };

    expect(makeFetchPlacesAction()).toEqual(expected);
  });
});

describe("makeViewActivitiesAction", () => {
  it("should return a VIEW_ACTIVITIES action", () => {
    const activities = [
      {
        name: "Soirée au bar",
        description: "on se retrouve tous au bar !"
      },
      {
        name: "Soirée au bar",
        description: "on se retrouve tous au bar !"
      }
    ];
    const expected = {
      type: VIEW_ACTIVITIES,
      activities
    };

    expect(makeViewActivitiesAction(activities)).toEqual(expected);
  });
});

describe("makeFetchActivitiesAction", () => {
  it("should return a FETCH_ACTIVITIES", () => {
    const expected = {
      type: FETCH_ACTIVITIES
    };

    expect(makeFetchActivitiesAction()).toEqual(expected);
  });
});

describe("makeCreateActivityAction", () => {
  it("should return a CREATE_ACTIVITY action", () => {
    const expected = {
      type: CREATE_ACTIVITY
    };
    expect(makeCreateActivityAction()).toEqual(expected);
  });
});
