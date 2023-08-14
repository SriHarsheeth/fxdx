import React from 'react'

import Logo from '../images/newlogo.png.png'
import '../styles/header.css'
import Binance from '../images/binance.svg'
import Bitfinex from '../images/bitfinex.svg'
import Coinbase from '../images/coinbase.svg'
import Ripple from '../images/ripple.svg'
import Bitcoin from '../images/bitcoin.svg'
import Monero from '../images/monero.svg'
import Steemit from '../images/steemit.svg'
import Tether from '../images/tether.svg'

import '../styles/component2.css'
import Graph from '../images/graph.png'
import { useEffect, useState } from 'react'
import '../styles/component3.css'
import arrow from '../images/rightcirclearrow.svg'

import '../styles/component4.css'
import Logo1 from '../images/logo1.svg'
import Logo2 from '../images/logo2.svg'
import Logo3 from '../images/logo3.svg'
import Logo4 from '../images/logo4.svg'
import Logo5 from '../images/logo5.svg'
import Logo6 from '../images/logo6.svg'

import '../styles/component5.css'
import Downarrow from '../images/downarrow.svg'
import Downarrowgrey from '../images/downarrowgrey.svg'
import Uparrow from '../images/uparrow.svg'
import Uparrowwhite from '../images/uparrowwhite.svg'
import Chart from '../images/Chart.svg'
import Lock from '../images/lock.svg'
import Bitcoinlogo from '../images/bitcoinlogo.svg'

import '../styles/component6.css'

import Component6graph from '../images/component6graph.png'

import '../styles/component7.css'
import Maxc from '../images/maxc.png.svg'
import Rectangle from '../images/reactanglegrad.png'
import Dollar from '../images/dollarimage.png'

import '../styles/component8.css'
import Map from '../images/map.png'

import '../styles/component9.css'
import Courtney from '../images/courtney.svg'
import Arthur from '../images/arthur.svg'
import Leslie from '../images/leslie.svg'
import Arlene from '../images/arlene.svg'
import Marjo from '../images/marjo.svg'
import Darell from '../images/darell.svg'

import '../styles/component10.css'
import Stars from '../images/stars.svg'
import Memoji from '../images/memoji.svg'
import Memoji1 from '../images/memoji1.svg'
import Memoji2 from '../images/memoji2.svg'

import '../styles/component11.css'
import Graph1 from '../images/component11graph.png'

import '../styles/component12.css'
import Rightarrow from '../images/rightarrow.svg'
import Phone from '../images/phone.svg'
import Mail from '../images/mail.svg'

