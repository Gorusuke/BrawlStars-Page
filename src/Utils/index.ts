import { BrawlerInterface, AllRarity, AllClasses } from "../interfaces/brawler"
import { GameModes } from "../interfaces/gameModes"
import { Maps, MapsNamesInterface } from "../interfaces/maps"
import { FIRST_BRAWLER_ID, LAST_BRAWLER_ID, PREV, RARITY, URL } from "./constants"

export const getAllBrawlers = async () => {
  const response = await fetch(`${URL}/brawlers`)
  const { list } = await response.json()
  const listSorted = [...list].sort((a: BrawlerInterface, b: BrawlerInterface) => a.id - b.id)
  return listSorted
}

export const getBrawler = async (id: string) => {
  const response = await fetch(`${URL}/brawlers/${id}`)
  return await response.json()
}

export const getAllMaps = async () => {
  const response = await fetch(`${URL}/maps`)
  const { list } = await response.json()
  return list
}

export const getMap = async (id: string) => {
  const response = await fetch(`${URL}/maps/${id}`)
  const map = await response.json()
  const { list: allGameModes }: GameModes = await getAllGameModes()
  const getGameMode = allGameModes.find(gameMode => gameMode.name === map.gameMode.name)
  return {
    ...map,
    stats: map.stats.slice(0, 10),
    gameMode: {
      ...map.gameMode,
      description: getGameMode!.description,
      mode: getGameMode!.title,
    }
  }
}

export const getAllGameModes = async () => {
  const response = await fetch(`${URL}/gamemodes`)
  return await response.json()
}

export const getGameMode = async (id: string) => {
  const response = await fetch(`${URL}/gamemodes/${id}`)
  return await response.json()
}

export const groupByMapsTitle = (data: Maps[]) => {
  const mapsName: MapsNamesInterface = {
    'Basket Brawl': [],
    'Big Game': [],
    'Boss Fight': [],
    'Bot Drop': [],
    'Bounty': [],
    'Brawl Ball': [],
    'Duels': [],
    'Duo Showdown': [],
    'Gem Grab': [],
    'Heist': [],
    'Hold The Trophy': [],
    'Hot Zone': [],
    'Hunters': [],
    'Knockout': [],
    'Last Stand': [],
    'Lone Star': [],
    'Payload': [],
    'Pumpkin Plunder': [],
    'Robo Rumble': [],
    'Siege': [],
    'Solo Showdown': [],
    'Super City Rampage': [],
    'Takedown': [],
    'Volley Brawl': [],
    'Wipeout': [],
  }
  const dataSorted = [...data].sort((a: Maps, b: Maps) => a.gameMode.name > b.gameMode.name ? 1 : -1)
  dataSorted.forEach(map => {
    mapsName[map.gameMode.name as keyof MapsNamesInterface].push(map)
  })
  return mapsName
}

export const filterBrawlers = (data: BrawlerInterface[], text: string) => {
  if (text.length) {
    return data.filter(brawl => brawl.name.toLowerCase().includes(text.toLowerCase()))
  }
  return data
}

export const filterByType = (data: BrawlerInterface[], text: string) => {
  const allRarity: AllRarity = {
    'Common':  [],
    'Rare': [],
    'Super Rare': [],
    'Epic':  [],
    'Mythic': [],
    'Legendary': []
  }
  const allClasses: AllClasses = {
    'Damage Dealer':  [],
    'Tank':  [],
    'Marksman':  [],
    'Artillery':  [],
    'Controller':  [],
    'Assassin':  [],
    'Support':  [],
  }
  data.forEach(brawler => {
    allRarity[brawler.rarity.name as keyof AllRarity].push(brawler)
    allClasses[brawler.class.name as keyof AllClasses].push(brawler)
  })
  if (text === RARITY) return allRarity
  return allClasses
}

export const linkRouter = (
  step: string, params: { id?: string }, navigate: (arg: string) => void
) => {
  const url = location.origin
  if (step === PREV) {
    if (params.id === (Number(FIRST_BRAWLER_ID) - 1).toString()) {
      params.id = LAST_BRAWLER_ID
      navigate(`${url}/brawler/${LAST_BRAWLER_ID}`)
      return `/brawler/${Number(params.id) - 1}`
    }
    return `/brawler/${Number(params.id) - 1}`      
  } else {
    if (params.id === (Number(LAST_BRAWLER_ID) + 1).toString()) {
      params.id = FIRST_BRAWLER_ID
      navigate(`${url}/brawler/${FIRST_BRAWLER_ID}`)
      return `/brawler/${Number(params.id) + 1}`
    }
    return `/brawler/${Number(params.id) + 1}`
  }
}
