export interface Maps extends Common{
  new: boolean;
  disabled: boolean;
  link: string;
  credit: string;
  environment: Environment;
  gameMode: GameMode;
  lastActive: number;
  dataUpdated: number;
}

interface Common {
  id: number;
  name: string;
  hash: string;
  version: number;
  imageUrl: string;
}

interface GameMode extends Common {
  color: string;
  bgColor: string;
  link: string;
  description:string;
  mode: string;
}

interface Environment extends Common {
  path: string;
}

export interface Stat {
  brawler: number;
  winRate: number;
  useRate: number;
}

export interface MapStat {
  image: string;
  name: string;
  brawlerId: number
}

export interface MapInterface extends Maps {
  stats: MapStat[];
}

export interface MapsNamesInterface {
  'Basket Brawl': Maps[],
  'Big Game': Maps[],
  'Boss Fight': Maps[],
  'Bot Drop': Maps[],
  'Bounty': Maps[],
  'Brawl Ball': Maps[],
  'Duels': Maps[],
  'Duo Showdown': Maps[],
  'Gem Grab': Maps[],
  'Heist': Maps[],
  'Hold The Trophy': Maps[],
  'Hot Zone': Maps[],
  'Hunters': Maps[],
  'Knockout': Maps[],
  'Last Stand': Maps[],
  'Lone Star': Maps[],
  'Payload': Maps[],
  'Pumpkin Plunder': Maps[],
  'Robo Rumble': Maps[],
  'Siege': Maps[],
  'Solo Showdown': Maps[],
  'Super City Rampage': Maps[],
  'Takedown': Maps[],
  'Volley Brawl': Maps[],
  'Wipeout': Maps[],
}