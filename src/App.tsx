import tokens from "./AntDesignTheme.json"
import { ConfigProvider, theme  } from 'antd';
import SideMenu from "./components/sideMenu/SideMenu";
import Content from "./components/content/Content";
import NavBar from './components/navbar/NavBar';

//context providers
import MenuToggleContextProvider from "./components/contexts/MenuContext";
import SmallScreenProvider from "./components/contexts/Screen";

import "./App.scss"


const App = () => {
  return (
    <ConfigProvider
      theme={{
        token :tokens.token,
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="admin-dashboard">
        <MenuToggleContextProvider>
          <SmallScreenProvider>
            <SideMenu />
            <div className="layout">
              <NavBar />
              <div className="content-wrapper container-xxl">
                <Content />
              </div>
            </div>
          </SmallScreenProvider>
        </MenuToggleContextProvider>
      </div>
    </ConfigProvider>
  )
}

export default App
