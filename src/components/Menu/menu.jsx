import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './menu.module.css';
import axios from 'axios';

const Menu = ({ menuItems, address }) => {
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState('UserBrief');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
        navigate(`/${menu}/${address}`);
    };

    useEffect(() => {
        setSelectedMenu(selectedMenu);
        // console.log(selectedMenu); // 업데이트된 값 출력됨
    }, [selectedMenu]);


    return (
        <div className={style.menu}>
            {menuItems.map((menu, index) => (
                <div
                    key={index}
                    className={`${selectedMenu === menu ? style.selected : style.menuItem}`}
                    onClick={() => handleMenuClick(menu)}
                >
                    {menu}
                </div>
            ))}
        </div>
    );
};

export default Menu;


 // const sendApiRequest = (menu) => {
    //     let url = '';

    //     if (menu === 'UserBrief') {
    //         url = `http://localhost:3000/userbrief`;
    //     } else if (menu === 'TxBrief') {
    //         url = `http://localhost:3000/txbrief`;
    //     }

    //     axios
    //         .get(url, {
    //             headers: {
    //                 protocolAddress: `${address}`,
    //                 timeStampInterval: `1000`,
    //             },
    //         })
    //         .then((response) => {
    //             console.log(response.data);
    //             console.log('받음');
    //         })
    //         .catch(function (error) {
    //             console.error(error.response);
    //             console.log('못받음');
    //         });
    // };
