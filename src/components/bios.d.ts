export interface Bio {
    name: string;
    bio: string;
    color: string;
  }
  
  export interface Bios {
    [key: string]: Bio;
  }
  