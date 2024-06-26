import React, {useState, useEffect, useRef} from 'react';
import dracoClip01 from '../assets/videos/DracoClip01.mp4';
import dracoClip02 from '../assets/videos/DracoClip02.mp4';


const Draco: React.FC = () => {
  const backgroundColor = '#ae51edf1';
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [isTransition, setTransition] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoClips = [dracoClip01, dracoClip02];
  useEffect(() => {
    const handleEnded = () => {
      setTransition(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoClips.length);
        setTransition(false);
      }, 1000); // Matches the duration of the CSS transition
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
      <div className="video-container">
            {videoClips.map((clip, index) => (
              <video
                key={index}
                ref={(el) => el && (videoRefs.current[index] = el)}
                className={`video-element ${index === currentVideoIndex ? (isTransition ? 'hidden' : '') : 'hidden'}`}
                width="640"
                height="360"
                muted={true}
                autoPlay={index === currentVideoIndex}
                loop={false}
                controls = {false}
              >
                <source src={clip} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            ))}
          </div></div></div>

      <div className='footer'>hiiiiiiiii</div>
    </div>
  );
};

export default Draco;
