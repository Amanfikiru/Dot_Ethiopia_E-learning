import React, {useState} from 'react'
import Head from './Head'
import "./header.css"
import { Link } from 'react-router-dom'

const Header = () => {
    const [click, setClick]= useState(false)
  return (
    <>
        <Head />
        <header>
            <nav className='flexSB'>
                <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to= "/Tranings">Tranings</Link></li>
                    <li><Link to= "/about">About</Link></li>
                    <li><Link to= "/contact">contact us</Link></li>

                </ul>
                <div className="start">
                    <div className="joining"> GET CERTIFIED </div>
                </div>
                <button className='button toggle' onClick={() => setClick(!click)}>
                    {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                </button>
            </nav>
        </header>
    </>
  )
}

export default Header