import React from 'react';
import dracoClip01 from '../assets/videos/DracoClip01.mp4';
import dracoClip02 from '../assets/videos/DracoClip02.mp4';

const Draco: React.FC = () => {
  const backgroundColor = '#ae51edf1';
  return (
    <div>
      <div className='page-background' style={{backgroundColor}}>
      <div className='content-container'>
      
      <h1>draco</h1>
      <p>dracoddracodrqacodraco</p>

      


      <video width="640" height="360" muted={true} autoPlay={true} loop={true}>
          <source src={dracoClip01} type='video/mp4'/>
          Your browser does not support the video tag.
      </video>
      <video width="640" height="360" muted={true} autoPlay={true} loop={true}>
          <source src={dracoClip02} type='video/mp4'/>
          Your browser does not support the video tag.
      </video>
       </div></div>

      <div className='footer'>hiiiiiiiii</div>
    </div>
  );
};

export default Draco;
