import React, { useState, useEffect, useRef } from 'react';

interface VideoCarouselProps {
  videoClips: string[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videoClips }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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
      currentVideoRef.play();
    }
  }, [currentVideoIndex, isSliding]);

  return (
    <div className='component-container'>
    <div className="video-container">
      {videoClips.map((clip, index) => (
        <video
          key={index}
          ref={(el) => videoRefs.current[index] = el}
          className={`video-element ${index === currentVideoIndex ? (isSliding ? 'exit' : 'active') : ''}`}
          // width="640"
          // height="360"
          muted={true}
          autoPlay={index === currentVideoIndex}
          loop={false}
          controls={false}
        >
          <source src={clip} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div></div>
  );
};

export default VideoCarousel;
