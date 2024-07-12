export interface Bio {
    name: string;
    bio: string;
    color: string;
    weapons: string[];
    socials: string[string[]];
    numSocials: number;
    clips: string[]
    quote: string
  }
  
  export interface Bios {
    [key: string]: Bio;
  }
  