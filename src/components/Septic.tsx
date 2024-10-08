import React, {useState, useEffect, useRef} from 'react';
import VideoCarousel from './BioElements/ClipCarousel';
import BioComponent from './BioElements/MemberBios';
import IconComponent from './BioElements/MemberIcon';
import SocialsComponent from './BioElements/MemberSocials';
import { memo } from 'react';

import bioData from './BioElements/bios.json'


const Septic: React.FC = () => {
  const backgroundColor = bioData.Septic.color + "cc";
  const videoClips = bioData.Septic.clips;
  const pageID = "Septic";
  
  

  return (
    <div>

      
      <div className='container-row'>
        <div className='container-col-left'>
<IconComponent page={pageID}/>
        </div>

        <div className='container-col-right'>

<div className='component-container desktop' style={{backgroundColor:bioData.Septic.color}}>
      <VideoCarousel videoClips={videoClips}></VideoCarousel></div>
      <BioComponent page={pageID}/>
        </div>



      
      
      </div></div>

      
  );
};

export default memo(Septic);
