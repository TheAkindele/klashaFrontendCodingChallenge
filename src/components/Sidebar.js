import React from 'react'

export const Sidebar = ({smallNav, small}) => {
    return (
        <div className={`sidebar `}>
            <div className="logo-box">
                <img src="/icons/logo.svg" alt="klasha logo" id="klasha-logo"/>
            </div>
            <div id="menu-box"
                    onClick={() => smallNav()}
                >
                    <img src="icons/cancelss.svg" alt="hamburger" id="hamburger" />
                </div>

            <div className="top">
                <h2 id="main-page">Main pages</h2>
                <div className="menu" id="dashboard-box">
                    <img src="/icons/dashboard.svg" alt="icon" id="icon" />
                    <h3 className="ml-2">Dashboard</h3>
                </div>
                <div className="menu" id="balance-box">
                    <img src="/icons/balance.svg" alt="icon" id="icon" />
                    <h2 className="ml-2" id="balance">Balances</h2>
                </div>
                <div className="menu" id="customer">
                    <img src="/icons/customers.svg" alt="icon" id="icon" />
                    <h3 className="ml-2">Customers</h3>
                </div>
                <div className="menu" id="analytics">
                    <img src="/icons/analytics.svg" alt="icon" id="icon" />
                    <h3 className="ml-2">Analytics</h3>
                </div>
            </div>

            <div className="down">
                <h2 id="">General</h2>

                <div className="menu" id="settings">
                    <img src="/icons/settings.svg" alt="icon" id="icon" />
                    <h3 className="ml-2">Settings</h3>
                </div>
                <div className="menu" id="settings">
                    <img src="/icons/team.svg" alt="icon" id="icon" />
                    <h3 className="ml-2">Team</h3>
                </div>
                <div className="menu" id="settings">
                    <img src="/icons/contact.svg" alt="icon" id="icon" />
                    <h3 className="ml-2">Contact</h3>
                </div>
                <div className="menu" id="settings">
                    <img src="/icons/Logout.svg" alt="icon" id="icon" />
                    <h3 className="ml-2">Logout</h3>
                </div>
            </div>
        </div>
    )
}
