import suit from '../assets/looks/suit.jpg'
import blazer from '../assets/looks/look-blazer.jpg'
import dress from '../assets/looks/dress.jpg'
import kente from '../assets/looks/kente.jpg'
import avatar from '../assets/looks/avatar.jpg'

// Picks an outfit photo from an event or outfit name (e.g. "Interview", "Classic confidence").
const RULES = [
  [['kente', 'wedding'], kente],
  [['interview', 'funeral', 'classic', 'confidence', 'suit', 'formal'], suit],
  [['date', 'party', 'dinner', 'birthday', 'after-hours', 'elegance', 'dress', 'evening'], dress],
  [['graduation', 'church', 'casual', 'campus', 'everyday', 'modern', 'professional', 'blazer'], blazer],
]

export function lookFor(name = '') {
  const n = name.toLowerCase()
  const match = RULES.find(([words]) => words.some((w) => n.includes(w)))
  return match ? match[1] : null
}

export const avatarPhoto = avatar