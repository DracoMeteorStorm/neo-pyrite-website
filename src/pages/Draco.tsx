import React, {useState, useEffect, useRef} from 'react';
import dracoClip01 from '../assets/videos/DracoClip01.mp4';
import dracoClip02 from '../assets/videos/DracoClip02.mp4';
import { Clip } from '../components/VideoData';

const Draco: React.FC = () => {
  const backgroundColor = '#ae51edf1';
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoClips = [dracoClip01, dracoClip02];

  useEffect(() => {
    const handleEnded = () => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoClips.length);
    };

    const currentVideoRef = videoRefs.current[currentVideoIndex];
    currentVideoRef.addEventListener('ended', handleEnded);

    return () => {
      currentVideoRef.removeEventListener('ended', handleEnded);
    };
  }, [currentVideoIndex, videoClips.length]);
  return (
    <div>
      <div className='page-background' style={{backgroundColor}}>
      <div className='content-container'>
      
      <h1>draco</h1>
      <p>dracoddracodrqacodraco</p>

      <video ref={(el) => el && (videoRefs.current[currentVideoIndex] = el)}
      width="640"
      height="360"
      muted={true}
      autoPlay={true}
      loop={false}
      controls={false}
      key={currentVideoIndex}
      >
          <source src={videoClips[currentVideoIndex]} type='video/mp4'/>
          Your browser does not support the video tag.
      </video>
       </div></div>

      <div className='footer'>hiiiiiiiii</div>
    </div>
  );
};

export default Draco;
