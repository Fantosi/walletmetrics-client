import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './menu.module.css';

const Menu = ({ menuItems, address }) => {
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    navigate(`/${menu}/${address}`);
  };

  return (
    <div className={style.menu}>
      {menuItems.map((menu, index) => (
        <div
          key={index}
          className={style.menuItem}
          onClick={() => handleMenuClick(menu)}
        >
          {menu}
        </div>
      ))}
    </div>
  );
};

export default Menu;