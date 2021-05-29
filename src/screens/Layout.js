import React, {useState} from 'react'
import {Sidebar} from "../components"
import {Dashboard} from "./Dashboard"

const Layout = () => {
    const [side, setSide] = useState(false)
    const toggleSide = () => setSide(!side)


    return (
        <div className="layout">
            <div className="side-box">
                <Sidebar smallNav={toggleSide}/>
            </div>
            <div className="screen-box">
                <Dashboard smallNav={toggleSide}/>
            </div>
            <div className={`small-menu ${side ? "side-open" : "side-close"}`}>
                <Sidebar smallNav={toggleSide} small={true}/>
            </div>
        </div>
    )
}

export default Layout
