import { createContext } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  return <TaskContextProvider>{props.children}</TaskContextProvider>;
}
