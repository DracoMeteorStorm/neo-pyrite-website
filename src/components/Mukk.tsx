import React, {useState, useEffect, useRef} from 'react';
import VideoCarousel from './BioElements/ClipCarousel';
import BioComponent from './BioElements/MemberBios';
import IconComponent from './BioElements/MemberIcon';
import SocialsComponent from './BioElements/MemberSocials';
import bioData from './BioElements/bios.json'
import { memo } from 'react';


const Mukk: React.FC = () => {
  const backgroundColor = bioData.Mukk.color + "cc";
  const videoClips = bioData.Mukk.clips;
  const pageID = "Mukk";
  

  return (
    <div>

      
      <div className='container-row'>
        <div className='container-col-left'>
<IconComponent page={pageID}/>
        </div>

        <div className='container-col-right'>

<div className='component-container desktop' style={{backgroundColor:bioData.Mukk.color}}>
      <VideoCarousel videoClips={videoClips}></VideoCarousel></div>
      <BioComponent page={pageID}/>
        </div>



      
      
      </div></div>

      
  );
};

export default memo(Mukk);
