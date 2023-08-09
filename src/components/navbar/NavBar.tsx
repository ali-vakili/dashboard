import { useContext } from "react";
import classnames from "classnames";
import { MenuToggled } from "../../App"

import styles from "./NavBar.module.scss"

const NavBar : React.FC = ({ closeAndOpenMenu }) => {
  const menuContext = useContext(MenuToggled);
  const { isSmallScreen, setIsMenuOpen } = menuContext;

  return(
    <nav className={classnames({[styles.navbar]: isSmallScreen})}>
      {isSmallScreen && (
        <button className={styles.menu} onClick={() => {setIsMenuOpen?.("open"), closeAndOpenMenu()}}>
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