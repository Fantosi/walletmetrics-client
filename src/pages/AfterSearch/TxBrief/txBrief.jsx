import React from 'react';
import CustomTextField from '../../../components/TextField/customedTextField';
import Menu from '../../../components/Menu/menu';
import style from './txBrief.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import ChartComponent from '../../../components/Charts/apexChart';
import Date from '../../../components/Date/date';
import topImg from '../../../assets/images/topimg.png';
import day from '../../../assets/images/1day.png';
import week from '../../../assets/images/1week.png';
import month from '../../../assets/images/1month.png';
import taw from '../../../assets/images/taw.png';
import daw from '../../../assets/images/daw.png';
import waw from '../../../assets/images/waw.png';
import maw from '../../../assets/images/maw.png';

function TxBrief(props) {
    const { address } = useParams();
    const menuItems = ['UserBrief', 'TxBrief', 'Segmentation', 'Funnel', 'Templates'];
    const timeItems = ['All Time', 'Day', 'Week', 'Month'];


    const dummyWalletAddresses = [
        'Address 1',
        'Address 2',
        'Address 3',
        'Address 4',
        'Address 5',
        'Address 6',
      ];
    

    const dummyData = [
        { newWalletNum: 10, startDate: '2023-01-01', endDate: '2023-01-07', newWalletCumulativeNum: 10 },
        { newWalletNum: 20, startDate: '2023-01-08', endDate: '2023-01-14', newWalletCumulativeNum: 30 },
        { newWalletNum: 15, startDate: '2023-01-15', endDate: '2023-01-21', newWalletCumulativeNum: 45 },
        { newWalletNum: 30, startDate: '2023-01-22', endDate: '2023-01-28', newWalletCumulativeNum: 75 },
        { newWalletNum: 25, startDate: '2023-01-29', endDate: '2023-02-04', newWalletCumulativeNum: 100 },
      ];


    
    return (
        <div>
        <div>
            <img src={topImg} className={style.top} />
        </div>
        <div className={style.briefbody}>
        <div className={style.mainmenu}>
            <Menu menuItems={menuItems} address={address} />
        </div >
        <div className={style.maincontents}>
            <div className={style.history} style={{ flex: 2 }}>
                <h3 className ={style.subtitle}style={{color:'white'}}>Wallet Flow History</h3>
                <div>
                    <img className={style.container0} src={day} alt="Day" />
                </div>
                <div>
                    <img className={style.container0} src={week} alt="Week" />
                </div>
                <div>
                    <img className={style.container0} src={month} alt="Month" />
                </div>
            </div>
            <div className={style.graphcontainer}>
            <div>
                    <Date menuItems={timeItems} />
                </div>
                <div className={style.graph} style={{ flex: 3 }}>
                    
                <ChartComponent newDatasDayChart={dummyData} />
                </div>
            </div>
            
            <div className={style.address} style={{  flex: 2 }}>
            <h3 className ={style.subtitle}style={{color:'white'}}>Wallet Address</h3>
            <div className={style.addresscontainer}>
            {dummyWalletAddresses.map((address, index) => (
            <div className={style.addressmap} key={index}>{address}</div>
          ))}
            </div>
            </div>
        </div>
        <div className={style.bottomcontents}>
            <div className={style.subcontents} style={{ flex: 1 }}>
                <div style={{ flex: 1, backgroundColor: '#D75DDA' }}></div>
                <div className ={style.aw} style={{ flex: 30 }}>
                <img src={taw} className={style.awcontainer}  />

                </div>
            </div>
            <div className={style.sizebox}></div>
            <div className={style.subcontents} style={{ flex: 1 }}>
                <div style={{ flex: 1, backgroundColor: '#5D5DDA' }}></div>
                <div className ={style.aw} style={{ flex: 30 }}>
                    <img src={daw} className={style.awcontainer}  />
                </div>
            </div>
            <div className={style.sizebox}></div>
            <div className={style.subcontents} style={{ flex: 1 }}>
                <div style={{ flex: 1, backgroundColor: '#5DDAD2' }}></div>
                <div className ={style.aw} style={{ flex: 30 }}>

                <img src={waw} className={style.awcontainer}  />
                </div>
            </div>
            <div className={style.sizebox}></div>
            <div className={style.subcontents} style={{ flex: 1 }}>
                <div style={{ flex: 1, backgroundColor: '#5DB4DA' }}></div>
                <div className ={style.aw} style={{ flex: 30 }}>
                <img src={maw} className={style.awcontainer} />

                </div>
            </div>
        </div>

        </div>
        
    </div>

    );
}

export default TxBrief;