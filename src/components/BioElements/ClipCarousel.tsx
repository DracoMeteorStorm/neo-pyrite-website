import React, { useState, useEffect, useRef } from 'react';


interface VideoCarouselProps {
  videoClips: string[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videoClips }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [isLargeViewport, setIsLargeViewport] = useState(window.innerWidth > 1024);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeViewport(window.innerWidth > 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleEnded = () => {
      setIsSliding(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoClips.length);
        setIsSliding(false);
      }, 500);
    };

    const currentVideoRef = videoRefs.current[currentVideoIndex];
    if (currentVideoRef) {
      currentVideoRef.addEventListener('ended', handleEnded);
    }

    return () => {
      if (currentVideoRef) {
        currentVideoRef.removeEventListener('ended', handleEnded);
      }
    };
  }, [currentVideoIndex, videoClips.length]);

  useEffect(() => {
    const currentVideoRef = videoRefs.current[currentVideoIndex];
    if (currentVideoRef) {
      currentVideoRef.currentTime = 0;
      if (isLargeViewport) {
        currentVideoRef.play();
    }}
    videoRefs.current.forEach((videoRef) => {
      if (videoRef) {
        videoRef.muted = true;
      }
    });
  }, [currentVideoIndex, isSliding, isLargeViewport]);



  const handleSelectVideo = (index: number) => {
    setCurrentVideoIndex(index);
  };

  return (
    <>
    <div className="video-container">
      {videoClips.map((clip, index) => (
        <video
          key={index}
          ref={(el) => videoRefs.current[index] = el}
          className={`video-element ${index === currentVideoIndex ? (isSliding ? 'exit' : 'active') : ''}`}
          muted={index === currentVideoIndex}
          autoPlay={(index === currentVideoIndex) && (isLargeViewport)}
          loop={false}
          controls={true}
        >
          <source src={clip} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
    <div style={{marginTop:"20px"}}>
        {videoClips.map((clip, index)=>(
          <div 
          key={index}
          className={index===currentVideoIndex? 'weapon-container clip current' : "weapon-container clip"}
          style={{height:"20px",width:"70px"}}
          onClick={() => handleSelectVideo(index)}></div>
        ))}
    </div>
    </>
    
    
  );
};

export default VideoCarousel;