const MainComponent = () => {
    let [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        const url = 'https://twelve-data1.p.rapidapi.com/stocks?exchange=NASDAQ&format=json';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b9d5cbba4amsh3cf7fd896444022p1662acjsn494128db6fe9',
                'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
            }
        };

        try {
            fetch(url, options)
                .then((response) => { return response.json() })
                .then((datas) => { setData(datas.data) })
        } catch (error) {
            console.error(error);
        }
    }, [])
    return (
        <div className='header-main-container'>
            <div className='container'>
                <nav>
                    <img src={Logo} alt='img' />
                    <div className='nav-list'>
                        <ul>
                            <li>
                                <a href='/'><u style={{ textUnderlineOffset: "9px", color: "#F1F1F1" }} ><span className='menu '>Menu</span></u> </a>
                            </li>
                            <li><a href='/'>Stat</a></li>
                            <li><a href='/'>Community</a></li>
                            <li><a href='/'>Add Liquidity</a></li>
                            <li><a href='/'>Guide</a></li>
                            <li><a href='/'>Contact</a></li>
                        </ul>
                    </div>
                    <button>FXDX on Algorand</button>
                </nav>
                <section className='main-section'>
                    <section className='section-one'>
                        <p><b>DECENTRALISED INFRASTRUCTURE FOR <br></br>
                            PERPETUAL FUTURES WITH <span style={{ color: "#0267FF" }}>LIMITLESS LIQUIDITY</span></b></p>
                    </section>
                    <section className='section-two'>
                        <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                            ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.v Curabitur tempus urna at turpis
                            condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
                    </section>
                    <button className="bottom btn btn-primary " type="submit">Get Started</button>
                </section>
                <div className='main-page-footer'>
                    <img src={Binance} alt='images' />
                    <img src={Ripple} alt='images' />
                    <img src={Coinbase} alt='images' />
                    <img src={Bitcoin} alt='images' />
                    <img src={Bitfinex} alt='images' />
                    <img src={Monero} alt='images' />
                    <img src={Tether} alt='images' />
                    <img src={Steemit} alt='images' />
                </div>
            </div>
            <div className="component2-main-container">
                <div className="left">
                    <p className='firstpara'>Development Of Our Best Platform</p>
                    <p className='secondpara'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                        interdum, ac aliquet odio mattis.</p>
                    <div className='content'>
                        <div className='first'><p>Our Users</p><h1>500K+</h1></div>
                        <div className='second'><p>Active Transaction</p><h1>10M+</h1></div>
                        <div className='first'><p>Brand Partner</p><h1>300+</h1></div>
                    </div>
                    <button>know more</button>
                </div>
                <div className="right">
                    <div className='ellipse'></div>
                    <div className='graph' ><img src={Graph} alt="" /></div>
                </div>
            </div>
            <div className='component3-main-container'>
                <div className="left">
                    <div className="container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Name</th>
                                    <th>Symbol</th>
                                    <th>Currency</th>
                                    <th>Exchange</th>
                                </tr>
                            </thead>
                            {
                                data.splice(0, 3).map((value, ind) => {
                                    return (
                                        <tbody>
                                            <tr>
                                                <td>{ind + 1}</td>
                                                <td>{value.name}</td>
                                                <td> {value.symbol}</td>
                                                <td>{value.currency}</td>
                                                <td>{value.exchange}</td>
                                                <td><button>BUY</button></td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                    </div>
                </div>
                <div className="right">
                    <h1>Market Trend</h1>
                    <p>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                        et velit interdum, ac aliquet odio mattis.</p>
                    <button>Start Trading <img src={arrow} alt="" /></button>
                </div>
            </div>
            <div className="component4-main-page">
                <h1>Why trust us over others?</h1>
                <p ><i>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam
                    vehicula ipsum a arcu cursus  vitae congue</i></p>
                <div className='card'>
                    <div className='cards'>
                        <img src={Logo1} alt="" />
                        <h2>Low transaction fees</h2>
                        <span>Worem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>
                    <div className='cards'>
                        <img src={Logo2} alt="" />
                        <h2>Low transaction fees</h2>
                        <span >Worem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>
                    <div className='cards'>
                        <img src={Logo3} alt="" />
                        <h2>Low transaction fees</h2>
                        <span>Worem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>
                    <div className='cards'>
                        <img src={Logo4} alt="" />
                        <h2>Low transaction fees</h2>
                        <span>Worem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>
                    <div className='cards'>
                        <img src={Logo5} alt="" />
                        <h2>Low transaction fees</h2>
                        <span>Worem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>
                    <div className='cards'>
                        <img src={Logo6} alt="" />
                        <h2>Low transaction fees</h2>
                        <span>Worem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    </div>
                </div>
            </div>
            <div className='component5-main-page'>
                <div className="left">
                    <div className='ellipse'></div>
                    <div className='main-box'>
                        <hr className='top'></hr>
                        <div className='content'>
                            <div>
                                <p className='buy'>Buy Summary</p>
                                <p>Liquidation Price</p>
                                <p>Impact</p>
                                <p>Spread</p>
                                <p>Open Fee</p>
                                <p>Price Impact</p>
                                <p>Amount</p>
                                <p>Price</p>
                            </div>
                            <div className='amount'>
                                <p className='symbol'><img src={Downarrow} alt="" /></p>
                                <p>$15.00</p>
                                <p>$5.00</p>
                                <p>0.5 %</p>
                                <p>$1.05</p>
                                <p>.05%</p>
                                <p>10</p>
                                <p>$210042.00</p>
                            </div>
                        </div>
                        <hr className='middlehr' />
                        <div className='total'>
                            <p>Total</p>
                            <p>$23.432,00</p>
                        </div>
                        <button className=" buybtc btn btn-primary " type="submit">Buy BTC</button>
                        <hr />
                        <div className='d-flex justify-content-between adv '>
                            <div>
                                <p>Advanced</p>
                                <p>Order Position</p>
                                <p>Exchange</p>
                            </div>
                            <div>
                                <p className='symbol'><img src={Uparrow} alt="" /></p>
                                <p className='symbol'><img src={Uparrow} alt="" /></p>
                                <p className='symbol'><img src={Uparrow} alt="" /></p>
                            </div>
                        </div>
                    </div>
                    <div className='container2'>
                        <div>
                            <div className='open'>
                                <p>Open New Position</p>
                                <p className='symbol'><img src={Uparrowwhite} alt="" /></p>
                            </div>
                            <div className="bitcoin">
                                <img style={{ height: "30px", width: "30px" }} src={Bitcoinlogo} alt="" />
                                <div className='d-flex flex-column  justify-content-between'>
                                    <p>Bitcoin/USD</p>
                                    <p>Today up to<span style={{ color: "#14C67A" }}>+ 5.34%</span></p>
                                </div>
                                <img style={{ height: "27px", width: "61px" }} src={Chart} alt="" />
                            </div>
                            <hr />
                            <div className='but'>
                                <button>Buy</button>
                                <p>Sell</p>
                            </div>
                            <div className="chamber">
                                <span>Amount</span>
                                <div className='innerchamber' >
                                    <p ><img src={Lock} alt="" /> 10</p>
                                    <p>BTC <span><img style={{ width: "17px", height: "17px" }} src={Downarrowgrey} alt="" /></span></p>
                                </div>
                            </div>
                            <div className="chamber">
                                <span>Price</span>
                                <div className='innerchamber' >
                                    <p ><img src={Lock} alt="" /> 210042.00</p>
                                    <p>USD <span><img style={{ width: "17px", height: "17px" }} src={Downarrowgrey} alt="" /></span></p>
                                </div>
                            </div>
                            <div className='bottom-potion'>
                                <p>5x</p>
                                <p>10x</p>
                                <p>15x</p>
                                <p>20x</p>
                                <p>25x</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h1>Completely safe & secure</h1>
                    <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Curabitur tempus urna at turpis condimentum lobortis.</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className='component6-main-page'>

                <div className="top">
                    <p>Market Summary (Current)</p>
                    <h6>Torem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                        lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</h6>
                </div>
                <div className="containers">
                    <div className="container">
                        <div className="bitcoin">
                            <img style={{ height: "30px", width: "30px" }} src={Bitcoinlogo} alt="" />
                            <div className='d-flex flex-column  justify-content-between'>
                                <p>Bitcoin/USD</p>
                                <p>Today up to<span style={{ color: "#14C67A" }}> + 5.34%</span></p>
                            </div>

                            <img style={{ height: "27px", width: "61px" }} src={Chart} alt="" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="bitcoin">
                            <img style={{ height: "30px", width: "30px" }} src={Bitcoinlogo} alt="" />
                            <div className='d-flex flex-column  justify-content-between '>
                                <p>Bitcoin/USD</p>
                                <p>Today up to<span style={{ color: "#14C67A" }}> + 5.34%</span></p>
                            </div>
                            <img style={{ height: "27px", width: "61px" }} src={Chart} alt="" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="bitcoin">
                            <img style={{ height: "30px", width: "30px" }} src={Bitcoinlogo} alt="" />
                            <div className='d-flex flex-column  justify-content-between '>
                                <p>Bitcoin/USD</p>
                                <p>Today up to<span style={{ color: "#14C67A" }}> + 5.34%</span></p>
                            </div>
                            <img style={{ height: "27px", width: "61px" }} src={Chart} alt="" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="bitcoin">
                            <img style={{ height: "30px", width: "30px" }} src={Bitcoinlogo} alt="" />
                            <div className='d-flex flex-column  justify-content-between '>
                                <p>Bitcoin/USD</p>
                                <p>Today up to<span style={{ color: "#14C67A" }}> + 5.34%</span></p>
                            </div>
                            <img style={{ height: "27px", width: "61px" }} src={Chart} alt="" />
                        </div>
                    </div>
                </div>
                <img className="graph" src={Component6graph} alt="" />
                <button>View all other market activity</button>
            </div>
            <div className='component7-main-page'>
                <div className="container">
                    <div className='left'>
                        <p>BUY USDC ON </p>
                        <p>ALGORAND</p>
                        <div className='d-flex justify-content-start align-items-center'>
                            <h5>Powered by </h5>
                            <img src={Maxc} alt="" />
                        </div>
                        <button><b>BUY</b></button>
                    </div>
                    <div className="right">
                        <img className='rec' src={Rectangle} alt="" />
                        <img className=" dollar" src={Dollar} alt="" />
                        <div className='ellipse'></div>
                    </div>
                </div>
            </div>
            <div className='component8-main-page'>
                <h1>Send and receive crypto easily</h1>
                <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                    Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
                <img src={Map} alt="" />
            </div>
            <div className='component9-main-page'>
                <p>Participants in Our Community</p>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis </h6>
                <button>Join Community</button>
                <div className='users-container'>
                    <div className='users-one'>
                        <div className='user'>
                            <img src={Courtney} alt="" />
                            <p>Courtney</p>
                        </div>
                        <div className='user'>
                            <img src={Arthur} alt="" />
                            <p>Arthur</p>
                        </div>
                        <div className='user'>
                            <img src={Leslie} alt="" />
                            <p>Leslie</p>
                        </div>
                        <div className='user'>
                            <img src={Arthur} alt="" />
                            <p>Mitchell</p>
                        </div>
                        <div className='user'>
                            <img src={Leslie} alt="" />
                            <p>Philip</p>
                        </div>
                    </div>
                    <div className='users-two'>
                        <div className='user'>
                            <img src={Arlene} alt="Images" />
                            <p>Arlene</p>
                        </div>
                        <div className='user'>
                            <img src={Marjo} alt="images" />
                            <p>Marjorie</p>
                        </div>
                        <div className='user'>
                            <img src={Courtney} alt="" />
                            <p>Angel</p>
                        </div>
                        <div className='user'>
                            <img src={Marjo} alt="" />
                            <p>Gladys</p>
                        </div>
                        <div className='user'>
                            <img src={Courtney} alt="" />
                            <p>Courtney</p>
                        </div>
                    </div>
                    <div className='users-three'>
                        <div className='user'>
                            <img src={Courtney} alt="" />
                            <p>Courtney</p>
                        </div>
                        <div className='user'>
                            <img src={Arlene} alt="" />
                            <p>Arlene</p>
                        </div>
                        <div className='user'>
                            <img src={Darell} alt="" />
                            <p>Darrell</p>
                        </div>
                        <div className='user'>
                            <img src={Arlene} alt="" />
                            <p>Colleen</p>
                        </div>
                        <div className='user'>
                            <img src={Darell} alt="" />
                            <p>Darlene</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='component10-main-page'>
                <h1> Reviews from our platform users</h1>
                <p>consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla
                    facilisi nullam vehicula ipsum a arcu cursus vitae congue consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
                <div className="layouts">
                    <div className="layout">
                        <img src={Stars} alt="" />
                        <p>Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                            libero et velit interdum, ac aliquet odio mattis.</p>
                        <div className='d-flex justify-content-between' style={{ width: "80px" }}>
                            <img src={Memoji} alt="" />
                            <div style={{ marginLeft: "15px", display: "flex", flexDirection: "column", marginTop: "20px" }}>
                                <h5>Abhijit</h5>
                                <h6>Trader</h6>
                            </div>
                        </div>
                    </div>
                    <div className="layout">
                        <img src={Stars} alt="" />
                        <p>Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div className='d-flex justify-content-between' style={{ width: "80px" }}>
                            <img src={Memoji1} alt="" />
                            <div style={{ marginLeft: "15px", display: "flex", flexDirection: "column", marginTop: "20px" }}>
                                <h5>Thoufiq</h5>
                                <h6>Investor</h6>
                            </div>
                        </div>
                    </div>
                    <div className="layout">
                        <img src={Stars} alt="" />
                        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        <div className='d-flex justify-content-between' style={{ width: "80px" }}>
                            <img src={Memoji2} alt="" />
                            <div style={{ marginLeft: "15px", display: "flex", flexDirection: "column", marginTop: "20px" }}>
                                <h5>Kumar</h5>
                                <h6>Investor</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='component11-main-page'>
                <div className="left">
                    <div className='left-container'>
                        <h1>Learn Additional Information In Our Transactions</h1>
                        <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                        <button>See our videos</button>
                    </div>
                </div>
                <div className="right">
                    <img src={Graph1} alt="" />
                </div>
            </div>
            <div className="component12-main-page">
                <img src={Logo} alt="" />
                <div className='main'>
                    <div className='first'>
                        <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Jorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc vulputate libero et velit interdum, ac
                        </p>
                    </div>
                    <div className='second'>
                        <h6>MENU</h6>
                        <p>Home</p>
                        <p>Stats</p>
                        <p>Add Liquidity</p>
                        <p>Guide</p>
                    </div>
                    <div className='third'>
                        <h6>Docs</h6>
                        <p>Terms of use</p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='fourth'>
                        <h6>RESOURSES</h6>
                        <p>Analytics</p>
                        <p>Earn Dashboard</p>
                        <p>Whitepaper</p>
                        <p>Github</p>
                        <p>Fees</p>
                    </div>
                </div>
                <div className="footer">
                    <div className="footerleft">
                        <input type="text" placeholder='Enter Your Email' />
                        <button > Get Started  <img src={Rightarrow} alt="" /></button>
                    </div>
                    <div className="footerright">
                        <p>Contact :</p>
                        <span><h1><img src={Phone} alt="" />+91 9876 543 21</h1>
                            <h1><img src={Mail} alt="" /> reach@fxdx.com</h1></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent;