import { MapStat } from "./maps";

export interface Events {
  active: Active[];
  upcoming: Upcoming[];
}

export interface Upcoming extends Active {
  historyLength?: number;
}

export interface Active {
  slot: Slot;
  predicted: boolean;
  startTime: string;
  endTime: string;
  reward: number;
  map: Map;
  modifier?: null;
}

interface Common {
  id: number;
  name: string;
  hash: string;
}

interface Map extends Common{
  new: boolean;
  disabled: boolean;
  version: number;
  link: string;
  imageUrl: string;
  credit?: string;
  environment: Environment;
  gameMode: GameMode;
  lastActive: number;
  dataUpdated: number;
  stats: MapStat[];
  teamStats: [];
}

interface GameMode extends Common {
  version: number;
  imageUrl: string;
  color: string;
  bgColor: string;
  link: string;
}

interface Environment extends GameMode{
  path: string;
}

interface Slot extends Common {
  emoji: string;
  listAlone: boolean;
  hideable: boolean;
  hideForSlot?: number;
  background?: null;
}