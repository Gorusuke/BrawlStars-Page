export interface GameModes { 
  list: GameMode[]
}

export interface GameMode {
  id: number;
  scId: number;
  name: string;
  hash: string;
  scHash: string;
  disabled: boolean;
  color: string;
  bgColor: string;
  version: number;
  title: string;
  tutorial: string;
  description: string;
  shortDescription: string;
  sort1: number;
  sort2: number;
  link: string;
  imageUrl: string;
  imageUrl2: string;
  lastActive: number;
}