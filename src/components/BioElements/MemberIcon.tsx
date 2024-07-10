import React from "react";
import { Bios } from "./bios";
import biosData from "./bios.json"
import WeaponComponent from "./WeaponHolder";
import waddleguy from "../../assets/icons/waddleguy.jpg"
import iconSplash from "../../assets/Asset 8.png"
import squid1 from "../../assets/squids/Squid1.png"
import squid2 from "../../assets/squids/Squid2.png"
import squid3 from "../../assets/squids/Squid3.png"


const bios: Bios = biosData;

interface IconComponentProps {
    page: keyof Bios;
  }

  const iconMap: { [key: string]: string } = {
    "Draco": waddleguy
    
  };

  const randVal = Math.floor(Math.random()* (3) + 1);
  
  const IconComponent: React.FC<IconComponentProps> = ({ page }) => {
    const bioData = bios[page];

  if (!bioData) {
    return <p>Bio not found.</p>;
  }

  const iconSrc = iconMap[bioData.name];

  const squidMap: { [key:number] : string } = {
    1 : squid1,
    2 : squid2,
    3 : squid3

  }
    
    
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
            <img src={squidMap[randVal]} height={"60px"}/>
          </h1>
            <WeaponComponent page={page}></WeaponComponent>
        </div></div>
);
  };
  
  export default IconComponent;