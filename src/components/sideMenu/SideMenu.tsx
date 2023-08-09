import React, { useState, useContext } from 'react';
import { MenuToggled } from "../../App"
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Sidebar, sidebarClasses } from 'react-pro-sidebar';
import GridViewIcon from '@mui/icons-material/GridView';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


import "./SideMenu.scss"

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', 'sub1', <GridViewIcon />),

  getItem('Manage', 'grp', null, [], 'group'),

  getItem('Pages', 'sub2', <InsertDriveFileOutlinedIcon/>, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
  ]),

  getItem('Services', 'sub4',<DesignServicesOutlinedIcon/>, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Projects', 'sub6',<LightbulbOutlinedIcon/>, [
  ]),
  getItem('Media', 'sub7',<PhotoLibraryOutlinedIcon/>, [
  ]),

  getItem('Clients', 'grp', null, [], 'group'),
  getItem('Contact', 'sub8',<MailOutlinedIcon/>, [
  ]),
  getItem('Clients', 'sub9',<PeopleAltOutlinedIcon/>, [
  ]),

  getItem('Configure', 'grp', null, [], 'group'),
  getItem('Theme', 'sub10',<DarkModeOutlinedIcon/>, [
  ]),
  getItem('Setting', 'sub11',<SettingsOutlinedIcon/>, [
  ]),
];

type SideMenuProps = {
  closeAndOpenMenu: () => void;
};

const SideMenu: React.FC<SideMenuProps> = ({ closeAndOpenMenu }) => {
  const [current, setCurrent] = useState('');
  const menuContext = useContext(MenuToggled);
  const { isMenuOpen, setIsMenuOpen } = menuContext;


  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Sidebar 
      rootStyles={{
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        backgroundColor: '#161616',
        overflow: 'auto',
        height: '100%',
        border: 'none',
        width: '280px',
        transition: 'width, left, right, 300ms, easeOut',
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#161616',
          padding: '24px',
          overflow: 'unset',
          height: 'fit-content',
          minHeight: '100%'
        },
        [`.${sidebarClasses.backdrop}`]: {
          backgroundColor: '#16b8f314',
        }
      }}
      toggled={isMenuOpen === "open" ? true: isMenuOpen === "close" ? false : false}
      breakPoint="lg"
      onBackdropClick={() => {{setIsMenuOpen?.("close"), closeAndOpenMenu()}}}
    >

      <span className='logo' role='logo'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1655_544)">
          <path d="M6 12V18H24V24H0V0H24V12H6Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_1655_544">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        </svg>
      </span>
      <Menu
        onClick={onClick}
        items={items}
        style={{ width: 256, backgroundColor: "transparent", border: "none", fontFamily: "Roboto" }}
        selectedKeys={[current]}
        mode="inline"
      />
    </Sidebar>
  );
};

export default SideMenu;