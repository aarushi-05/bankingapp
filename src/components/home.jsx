import React from "react";
import "../style/dashboard.css";
import wave from "../images/wave.png";
import newImage from "../images/new-Image.jpg";

function Home(){

    React.useEffect(()=>{
       const script = document.createElement('script');
       script.src="https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js";
       script.type="text/javascript";
       script.async=true;
       script.innerHTML= {
        "colorTheme": "dark",
    "dateRange": "12M",
    "exchange": "BSE",
    "showChart": true,
    "locale": "in",
    "largeChartUrl": "",
    "isTransparent": false,
    "showSymbolLogo": true,
    "width": "400",
    "height": "600",
    "plotLineColorGrowing": "rgba(24, 72, 204, 1)",
    "plotLineColorFalling": "rgba(24, 72, 204, 1)",
    "gridLineColor": "rgba(42, 46, 57, 1)",
    "scaleFontColor": "rgba(120, 123, 134, 1)",
    "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
    "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
    "symbolActiveColor": "rgba(33, 150, 243, 0.12)"
            };
    document.querySelector('.tradingview-widget-container').appendChild(script);
    }, [] );

    return (<div id="dashboard">


        <div id="top-image">
            <img src={newImage} alt="newImage" />
        </div>

        <div id="card-wrapper">
            <div className="card">
            <i class="fas fa-university"></i>
                <div className="card-right">
                    <h3>Premium Banking</h3>
                    <p>Experience exclusive financial solutions and personalized services.</p>
                </div>
            </div>
            <div className="card">
            <i class="fas fa-piggy-bank"></i>
                <div className="card-right">
                    <h3>Savings Account</h3>
                    <p>Unlock your financial future today with our high interest savings account!</p>
                </div>
            </div>
            <div className="card">
            <i class="fas fa-shield-alt"></i>
                <div className="card-right">
                    <h3>Robust Security</h3>
                    <p>Tailor made solution for your delight, 100% safe and secure.</p>
                </div>
            </div>
        </div>


        <div id="content-container">
            <div className="content-box">
                <div className="left">
                    <img src="https://img2.pngio.com/index-of-wp-content-uploads-2016-03-bank-vector-png-600_300.png" alt="bank" />
                </div>
                <div className="right">
                <h1>About us</h1>
                <p>The Bank has gone through the various phases of its growth trajectory over hundred years of its existence. Growth of BootCat Bank was phenomenal. attaining the status of a national level player in terms of geographical reach and clientele segments. Eighties was characterized by business diversification for the Bank.</p>
                </div>
                
            </div>
        </div>
    
    </div>
    );
}
export default Home;