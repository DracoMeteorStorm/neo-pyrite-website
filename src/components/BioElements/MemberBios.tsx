import React from 'react';
import { Bios } from './bios';
import biosData from './bios.json';


const bios: Bios = biosData;

interface BioComponentProps {
  page: keyof Bios;
}

const BioComponent: React.FC<BioComponentProps> = ({ page }) => {
  const bioData = bios[page];

  if (!bioData) {
    return <p>Bio not found.</p>;
  }

  return (
    <div className='component-container' style={{backgroundColor:bioData.color,padding:"30px",fontSize:"20px"}}>
    <div className="bio-container">
      <p>{bioData.bio}</p>
    </div></div>
  );
};

export default BioComponent;

