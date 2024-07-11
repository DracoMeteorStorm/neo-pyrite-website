import './App.css'
import React, { useState } from 'react';
import fg_beta_logo from './assets/fg_beta_logo.png';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Draco from '../components/Draco';
import Mukk from '../components/Mukk';
import Melk from '../components/Melk';
import Amigo from '../components/Amigo';
import Charm from '../components/Charm';
import Septic from '../components/Septic';
import LogoSmall from '../assets/LogoSmall.png'
import YT_Banner from '../assets/YT_Banner.jpg'
import hamburger from '../assets/sort.png'
import gitHubIcon from '../assets/github-icon.png'

const App: React.FC = () => {


  const [currentPage, setCurrentPage] = useState("Home")
  const [menuVisible, setMenuVisible] = useState(true);

  const buttonClick = (newPage: string) => {
      updateButtons(newPage);
      collapseButtons();


  }

  const updateButtons = (newPage: string) => {
    newPage !== currentPage ? 
    setCurrentPage(newPage) :
    setCurrentPage(currentPage);


  }
  const collapseButtons = () =>{
setMenuVisible(!menuVisible);


if(document.documentElement.clientWidth > 1000){
  setMenuVisible(menuVisible);
}

  }

  return (

    <Router>
    
    <div className='App'>
        <div className='header'>
        <div className='container-row' style={{margin:"15px"}}>
          <div className='container-col-left' style={{width:"15%"}}>
            <img width='100%' src= {LogoSmall}/>

            <a href='javascript:void(0);'>
            <img height='50px' className='mobile-only' src={hamburger} onClick={collapseButtons}/></a>
            </div>
          
          <div className='container-col-right' style={{width:"85%",transition:(".2s ease"),alignContent:"center"}}>
        

        
                    
        <Link to="/neo-pyrite-website/">
          <button className={"Home" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Home")}}>
            Home
          </button></Link>
          <Link to="/neo-pyrite-website/draco">
          <button className={"Draco" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Draco")}}>
            Draco
          </button></Link>
          <Link to="/neo-pyrite-website/mukk">
          <button className={"Mukk" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Mukk")}}>
            Mukk
          </button></Link>
          <Link to="/neo-pyrite-website/melk">
          <button className={"Melk" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Melk")}}>
            Melk
          </button></Link>
          <Link to="/neo-pyrite-website/charm">
          <button className={"Charm" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Charm")}}>
            Charm
          </button></Link>
          <Link to="/neo-pyrite-website/amigo">
          <button className={"Amigo" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Amigo")}}>
            Amigo
          </button></Link>
          <Link to="/neo-pyrite-website/septic">
          <button className={"Septic" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("Septic")}}>
            Septic
          </button></Link>
          <Link to="/neo-pyrite-website/about">
          <button className={"About" !== currentPage ? 'header-buttons' : 'header-buttons current'}
                  style={{display:(menuVisible ? 'inline-flex' : 'none')}} 
                  onClick={()=>{buttonClick("About")}}>
            About
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
          </Routes>



        </div>
        <div className='footer'><p>hiiiiiiiii
          <a href='https://github.com/DracoMeteorStorm/neo-pyrite-website' target='_blank'>
          <img src={gitHubIcon} width={'75px'} style={{justifyContent:"right",float:"right",filter:" invert(100%)",margin:"5px"}}/></a></p>
        </div>
    
        

        
 
    </Router>
  );
}

export default App;
