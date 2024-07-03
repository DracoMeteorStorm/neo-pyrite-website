import React from 'react';
import { Bios } from './bios';
import biosData from '../bios.json';


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
    <div className="bio-container">
      <h1>{bioData.name}</h1>
      <p>{bioData.bio}</p>
    </div>
  );
};

export default BioComponent;