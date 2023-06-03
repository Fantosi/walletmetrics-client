import React, { useEffect, useState } from 'react';
import style from './userBrief.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import ApexChart from "react-apexcharts";
import axios, { AxiosHeaders } from "axios";
import CustomTextField from '../../../components/TextField/customedTextField';
import Menu from '../../../components/Menu/menu';
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


function UserBrief() {
    const { address } = useParams();
    const menuItems = ['UserBrief', 'TxBrief', 'Segmentation', 'Funnel', 'Templates'];
    const timeItems = ['All Time', 'Day', 'Week', 'Month'];
    const [isLoading, setIsLoading] = useState(true);
    const [newDatasDayChart, setNewDatasDayChart] = useState([]);

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


    useEffect(() => {
        axios.get(`http://localhost:3000/userbrief?protocolAddress=${address}`,)
            .then((response) => {
                console.log(response.data);
                console.log(response.data['activaatedDailyDatasNum']);
                console.log(response.data['activaatedMonthlyDatasNum']);
                console.log(response.data['activaatedWeekDatasNum']);
                console.log(response.data['totalDatasNum']);
                
            })
            .catch(function (error) {
                console.error(error.response);
            })
    }, [])
   


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

export default UserBrief;


// {isLoading ? (
//     <>
//         {/* <p>Loading...</p> */}
//         <ChartComponent newDatasDayChart={dummyData} />

//     </>
// ) : (
//     <>
//         <ChartComponent newDatasDayChart={newDatasDayChart} />

//     </>
// )}

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

     // 데이터 가공 로직 작성
        // 예시 데이터 형식: [{ timestamp: '2023-05-20', value: 10 }, ...]
        // 가공된 데이터 형식: { categories: ['2023-05-20', ...], series: [{ name: 'Value', values: [10, ...] }] }
        // const categories = data.map((item) => item.timestamp);
        // const values = data.map((item) => item.value);
        // const series = [{ name: 'Value', values: values }];


        /// usebrief
    // useEffect(() => {
    //     axios.get(`http://localhost:3000/userbrief`,
    //         {
    //             headers: {
    //                 protocolAddress: `${address}`,
    //             }
    //         })
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.error(error.response);
    //         })
    // }, [])

/// isinit
    // useEffect(() => {
    //     axios.get(`http://localhost:3000/isinit?protocolAddress=${address}`)
    //         .then((response) => {
    //             console.log(response.data);

    //         })
    //         .catch(function (error) {
    //             console.error(error.response);
    //         })
    // }, [])

/// sync
    // useEffect(() => {
    //     axios.post(`http://localhost:3000/sync?protocolAddress=${address}`)
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.error(error.response);
    //         })
    // }, [])

  
    // useEffect(() => {
    //     axios.get(`http://localhost:3000/userbrief`,
    //         {
    //             headers: {
    //                 protocolAddress: `${address}`,

    //             }
    //         })
    //         .then((response) => {
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             console.error(error.response);
    //         })
    // }, [])



    // const processChartData = (data) => {
    //     console.log(briefData['newDataHistory']);
    //     console.log('데일리차트');
    //     console.log(briefData['newDatasDayChart']);
    //     console.log(briefData['newDatasWeekChart']);
    //     console.log(briefData['newDatasMonthChart']);
    //     console.log('활성화 지갑 주소');
    //     console.log(briefData['newDatasList']);

    //     const { daily, weekly, monthly } = briefData;

    //     // daily 데이터 처리
    //     const dailyData = daily.newDatasDayChart.map((item) => {
    //         return {
    //             x: new Date(item.date),
    //             y: item.value,
    //         };
    //     });

    //     // weekly 데이터 처리
    //     const weeklyData = weekly.newDatasWeekChart.map((item) => {
    //         return {
    //             x: new Date(item.date),
    //             y: item.value,
    //         };
    //     });

    //     // monthly 데이터 처리
    //     const monthlyData = monthly.newDatasMonthChart.map((item) => {
    //         return {
    //             x: new Date(item.date),
    //             y: item.value,
    //         };
    //     });


    //     return { categories, series };
    // };




    // setBriefData(response.data);

                // // 응답 데이터를 가공하여 그래프에 필요한 형식으로 설정
                // const { categories, series } = processChartData(briefData);

                // // 그래프 옵션 설정
                // const options = {
                //     chart: {
                //         type: 'line',
                //         zoom: {
                //             enabled: true,
                //         },
                //     },
                //     xaxis: {
                //         categories: categories,
                //     },
                // };

                // 그래프 시리즈 설정
                // const chartData = series.map((data) => ({
                //     name: data.name,
                //     data: data.values,
                // }));

                // setChartOptions(options);
                // setChartSeries(chartData);
                // setIsLoading(false);

                 //  useEffect(() => {
    //     axios.get(`http://localhost:3000/isinit?protocolAddress=${address}`)
    //         .then((response) => {
    //             console.log(response.data);

    //         })
    //         .catch(function (error) {
    //             console.error(error.response);
    //         })
    // }, [])

    // useEffect(() => {
    //     axios.post(`http://localhost:3000/sync?protocolAddress=${address}`)
    //         .then((response) => {
    //             console.log(response.data);
    
    //         })
    //         .catch(function (error) {
    //             console.error(error.response);
    //         })
    // }, []);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//           await axios.post(`http://localhost:3000/sync?protocolAddress=${address}`);
//         const initResponse = await axios.get(`http://localhost:3000/isinit?protocolAddress=${address}`);
//         console.log(initResponse);
  
//         setIsLoading(true);
  
//         const briefResponse = await axios.get(`http://localhost:3000/userbrief`, {
//           headers: {
//             protocolAddress: `${address}`,
//           },
//         });
  
//         console.log('UserBrief API response:', briefResponse.data);
  
//         setNewDatasDayChart(briefResponse.data.newDatasDayChart);
  
//         if (initResponse.data) {
//           await axios.post(`http://localhost:3000/sync?protocolAddress=${address}`);
//           console.log('Sync API called');
//         }

//       } catch (error) {
//         console.error(error.response);
//       } finally {
//         setIsLoading(false);
//       }
//     };
  
//     fetchData();
//   }, [address]);

    /// Todo
    /// daily. weekly. monthly 데이터로 구분
    /// 메뉴바 이름이랑 비교 후 chart 파라미터에 대입