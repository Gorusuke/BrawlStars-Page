export interface BrawlerInterface extends StarPower{
  avatarId: number;
  hash: string;
  fankit: string;
  link: string;
  imageUrl2: string;
  imageUrl3: string;
  class: Class;
  rarity: Rarity;
  unlock: unknown;
  starPowers: StarPower[];
  gadgets: StarPower[];
  videos: unknown[];
}

interface Class {
  id: number;
  name: string;
}

interface Rarity extends Class {
  color: string;
}

export interface StarPower extends Class {
  path: string;
  version: number;
  description: string;
  descriptionHtml: string;
  imageUrl: string;
  released: boolean;
}

export interface AllRarity{
  'Common':  BrawlerInterface[];
  'Rare': BrawlerInterface[];
  'Super Rare': BrawlerInterface[];
  'Epic':  BrawlerInterface[];
  'Mythic': BrawlerInterface[];
  'Legendary': BrawlerInterface[];
}

export interface AllClasses {
  'Damage Dealer': BrawlerInterface[];
  'Tank': BrawlerInterface[];
  'Marksman': BrawlerInterface[];
  'Artillery': BrawlerInterface[];
  'Controller': BrawlerInterface[];
  'Assassin': BrawlerInterface[];
  'Support': BrawlerInterface[];
}