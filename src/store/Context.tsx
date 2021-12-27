import { createContext } from "react";
import { IAction } from "./reducer";

const Context = createContext<{
  state: any;
  dispatch: (action: IAction) => void;
}>({
  state: null,
  dispatch: () => {},
});

export default Context;
