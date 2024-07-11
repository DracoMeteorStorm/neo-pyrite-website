import React from 'react';
import { Bios } from './bios';
import biosData from './bios.json';


const bios: Bios = biosData;

interface SocialsComponentProps {
  page: keyof Bios;
}

const SocialsComponent: React.FC<SocialsComponentProps> = ({ page }) => {
  const bioData = bios[page];


  return (<div className='component-container' style={{backgroundColor:bioData.color}}>
    {bioData.socials.map((sm: string[]) => (
      <a href={sm[1]} target='_blank'>{sm[0]}</a>

    ))}

  </div>
    
  );
};

export default SocialsComponent;

