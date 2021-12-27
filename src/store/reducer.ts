import * as types from "./types";

export type IAction = {
  type: string;
  payload: any;
};

export interface IGlobalStates {
  isCollapseDrawer: boolean;
  isExtendDrawer: boolean;
}

export const initState: IGlobalStates = {
  isCollapseDrawer: false,
  isExtendDrawer: false,
};

const reducer = (state: IGlobalStates = initState, action: IAction) => {
  switch (action.type) {
    case types.IS_COLLAPSE_DRAWER:
      return {
        ...state,
        isCollapseDrawer: action.payload,
      };
    case types.IS_EXTEND_DRAWER:
      return {
        ...state,
        isExtendDrawer: action.payload,
        isCollapseDrawer: false,
      };
    default:
      throw new Error("Invalid action.");
  }
};

export default reducer;
