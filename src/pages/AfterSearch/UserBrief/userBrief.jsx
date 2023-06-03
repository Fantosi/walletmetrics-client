import React, { useEffect } from 'react';
import style from './userBrief.module.css';
import { useParams } from 'react-router-dom';
import ApexChart from "react-apexcharts";
import axios, { AxiosHeaders } from "axios";


function UserBrief() {
    const { address } = useParams();

    //   useEffect(() => {
    //     axios.get(`http://localhost:3000/isinit?protocolAddress=${address}`)
    //     .then((response) => {
    //         console.log(response.data);

    //     })
    //     .catch(function(error){
    //         console.error(error.response);
    //     })
    // }, [])

    //0xD54f502e184B6B739d7D27a6410a67dc462D69c8

    // useEffect(() => {
    //     axios.post(`http://localhost:3000/sync?protocolAddress=${address}`)
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.error(error.response);
    //         })
    // }, [])
    
   


    return (
        <div>
            <div className={style.container}>
                Address: {address} {/* Display the address value */}

            </div>
        </div>
    );
}

export default UserBrief;
