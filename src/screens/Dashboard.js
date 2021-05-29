import React from 'react'
import {Table} from "../components"

export const Dashboard = ({smallNav}) => {
    return (
        <div className="dashboard">
            <nav>
                <div className="">
                    <img src="/icons/logo.svg" alt="klasha logo" className=""/>
                </div>
                <div id="menu-box"
                    onClick={() => smallNav()}
                >
                    <img src="icons/menu.svg" alt="hamburger" id="hamburger" />
                </div>
            </nav>
            <header>
                <div id="right">
                    <h2>Balances</h2>
                    <p>Today, 19th October, 2020</p>
                </div>
                <div id="left">
                    <img src="/icons/notification.svg" alt="notification" id="notification"/>
                    <img src="/icons/profile-picture.svg" alt="avatar" id="avatar" />
                </div>
            </header>

            <div className="cards-box">
                <div id="line"></div>
                <div id="left">
                    <div className="top">
                        <h5>Total account balance</h5>
                        <div id="currency">
                            <h5>USD</h5>
                            <img src="/icons/Arrow-Down.svg" alt="arrow" id="arrow" />
                        </div>
                    </div>
                    <div className="down">
                        <div className="wallet-box">
                            <h1 className="wallet-balance">$5,332.18</h1>
                            <h4>1 USD = 381.97 NGN</h4>
                        </div>
                        <div id="currencies">
                            <h3>KES</h3>
                            <h3 id="ngn">NGN</h3>
                            <h3>GHC</h3>
                        </div>
                    </div>
                </div>
                <div id="right">
                    <div className="top">
                        <h5>Funds on hold</h5>
                        <h1 className="wallet-balance">$5,332.18</h1>
                    </div>
                </div>
            </div>
            <div className="mid">
                <h2>Payout table</h2>
                <div id="right">
                    <div id="search-box">
                        <input type="text" placeholder="searh something..." />
                        <img src="/icons/Search.svg" alt="search icon" id="icon" />
                    </div>
                    <div className="box">
                        <div className="calendar">
                            <h3>March 2020</h3>
                            <img src="/icons/Calendar.svg" alt="calendar" id="calendar" />
                        </div>
                        <button type="button">Payout</button>
                    </div>
                </div>
            </div>

            <section>
                <Table />
            </section>
        </div>
    )
}
