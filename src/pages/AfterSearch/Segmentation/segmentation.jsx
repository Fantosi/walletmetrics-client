import React from 'react';
import CustomTextField from '../../../components/TextField/customedTextField';
import Menu from '../../../components/Menu/menu';
import style from './segmentation.module.css';
import { useParams, useNavigate } from 'react-router-dom';


function Segmentation(props) {
    const { address } = useParams();
    const menuItems = ['UserBrief', 'TxBrief', 'Segmentation', 'Funnel', 'Templates'];


    return (
        <div>
            <div className={style.container}>
                <CustomTextField />
                <Menu menuItems={menuItems} address={address} />
                <div style={{ color: 'white' }}>
                    Segmentation 화면입니다
                </div>
                <div>{address}</div>

            </div>

        </div>

    );
}

export default Segmentation;