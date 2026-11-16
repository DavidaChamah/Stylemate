import shirt from '../assets/clothing/shirt.jpg'
import trousers from '../assets/clothing/trousers.jpg'
import sneakers from '../assets/clothing/sneakers.jpg'
import tote from '../assets/clothing/tote.jpg'
import slides from '../assets/clothing/slides.jpg'
import cardigan from '../assets/clothing/cardigan.jpg'
import loafers from '../assets/clothing/loafers.jpg'
import blazer from '../assets/clothing/blazer.jpg'
import localEdit from '../assets/clothing/local-edit.jpg'
import belt from '../assets/beauty/belt.jpg'
import earrings from '../assets/beauty/earrings.jpg'
import burgundyDress from '../assets/looks/dress.jpg'

// Matches a keyword in the item's name to a photo.
const KEYWORDS = [
  ['shirt', shirt],
  ['trouser', trousers],
  ['sneaker', sneakers],
  ['tote', tote],
  ['bag', tote],
  ['slide', slides],
  ['sandal', slides],
  ['cardigan', cardigan],
  ['loafer', loafers],
  ['belt', belt],
  ['earring', earrings],
  ['burgundy', burgundyDress],
  ['formal shoe', loafers],
  ['blazer', blazer],
]

export function photoFor(name = '') {
  const n = name.toLowerCase()
  const match = KEYWORDS.find(([word]) => n.includes(word))
  return match ? match[1] : null
}

export const localEditPhoto = localEdit
