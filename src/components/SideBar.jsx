import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import '../styles/SideBar.css';

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <div className="sidebar-header" onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon className="sidebar-icon" />
        <div className='sidebar-title'> {isOpen  && <span>Menu</span>}</div>
       
      </div>
      <div className="sidebar-item">
        <ManageAccountsIcon className="sidebar-icon" />
        <div className='sidebar-title'> {isOpen && <span>Content Management</span>}</div>
       
      </div>
      <div className="sidebar-item">
        <LibraryBooksIcon className="sidebar-icon" />
        <div className='sidebar-title'> {isOpen && <span>Courses</span>}</div>
       
      </div>
    </div>
  );
};

export default SideBar;
