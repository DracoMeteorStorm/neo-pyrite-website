import React, {useState, useEffect, useRef} from 'react';
import dracoClip01 from '../assets/videos/DracoClip01.mp4';
import dracoClip02 from '../assets/videos/DracoClip02.mp4';
import VideoCarousel from './ClipCarousel';
import BioComponent from './MemberBios';


const Draco: React.FC = () => {
  const backgroundColor = '#ae51edf1';
  const videoClipsDraco = [dracoClip01, dracoClip02];
  
  return (
    <div>
      <div className='page-background' style={{backgroundColor}}>
      <div className='content-container'>
      
      <BioComponent page={'Draco'}/>
      <VideoCarousel videoClips={videoClipsDraco}></VideoCarousel>
      </div></div>

      <div className='footer'>hiiiiiiiii</div>
    </div>
  );
};

export default Draco;
