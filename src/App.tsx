import { createContext, useState, useEffect } from 'react';
import tokens from "./AntDesignTheme.json"
import { ConfigProvider, theme  } from 'antd';
import { useMediaQuery } from "react-responsive";
import SideMenu from "./components/sideMenu/SideMenu";
import Content from "./components/content/Content";
import NavBar from './components/navbar/NavBar';

import "./App.scss"

type MenuContextValue = {
  isMenuOpen: 'open' | 'close';
  isSmallScreen?: boolean;
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<'open' | 'close'>>;
};

export const MenuToggled = createContext<MenuContextValue>({isMenuOpen: "close"});

const App: React.FC = () => {

  const isSmallScreen: boolean = useMediaQuery({ maxWidth: 992 });
  
  const [isMenuOpen, setIsMenuOpen] = useState<MenuContextValue['isMenuOpen']>("close");

  useEffect(() => {
    !isSmallScreen && setIsMenuOpen("close");
    if (!isSmallScreen) {
      if (document.body.classList.contains("menu-opened")){
        document.body.classList.remove("menu-opened")
      }
    }

  }, [isSmallScreen])

  const closeAndOpenMenu: () => void = () => {
    document.body.classList.toggle("menu-opened");
  }

  const menuContextValue = {
    isMenuOpen,
    isSmallScreen,
    setIsMenuOpen
  };

  return (
    <ConfigProvider
      theme={{
        token :tokens.token,
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="admin-dashboard">
        <MenuToggled.Provider value={menuContextValue}>
          <SideMenu closeAndOpenMenu={closeAndOpenMenu}/>
          <div className="layout">
            <NavBar closeAndOpenMenu={closeAndOpenMenu}/>
            <div className="content-wrapper container-xxl">
              <Content />
            </div>
          </div>
        </MenuToggled.Provider>
      </div>
    </ConfigProvider>
  )
}

export default App
