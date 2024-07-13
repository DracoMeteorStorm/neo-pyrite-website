import React, { useEffect } from 'react';

const TwitterEmbed: React.FC = () => {
  useEffect(() => {
    // Ensure the script is loaded after the component mounts
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://platform.twitter.com/widgets.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <a
        className="twitter-timeline"
        data-theme="dark"
        data-width="550px"
        data-height="700px"
        href="https://twitter.com/NeoPyriteSPL?ref_src=twsrc%5Etfw"
      >
        Tweets by NeoPyriteSPL
      </a>
    </div>
  );
};

export default TwitterEmbed;
