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
    "Stamper": "https://cdn.wikimg.net/en/splatoonwiki/images/2/2c/S3_Badge_Splatana_Stamper_4.png?20220918134239",
    "VShot": "https://cdn.wikimg.net/en/splatoonwiki/images/d/d4/S3_Badge_Splattershot_4.png?20220918134241",
    "Squeezer": "https://cdn.wikimg.net/en/splatoonwiki/images/b/b1/S3_Badge_Squeezer_4.png?20220918134243",
    "RangeBlast": "https://cdn.wikimg.net/en/splatoonwiki/images/7/74/S3_Badge_Range_Blaster_4.png?20220918134222",
    "Ballpoint": "https://cdn.wikimg.net/en/splatoonwiki/images/c/c9/S3_Badge_Ballpoint_Splatling_4.png?20220918134138",
    "HeavyEdit": "https://cdn.wikimg.net/en/splatoonwiki/images/e/e8/S3_Badge_Heavy_Edit_Splatling_4.png?20230831161501",
    "Wiper": "https://cdn.wikimg.net/en/splatoonwiki/images/4/4b/S3_Badge_Splatana_Wiper_4.png?20220918134239",
    "Roller": "https://cdn.wikimg.net/en/splatoonwiki/images/3/3a/S3_Badge_Splat_Roller_4.png?20220918134238",
    "Slosh": "https://cdn.wikimg.net/en/splatoonwiki/images/5/57/S3_Badge_Slosher_4.png?20220918134231",
    "Dualie": "https://cdn.wikimg.net/en/splatoonwiki/images/0/0e/S3_Badge_Splat_Dualies_4.png?20220918134237",
    "Bow": "https://cdn.wikimg.net/en/splatoonwiki/images/3/34/S3_Badge_Tri-Stringer_4.png?20220918134257",
    "Wellstring": "https://cdn.wikimg.net/en/splatoonwiki/images/6/61/S3_Badge_Wellstring_V_4.png?20240601023026"


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