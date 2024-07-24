import './App.css'
import React, { useEffect, useState } from 'react';
import {Route, Link, Routes, HashRouter, useLocation} from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Draco from '../components/Draco';
import Mukk from '../components/Mukk';
import Melk from '../components/Melk';
import Amigo from '../components/Amigo';
import Charm from '../components/Charm';
import Septic from '../components/Septic';
import Err404 from '../components/Err404';
import LogoSmall from '../assets/LogoSmall.png'
import YT_Banner from '../assets/YT_Banner.jpg'
import hamburger from '../assets/sort.png'
import gitHubIcon from '../assets/github-icon.png'
import twitterIcon from "../assets/SocialMedia/twitter.png"
import ytIcon from "../assets/SocialMedia/youtube.png"
import DracoPFP from "../assets/icons/DracoPFP.jpg"
import MukkPFP from "../assets/icons/MukkPFP.jpg"
import MelkPFP from "../assets/icons/MelkPFP.jpg"
import CharmPFP from "../assets/icons/CharmPFP.jpg"
import AmigoPFP from "../assets/icons/AmigoPFP.jpg"
import SepticPFP from "../assets/icons/SepticPFP.jpg"
import IconSplash from "../assets/Asset 8.png"
import Squid1 from "../assets/squids/blue_squib.png"
import Squid2 from "../assets/squids/lime_squib.png"
import Squid3 from "../assets/squids/magenta_squib.png"
import Squid4 from "../assets/squids/orange_squib.png"
import Squid5 from "../assets/squids/pink_squib.png"
import Squid6 from "../assets/squids/purple_squib.png"
import Squid7 from "../assets/squids/yellow_squib.png"



const App: React.FC = () => {
  
  const [currentPage, setCurrentPage] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);


function FindPath() {
    const location = useLocation();
    const urlMap: { [key: string]: string } = {
      "/" : "Home",
      "/draco" : "Draco",
      "/mukk" : "Mukk",        
      "/melk" : "Melk",
      "/charm" : "Charm",
        "/amigo" : "Amigo",
        "/septic" : "Septic",
        "/about" : "About",

    }
    setCurrentPage(urlMap[location.pathname]||"404")
  return <></>

}

  const buttonClick = (newPage: string) => {
      updateButtons(newPage);
      if( window.innerWidth < 1024){
      collapseButtons();}


  }

  const updateButtons = (newPage: string) => {
    newPage !== currentPage ? 
    setCurrentPage(newPage) :
    setCurrentPage(currentPage);
    

  }

  const handleResize = () => {
    if (window.innerWidth > 1024) {
      setMenuVisible(true);
     
    }
    else{
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Check the initial window size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  


  const collapseButtons = () =>{
setMenuVisible(!menuVisible);


  }

  const headerColor = () =>{
    const headerMap: { [key: string]: string } = {
      "" : "header",  
      "Home" : "header",
        "Draco" : "header draco",
        "Mukk" : "header mukk",
        
        "Melk" : "header melk",
        "Charm" : "header charm",
        
        "Amigo" : "header amigo",
        "Septic" : "header septic",
        "About" : "header",
        "404" : "header err404"

    }
    return headerMap[currentPage] || "header";
  }


  return (

    <HashRouter>
    
    <div className='App'>
        <FindPath/>
        <div className={headerColor()}>
          <div className='header-transition'>
        <div className='container-row headera'>
          <div className='header-col-left'>
            <Link to="/">
            <img className='header-logo' src= {LogoSmall}/>
            </Link>
            <a>
              
            <img height='50px' className='mobile-only' src={hamburger} onClick={collapseButtons} style={{filter:" invert(100%)",marginBottom:"15px"}}/></a>
            </div>
          
          <div className='header-col-right'>
        

        
                    
        <Link to="/">
          <button className={"Home" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Home")}}>
                    
            Home
          </button></Link>
          <Link to="/draco">
            
          <button id="draco" className={"Draco" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Draco")}}>
                    <div className='button-wrap'
                          style={{backgroundColor:("Draco" === currentPage ? "#00000000" : "")}}>                    
            Draco
            </div>
          </button></Link>
          <Link to="/mukk">
          <button id="mukk" className={"Mukk" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Mukk")}}>
                    <div className='button-wrap'
                          style={{backgroundColor:("Mukk" === currentPage ? "#00000000" : "")}}>
            Mukk</div>
          </button></Link>
          <Link to="/melk">
          <button id="melk" className={"Melk" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Melk")}}>
                    <div className='button-wrap'
                          style={{backgroundColor:("Melk" === currentPage ? "#00000000" : "")}}>
            Melk</div>
          </button></Link>
          <Link to="/charm">
          <button id="charm" className={"Charm" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Charm")}}>
                    <div className='button-wrap'
                          style={{backgroundColor:("Charm" === currentPage ? "#00000000" : "")}}>
            Charm</div>
          </button></Link>
          <Link to="/amigo">
          <button id="amigo" className={"Amigo" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Amigo")}}>
                    <div className='button-wrap'
                          style={{backgroundColor:("Amigo" === currentPage ? "#00000000" : "")}}>
            Amigo</div>
          </button></Link>
          <Link to="/septic">
          <button id="septic" className={"Septic" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Septic")}}>
                    <div className='button-wrap'
                          style={{backgroundColor:("Septic" === currentPage ? "#00000000" : "")}}
                          >
            Septic</div>
          </button></Link>
          <Link to="/about">
          <button className={"About" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("About")}}>
            About
          </button></Link>

        </div>
        </div>

        </div> 
        </div>
          

        </div>
        <img width='100%' className='static-background' src = {YT_Banner}/>
        
        <div id="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/draco' element={<Draco />} />
            <Route path='/mukk' element={<Mukk />} />
            <Route path='/melk' element={<Melk />} />
            <Route path='/charm' element={<Charm />} />
            <Route path='/amigo' element={<Amigo />} />
            <Route path='/septic' element={<Septic />} />
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<Err404 />}/>
          </Routes>



        </div>
        <div className='footer'><p>hiiiiiiiii 
          <a href='https://github.com/DracoMeteorStorm/neo-pyrite-website' target='_blank'>
          <img src={gitHubIcon} className='footer-icon'/></a>
        <a href='https://www.youtube.com/@NeoPyriteSpl' target='_blank'>
          <img src={ytIcon} className='footer-icon'/></a>
        <a href='https://x.com/NeoPyriteSPL' target='_blank'>
        <img src={twitterIcon} className='footer-icon'/></a>
          <br></br>
        Twitter, YouTube, Twitch, Tumblr icons created by <a href="https://www.flaticon.com/authors/pixel-perfect" target='_blank'>Pixel perfect</a><br></br>
        Etsy icon created by <a href="https://www.flaticon.com/authors/riajulislam" target='_blank'>riajulislam</a>
        </p>
        <div style={{display:"none"}}>
          <img src={DracoPFP}/>
          <img src={MukkPFP}/>
          <img src={MelkPFP}/>
          <img src={CharmPFP}/>
          <img src={AmigoPFP}/>
          <img src={SepticPFP}/>
          <img src={IconSplash}/>
          <img src={Squid1}/><img src={Squid2}/><img src={Squid3}/><img src={Squid4}/><img src={Squid5}/><img src={Squid6}/><img src={Squid7}/>
        </div>
        
        </div>
    
        

        
 
    </HashRouter>
  );
}

export default App;
