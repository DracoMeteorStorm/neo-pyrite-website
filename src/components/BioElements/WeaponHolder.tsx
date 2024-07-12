import React from "react";
import { Bios } from "./bios";
import biosData from "./bios.json"
import Stamper from "../../assets/badges/SplatanaStamper.png"
import DualieSquelchers from "../../assets/badges/DualieSquelchers.png"
import CharcoalDecavitator from "../../assets/badges/CharcoalDecavitator.png"
import Splattershot from "../../assets/badges/Splattershot.png"
import Squeezer from "../../assets/badges/Squeezer.png"
import RangeBlaster from "../../assets/badges/RangeBlaster.png"
import Ballpoint from "../../assets/badges/Ballpoint.png"
import HeavyEdit from "../../assets/badges/HeavyEdit.png"
import SplatanaWiper from "../../assets/badges/SplatanaWiper.png"
import SplatRoller from "../../assets/badges/SplatRoller.png"
import Slosher from "../../assets/badges/Slosher.png"
import SplatDualies from "../../assets/badges/SplatDualies.png"
import TriStringer from "../../assets/badges/TriStringer.png"
import WellstringV from "../../assets/badges/WellstringV.png"
import SloshingMachine from "../../assets/badges/SloshingMachine.png"


const bios: Bios = biosData;

interface WeaponComponentProps {
    page: keyof Bios;
  }

  const wepMap: { [key: string]: string } = {
    "CharDecav": CharcoalDecavitator,
    "DualSquelch": DualieSquelchers,
    "Stamper": Stamper,
    "VShot": Splattershot,
    "Squeezer": Squeezer,
    "RangeBlast": RangeBlaster,
    "Ballpoint": Ballpoint,
    "HeavyEdit": HeavyEdit,
    "Wiper": SplatanaWiper,
    "Roller": SplatRoller,
    "Slosh": Slosher,
    "Dualie": SplatDualies,
    "Bow": TriStringer,
    "Wellstring": WellstringV,
    "Machine": SloshingMachine


  };
  
  const WeaponComponent: React.FC<WeaponComponentProps> = ({ page }) => {
    const bioData = bios[page];

    
    return (<div>
        {bioData.weapons.map((weapon) => (
          <div className="weapon-container">
        <img src={wepMap[weapon]} alt={weapon} key={weapon} width={"60px"}/></div>))}

    </div>
        
);
  };
  
  export default WeaponComponent;