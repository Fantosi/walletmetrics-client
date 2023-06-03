import React, { useEffect } from 'react';
import style from './userBrief.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import ApexChart from "react-apexcharts";
import axios, { AxiosHeaders } from "axios";
import CustomTextField from '../../../components/TextField/customedTextField';
import Menu from '../../../components/Menu/menu';

function UserBrief() {
    const { address } = useParams();
    const menuItems = ['UserBrief', 'TxBrief', 'Segmentation', 'Funnel', 'Templates'];

    return (
        <div>
            <div className={style.container}>
                <CustomTextField />
                <Menu menuItems={menuItems} address={address} />
                UserBrief 화면
                <div>{address}</div>

            </div>
        </div>
    );
}

export default UserBrief;


  //   useEffect(() => {
    //     axios.get(`http://localhost:3000/isinit?protocolAddress=${address}`)
    //     .then((response) => {
    //         console.log(response.data);

    //     })
    //     .catch(function(error){
    //         console.error(error.response);
    //     })
    // }, [])



    // useEffect(() => {
    //     axios.post(`http://localhost:3000/sync?protocolAddress=${address}`)
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.error(error.response);
    //         })
    // }, [])

    //0xD54f502e184B6B739d7D27a6410a67dc462D69c8

    // useEffect(() => {
    //     axios.get(`http://localhost:3000/userbrief`,
    //     {headers: {
    //         protocolAddress: `${address}`,
    //         timeStampInterval: `1000`
    //     }})
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.error(error.response);
    //         })
    // }, [])