import React from 'react'
import './CoinsData.css'
export const CoinsData = ({name,image,symbol,price,volume, priceChange,marketcap,high_24h,low_24h}) => {
return (
        <div className="coin-container">
        <div className="coin-row">
        <div className="coin">
        <img src={image} alt="crypto"/>
        <h1>{name}</h1>
        <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
        <p className="coin-price">Price &#x20b9;{price}</p>
       
        {
        priceChange < 0 ?(
        <p className="coin-percent red">Price Change
        {priceChange.toFixed(2)}%
        </p>
        ):(
        <p className="coin-percent green">Price Change
        {priceChange.toFixed(2)}%
        </p>
        )
        }
        <p className="coin-high_24h">Hight_24h &#x20b9;{high_24h} </p>
        <p className="coin-low_24h"> Low_24h &#x20b9;{low_24h}</p>
        <p className="coin-volume">volume &#x20b9;{volume.toLocaleString()}</p>
        <p className="coin-marketing">
        Mkt Cap: &#x20b9;{marketcap.toLocaleString()}</p>
        </div>
        </div>
        </div>
    )
}
export default CoinsData;