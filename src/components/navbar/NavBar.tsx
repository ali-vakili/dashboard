import { useContext } from "react";
import classnames from "classnames";

//contexts
import { MenuToggle } from "../contexts/MenuContext";
import { SmallScreen } from "../contexts/Screen";


import styles from "./NavBar.module.scss"

const NavBar = () => {
  const { dispatch } = useContext(MenuToggle);
  const isSmallScreen = useContext(SmallScreen);

  return(
    <nav className={classnames({[styles.navbar]: isSmallScreen})}>
      {isSmallScreen && (
        <button className={styles.menu} onClick={() => dispatch({type: "open"})}>
          <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="2" fill="white"/>
            <rect y="6" width="24" height="2" fill="white"/>
          </svg>
        </button>
      )}
    </nav>
  )
}

export default NavBar;