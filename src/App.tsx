import tokens from "./AntDesignTheme.json"
import { ConfigProvider, theme  } from 'antd';
import SideMenu from "./components/sideMenu/SideMenu";

const App: React.FC = () => {

  return (
    <ConfigProvider
      theme={{
        token :tokens.token,
        algorithm: theme.darkAlgorithm,
      }}
    >
      <SideMenu />
    </ConfigProvider>
  )
}

export default App
