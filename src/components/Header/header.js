import React from 'react';
import './header.css';
import logo from "../../images/logo.jpeg";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {

    const openHandler = (e) => {
        const sidePanel = document.getElementById('sidePanel');
        const overlay = document.getElementById('overlay');
        sidePanel.style.left='0';
        overlay.style.display = 'block';
    }

    const closeHandler = (e) => {
        const sidePanel = document.getElementById('sidePanel');
        const overlay = document.getElementById('overlay');
        sidePanel.style.left = '-100vw';
        overlay.style.display = 'none';
    }

   return (
       <div className='headers'>
         <div className='headerContainer' id='headerContainer'>
            <div className='logo'>
                <img src={logo} alt='logo' className='headerImage'/>
            </div>
            <div className='headerlinks'>
                <ul>
                    <li className='list'><a className='headerlink' href='/'>HOME</a></li>
                    <li className='list'>
                        <a className='headerlink' href='/'>SERVICES</a>
                        <ul className='dropdown'>
                            <li className='list'><a className='headerlink' href='/service/study'>STUDY</a></li>
                            <li className='list'><a className='headerlink' href='/service/visit'>VISIT</a></li>
                            <li className='list'><a className='headerlink' href='/service/immigration'>IMMIGRATION</a></li>
                        </ul>
                    </li>
                    <li className='list'>
                        <a className='headerlink' href='/'>VISION</a>
                        <ul className='dropdown'>
                            <li className='list'><a className='headerlink' href='/vision/statement'>VISION STATEMENT</a></li>
                        </ul>
                    </li>
                    <li className='list'>
                        <a className='headerlink' href='/'>DESTINATIONS</a>
                        <ul className='dropdown1'>
                            <li className='list'><a className='headerlink' href='/destination/uk'>UK</a></li>
                            <li className='list'><a className='headerlink' href='/destination/australia'>AUSTRALIA</a></li>
                            <li className='list'><a className='headerlink' href='/destination/usa'>USA</a></li>
                            <li className='list'><a className='headerlink' href='/destination/europe'>EUROPE</a></li>
                            <li className='list'><a className='headerlink' href='/destination/turkey'>TURKEY</a></li>
                        </ul>
                    </li>
                    <li className='list'><a className='headerlink' href='/about'>ABOUT US</a></li>
                    <li className='list'><a className='headerlink' href='/contact'>CONTACT US</a></li>
                </ul>
            </div>
        </div>

        <div className='smallScreenPanel'>
        <div onClick={openHandler} className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div id='sidePanel'>
                <button id='close' onClick={closeHandler}><CloseIcon/></button>
                <div className="links">
                    <img src={logo} alt='logo' className='headerImageSmall'/>
                    <div className='smallScreenLinksContainer'>
                        <div className='smallScreenLink'><a href='/'>HOME</a></div>
                        <div>
                            <div className='smallScreenLink'><a href='/'>SERVICES</a></div>
                            <div className='smallScreenSubLinksContainer1'>
                                <div><a href='/service/study' className='smallScreenSubLink'>STUDY</a></div>
                                <div><a href='/service/visit' className='smallScreenSubLink'>VISIT</a></div>
                                <div><a href='/service/immigration' className='smallScreenSubLink'>IMMIGRATION</a></div>
                            </div>
                        </div>
                        <div>
                            <div className='smallScreenLink'><a className='smallScreenSubLink' href='/'>VISION</a></div>
                            <div  className='smallScreenSubLinksContainer2'>
                                <div><a href='/vision/statement'>VISION STATEMENT</a></div>
                            </div>
                        </div>
                        <div>
                            <div className='smallScreenLink'><a href='/'>DESTINATIONS</a></div>
                            <div  className='smallScreenSubLinksContainer'>
                                <div><a href='/destination/uk' className='smallScreenSubLink'>UK</a></div>
                                <div><a href='/destination/australia' className='smallScreenSubLink'>AUSTRALIA</a></div>
                                <div><a href='/destination/usa' className='smallScreenSubLink small'>USA</a></div>
                                <div><a href='/destination/europe' className='smallScreenSubLink'>EUROPE</a></div>
                                <div><a href='/destination/turkey' className='smallScreenSubLink'>TURKEY</a></div>
                            </div>
                        </div>
                        <div className='smallScreenLink2'><a href='/about'>ABOUT US</a></div>
                        <div className='smallScreenLink3'><a href='/contact'>CONTACT US</a></div>
                    </div> 
                </div>
                <ul id='searchResults'></ul>
            </div>
        <div id='overlay'></div>
        </div>
       </div>
   );
};


export default Header;