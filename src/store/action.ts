import * as types from "./types";

export const isCollapseDrawer = (payload: boolean) => ({
  type: types.IS_COLLAPSE_DRAWER,
  payload,
});

export const isExtendDrawer = (payload: boolean) => ({
  type: types.IS_EXTEND_DRAWER,
  payload,
});
