import React from "react";
import { Bios } from "./bios";
import biosData from "./bios.json"
import CharcoalDecavitator from "../../assets/badges/CharcoalDecavitator.png"
import DualieSquelchers from "../../assets/badges/DualieSquelchers.png"
import SplatanaStamper from "../../assets/badges/SplatanaStamper.png"



const bios: Bios = biosData;

interface WeaponComponentProps {
    page: keyof Bios;
  }

  const wepMap: { [key: string]: string } = {
    "CharDecav": CharcoalDecavitator,
    "DualSquelch": DualieSquelchers,
    "Stamper": SplatanaStamper

  };
  
  const WeaponComponent: React.FC<WeaponComponentProps> = ({ page }) => {
    const bioData = bios[page];

    
    return (<div>
        {bioData.weapons.map((weapon) => (
        <img src={wepMap[weapon]} alt={weapon} key={weapon} width={"50px"}/>))}

    </div>
        
);
  };
  
  export default WeaponComponent;