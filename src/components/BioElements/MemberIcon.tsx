import React from "react";
import { Bios } from "./bios";
import biosData from "./bios.json"
import WeaponComponent from "./WeaponHolder";
import waddleguy from "../../assets/icons/waddleguy.jpg"
import iconSplash from "../../assets/Asset 8.png"
import smallSquid from "../../assets/Asset 10.png"


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

      <div>
        <div className="component-container alt">
            <img src={iconSplash} className="icon-splash"/>
            <img src={iconSrc} className="bio-icon" />

        </div>
        {/* <div className="component-container" style={{backgroundColor:bioData.color}}>

          
        </div> */}
        <div className="component-container" style={{backgroundColor:bioData.color}}>
            
            <h1 className="player-name">{bioData.name + " "}
            <img src={smallSquid} height={"60px"}/>
          </h1>
            <WeaponComponent page={page}></WeaponComponent>
        </div></div>
);
  };
  
  export default IconComponent;