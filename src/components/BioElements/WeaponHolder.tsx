import React from "react";
import { Bios } from "./bios";
import biosData from "./bios.json"


const bios: Bios = biosData;

interface WeaponComponentProps {
    page: keyof Bios;
  }

  const wepMap: { [key: string]: string } = {
    "CharDecav": "https://cdn.wikimg.net/en/splatoonwiki/images/3/3f/S3_Badge_Charcoal_Decavitator_4.png?20240601022921",
    "DualSquelch": "https://cdn.wikimg.net/en/splatoonwiki/images/d/d5/S3_Badge_Dualie_Squelchers_4.png?20220918134153",
    "Stamper": "https://cdn.wikimg.net/en/splatoonwiki/images/2/2c/S3_Badge_Splatana_Stamper_4.png?20220918134239"

  };
  
  const WeaponComponent: React.FC<WeaponComponentProps> = ({ page }) => {
    const bioData = bios[page];

    
    return (<div>
        {bioData.weapons.map((weapon) => (
          <div className="weapon-container">
        <img src={wepMap[weapon]} alt={weapon} key={weapon} width={"50px"}/></div>))}

    </div>
        
);
  };
  
  export default WeaponComponent;