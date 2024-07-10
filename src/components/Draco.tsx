import React, {useState, useEffect, useRef} from 'react';
import VideoCarousel from './BioElements/ClipCarousel';
import BioComponent from './BioElements/MemberBios';
import IconComponent from './BioElements/MemberIcon';
import SocialsComponent from './BioElements/MemberSocials';
import bioData from './BioElements/bios.json'


const Draco: React.FC = () => {
  const backgroundColor = bioData.Draco.color + "cc";
  const videoClips = bioData.Draco.clips;
  const pageID = "Draco";
  

  return (
    <div>
      <div className='page-background' style={{backgroundColor}}>

      <div className='content-container'>
      
      <div className='container-row'>
        <div className='container-col-left'>
<IconComponent page={pageID}/>
<SocialsComponent page={pageID}></SocialsComponent>
        </div>

        <div className='container-col-right'>
<BioComponent page={pageID}/>
<div className='component-container' style={{backgroundColor:bioData.Draco.color}}>
      <VideoCarousel videoClips={videoClips}></VideoCarousel></div>
      
        </div>



      </div>
      
      
      </div></div>

      
    </div>
  );
};

export default Draco;
