import React from 'react';
import CustomTextField from '../../../components/TextField/customedTextField';
import Menu from '../../../components/Menu/menu';
import style from './funnel.module.css';
import { useParams, useNavigate } from 'react-router-dom';


function Funnel(props) {
    const { address } = useParams();
    const menuItems = ['UserBrief', 'TxBrief', 'Segmentation', 'Funnel', 'Templates'];


    return (
        <div>
            <div className={style.container}>
                <CustomTextField />
                <Menu menuItems={menuItems} address={address} />
                <div style={{ color: 'white' }}>
                    Funnel 화면입니다
                    <div>{address}</div>

                </div>

            </div>

        </div>

    );
}

export default Funnel;