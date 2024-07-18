import React, {useState, useEffect, useRef} from 'react';
import VideoCarousel from './BioElements/ClipCarousel';
import BioComponent from './BioElements/MemberBios';
import IconComponent from './BioElements/MemberIcon';
import SocialsComponent from './BioElements/MemberSocials';
import bioData from './BioElements/bios.json'
import { memo } from 'react';


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
        </div>

        <div className='container-col-right'>

<div className='component-container desktop' style={{backgroundColor:bioData.Draco.color}}>
      <VideoCarousel videoClips={videoClips}></VideoCarousel></div>
      <BioComponent page={pageID}/>
        </div>
        



      </div>
      
      
      </div></div>

      
    </div>
  );
};

export default memo(Draco);
