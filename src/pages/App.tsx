import './App.css'
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Draco from '../components/Draco';
import Mukk from '../components/Mukk';
import Melk from '../components/Melk';
import Amigo from '../components/Amigo';
import Charm from '../components/Charm';
import Septic from '../components/Septic';
import Err404 from '../components/404';
import LogoSmall from '../assets/LogoSmall.png'
import YT_Banner from '../assets/YT_Banner.jpg'
import hamburger from '../assets/sort.png'
import gitHubIcon from '../assets/github-icon.png'
// import BubbleValentine from "../assets/fonts/BubbleValentine.ttf"

const App: React.FC = () => {


  const [currentPage, setCurrentPage] = useState("Home")
  const [menuVisible, setMenuVisible] = useState(true);

  const buttonClick = (newPage: string) => {
      updateButtons(newPage);
      if( window.innerWidth < 1000){
      collapseButtons();}


  }

  const updateButtons = (newPage: string) => {
    newPage !== currentPage ? 
    setCurrentPage(newPage) :
    setCurrentPage(currentPage);


  }

  const handleResize = () => {
    if (window.innerWidth > 1000) {
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

  return (

    <Router>
    
    <div className='App'>
        <div className='header'>
        <div className='container-row' style={{margin:"15px"}}>
          <div className='header-col-left'>
            <img className='header-logo' src= {LogoSmall}/>

            <a href='javascript:void(0);'>
            <img height='50px' className='mobile-only' src={hamburger} onClick={collapseButtons} style={{filter:" invert(100%)",marginBottom:"15px"}}/></a>
            </div>
          
          <div className='header-col-right'>
        

        
                    
        <Link to="/neo-pyrite-website/">
          <button className={"Home" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Home")}}>
                    {/* <div className='button-wrap' style={{backgroundColor:("Home" === currentPage ? "#00000000" : "")}}></div> */}
                    
            Home
            {/* </div> */}
          </button></Link>
          <Link to="/neo-pyrite-website/draco">
            
          <button id="draco" className={"Draco" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Draco")}}>
                    <div className='button-wrap'
                          style={{backgroundColor:("Draco" === currentPage ? "#00000000" : "")}}>                    
            Draco
            </div>
          </button></Link>
          <Link to="/neo-pyrite-website/mukk">
          <button id="mukk" className={"Mukk" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Mukk")}}>
                    <div className='button-wrap'
                          style={{backgroundColor:("Mukk" === currentPage ? "#00000000" : "")}}>
            Mukk</div>
          </button></Link>
          <Link to="/neo-pyrite-website/melk">
          <button id="melk" className={"Melk" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Melk")}}>
                    <div className='button-wrap'
                          style={{backgroundColor:("Melk" === currentPage ? "#00000000" : "")}}>
            Melk</div>
          </button></Link>
          <Link to="/neo-pyrite-website/charm">
          <button id="charm" className={"Charm" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Charm")}}>
                    <div className='button-wrap'
                          style={{backgroundColor:("Charm" === currentPage ? "#00000000" : "")}}>
            Charm</div>
          </button></Link>
          <Link to="/neo-pyrite-website/amigo">
          <button id="amigo" className={"Amigo" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Amigo")}}>
                    <div className='button-wrap'
                          style={{backgroundColor:("Amigo" === currentPage ? "#00000000" : "")}}>
            Amigo</div>
          </button></Link>
          <Link to="/neo-pyrite-website/septic">
          <button id="septic" className={"Septic" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Septic")}}>
                    <div className='button-wrap'
                          style={{backgroundColor:("Septic" === currentPage ? "#00000000" : "")}}
                          >
            Septic</div>
          </button></Link>
          <Link to="/neo-pyrite-website/about">
          <button className={"About" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("About")}}>
                    {/* <div className='button-wrap' style={{backgroundColor:("About" === currentPage ? "#00000000" : "")}}> */}
            About
            {/* </div> */}
          </button></Link>

        </div></div>

        </div>
          

        </div>
        <img width='100%' className='static-background' src = {YT_Banner}/>
        
        <div id="content">
        <Routes>
            <Route path='/neo-pyrite-website/' element={<Home />} />
            <Route path='/neo-pyrite-website/about' element={<About />} />
            <Route path='/neo-pyrite-website/draco' element={<Draco />} />
            <Route path='/neo-pyrite-website/mukk' element={<Mukk />} />
            <Route path='/neo-pyrite-website/melk' element={<Melk />} />
            <Route path='/neo-pyrite-website/charm' element={<Charm />} />
            <Route path='/neo-pyrite-website/amigo' element={<Amigo />} />
            <Route path='/neo-pyrite-website/septic' element={<Septic />} />
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<Err404 />}/>
          </Routes>



        </div>
        <div className='footer'><p>hiiiiiiiii 
          <a href='https://github.com/DracoMeteorStorm/neo-pyrite-website' target='_blank'>
          <img src={gitHubIcon} width={'50px'} style={{justifyContent:"right",float:"right",filter:" invert(100%)",margin:"5px"}}/></a><br></br>
        Social media icons created by <a href="https://www.flaticon.com/authors/pixel-perfect" target='_blank'>Pixel perfect</a><br></br>
        Social media icons created by <a href="https://www.flaticon.com/authors/riajulislam" target='_blank'>riajulislam</a>
        </p>
        </div>
    
        

        
 
    </Router>
  );
}

export default App;
