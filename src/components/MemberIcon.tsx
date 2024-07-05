import React from "react";
import { Bios } from "./bios";
import biosData from "./bios.json"
import waddleguy from "../assets/icons/waddleguy.jpg"


const bios: Bios = biosData;

interface IconComponentProps {
    page: keyof Bios;
  }

  const iconMap: { [key: string]: string } = {
    "Draco": waddleguy
    
  };
  
  const IconComponent: React.FC<IconComponentProps> = ({ page }) => {
    const bioData = bios[page];

  if (!bioData) {
    return <p>Bio not found.</p>;
  }

  const iconSrc = iconMap[bioData.name];
    
    
    return (
        <div className="component-container" style={{backgroundColor:bioData.color}}>
            <img src={iconSrc} className="bio-icon" />
            <h1>{bioData.name}</h1>
        </div>
);
  };
  
  export default IconComponent;