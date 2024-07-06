export interface Bio {
    name: string;
    bio: string;
    color: string;
    weapons: string[];
  }
  
  export interface Bios {
    [key: string]: Bio;
  }
  