import React from 'react';
import { Bios } from './bios';
import biosData from './bios.json';


const bios: Bios = biosData;

interface SocialsComponentProps {
  page: keyof Bios;
}

const SocialsComponent: React.FC<SocialsComponentProps> = ({ page }) => {
  const bioData = bios[page];


  return (<div className='component-container' style={{backgroundColor:bioData.color}}>socials holder</div>
    
  );
};

export default SocialsComponent;

