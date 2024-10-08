import React, {useState, useEffect, useRef} from 'react';
import VideoCarousel from './BioElements/ClipCarousel';
import BioComponent from './BioElements/MemberBios';
import IconComponent from './BioElements/MemberIcon';
import SocialsComponent from './BioElements/MemberSocials';
import bioData from './BioElements/bios.json'
import { memo } from 'react';



const Melk: React.FC = () => {
  const backgroundColor = bioData.Melk.color + "cc";
  const videoClips = bioData.Melk.clips;
  const pageID = "Melk";
  

  return (
    <div>

      
      <div className='container-row'>
        <div className='container-col-left'>
<IconComponent page={pageID}/>
        </div>

        <div className='container-col-right'>

<div className='component-container yt' style={{backgroundColor:bioData.Melk.color}}>
      <div className='yt-vid-container'>
      <iframe width={"100%"} height={"100%"} src="https://www.youtube.com/embed/BDIRQZt4kgw?si=CfOZiofrb-3XaBtO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      </div>
      <BioComponent page={pageID}/>
        </div>



      
      
      </div></div>

      
  );
};

export default memo(Melk);
