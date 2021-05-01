import React from "react"
import "./Home.css";

import AppsIcon from "@material-ui/icons/Apps";

import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className='home'>
            <h1>SALAM from Home Js</h1>
            <div className='home__header'>
                <div className='home__headerLeft'>
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>

                </div>
                

                <div className='home__headerRight'>
                <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon/>
                    <LockOpenIcon/>
                  

                </div>

            </div>

            <div className='home__body'>
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />

            <div className='home_inputContainer'> 

            </div>
            </div>
        </div>
    )
}

export default Home
