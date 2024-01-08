import { BrawlerInterface, AllRarity, AllClasses } from "../interfaces/brawler"
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

export const filterBrawlers = (data: BrawlerInterface[], text: string) => {
  if (text.length) {
    return data.filter(brawl => brawl.name.toLowerCase().includes(text.toLowerCase()))
  }
  return data
}

export const FilterByType = (data: BrawlerInterface[], text: string) => {
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
