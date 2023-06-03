import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './home.module.css';
import Dydx from '../../assets/images/dYdX.png';
import Audius from '../../assets/images/AudiusProtocol.png';
import ParaSwap from '../../assets/images/Paraswap.png';
import Lido from '../../assets/images/Lido.png';
import SushiSwap from '../../assets/images/SushiSwap.png';
import HopProtocol from '../../assets/images/HopProtocol.png';
import NFTx from '../../assets/images/NFTx.png';
import DODOv2 from '../../assets/images/DODOv2.png';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import purple from '../../assets/images/purple.png';
import blue from '../../assets/images/blue.png';
import yellow from '../../assets/images/yellow.png';

function Home(props) {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = () => {
    console.log(address);
    setAddress("");
    navigate(`/userbrief/${address}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };



  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.column}>
          <div className={style.title}>
            <h1>WalletMetrics</h1>
          </div>
          <div>
            <TextField
              className={`${style.textField} ${style.noHoverBorder}`}
              variant="outlined"
              value={address}
              placeholder="Enter protocol address"
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              InputProps={{
                classes: {
                  root: style.noHoverBorder, // Remove hover border style
                  notchedOutline: style.noHoverBorder, // Remove outline style
                },
                inputProps: {
                  style: {
                    color: 'white'
                  }
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ fontSize: 40, color: 'white' }} onClick={handleSubmit} />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div className={style.apps}>
            Apps
          </div>
          <div className={style.container}>
            <div className={style.grid}>
              <div className={style.gridItem} style={{ backgroundImage: `url(${purple})` }}>
                <div className={style.column}>
                  <img src={Dydx} alt="dydx" />
                  <h2>dYdX</h2>
                </div>
              </div>
              <div className={style.gridItem}>
                <div className={style.column}>
                  <img src={Audius} alt="Audius" />
                  <h2>Audius protocol</h2>
                </div>
              </div>
              <div className={style.gridItem} style={{ backgroundImage: `url(${blue})` }}>
                <div className={style.column}>
                  <img src={ParaSwap} alt="ParaSwap" />
                  <h2>ParaSwap</h2>
                </div>
              </div>
              <div className={style.gridItem}>
                <div className={style.column}>
                  <img src={Lido} alt="Lido" />
                  <h2>Lido</h2>
                </div>
              </div>
              <div className={style.gridItem}>
                <div className={style.column}>
                  <img src={SushiSwap} alt="Sushi" />
                  <h2>SushiSwap</h2>
                </div>
              </div>
              <div className={style.gridItem}>
                <div className={style.column}>
                  <img src={HopProtocol} alt="Hop" />
                  <h2>Hop Protocol</h2>
                </div>
              </div>
              <div className={style.gridItem}>
                <div className={style.column}>
                  <img src={NFTx} alt="NFTx" />
                  <h2>NFTx</h2>
                </div>
              </div>
              <div className={style.gridItem} style={{ backgroundImage: `url(${yellow})` }}>
                <div className={style.column}>
                  <img src={DODOv2} alt="DODO" />
                  <h2>DODOv2</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;