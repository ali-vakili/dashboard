import { useReducer, createContext } from "react";
import { initialState, reducer } from '../../utils/MenuReducer';
import type { ActionType, MenuToggleState } from "../../utils/MenuReducer";


type MenuContextValue = {
  isMenuOpen: MenuToggleState
  dispatch: React.Dispatch<ActionType>
};

type MenuToggleContextProviderProps = {
  children: React.ReactNode
};

export const MenuToggle = createContext({} as MenuContextValue);

const MenuToggleContextProvider = ({ children } : MenuToggleContextProviderProps) => {
  const [isMenuOpen, dispatch] = useReducer(reducer, initialState);

  const menuContextValue = {
    isMenuOpen,
    dispatch
  };

  return (
    <MenuToggle.Provider value={menuContextValue}>
      { children }
    </MenuToggle.Provider>
  );
}

export default MenuToggleContextProvider;