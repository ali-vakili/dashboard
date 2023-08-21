import { useEffect, createContext, useContext } from "react"
import { useMediaQuery } from "react-responsive";
import { MenuToggle } from "./MenuContext";


type SmallScreenProviderProps = {
  children: React.ReactNode
}

export const SmallScreen = createContext(false);

const SmallScreenProvider = ({ children } : SmallScreenProviderProps) => {
  const isSmallScreen: boolean = useMediaQuery({ maxWidth: 992 });
  const { dispatch } = useContext(MenuToggle);
  
  useEffect(() => {
    !isSmallScreen && dispatch({ type: "close" });
  
  }, [isSmallScreen]);

  return (
    <SmallScreen.Provider value={isSmallScreen}>
      { children }
    </SmallScreen.Provider>
  );
}

export default SmallScreenProvider;