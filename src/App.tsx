import tokens from "./AntDesignTheme.json"
import { ConfigProvider, theme  } from 'antd';
import SideMenu from "./components/sideMenu/SideMenu";
import Content from "./components/content/Content";

import "./App.scss"

const App: React.FC = () => {

  return (
    <ConfigProvider
      theme={{
        token :tokens.token,
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="admin-dashboard container-xxl">
        <SideMenu />
      </div>
      <div className="layout">
        <div className="content-wrapper container-xxl">
          <Content />
        </div>
      </div>
    </ConfigProvider>
  )
}

export default App
