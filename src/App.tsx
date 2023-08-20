import { createContext, useReducer, useEffect } from 'react';
import tokens from "./AntDesignTheme.json"
import { ConfigProvider, theme  } from 'antd';
import { useMediaQuery } from "react-responsive";
import SideMenu from "./components/sideMenu/SideMenu";
import Content from "./components/content/Content";
import NavBar from './components/navbar/NavBar';
import { initialState, reducer } from './utils/Menu';
import type { ActionType, MenuToggleState } from './utils/Menu';

import "./App.scss"

// types
type MenuContextValue = {
  isMenuOpen: MenuToggleState
  dispatch: React.Dispatch<ActionType>;
};

// contexts
export const MenuToggled = createContext<MenuContextValue | null>(null);
export const SmallScreen = createContext(false);


const App: React.FC = () => {

  const isSmallScreen: boolean = useMediaQuery({ maxWidth: 992 });
  
  const [isMenuOpen, dispatch] = useReducer(reducer, initialState);

  const menuContextValue = {
    isMenuOpen,
    dispatch
  };

  useEffect(() => {
    !isSmallScreen && dispatch({ type: "close" });

  }, [isSmallScreen])

  
  return (
    <ConfigProvider
      theme={{
        token :tokens.token,
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="admin-dashboard">
        <MenuToggled.Provider value={menuContextValue}>
          <SmallScreen.Provider value={isSmallScreen}>
            <SideMenu />
            <div className="layout">
              <NavBar />
              <div className="content-wrapper container-xxl">
                <Content />
              </div>
            </div>
          </SmallScreen.Provider>
        </MenuToggled.Provider>
      </div>
    </ConfigProvider>
  )
}

export default App
