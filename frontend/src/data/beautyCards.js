import braids from '../assets/beauty/braids.jpg'
import curls from '../assets/beauty/curls.jpg'
import twists from '../assets/beauty/twists.jpg'
import makeupDark from '../assets/beauty/makeup-dark.jpg'
import makeupGlam from '../assets/beauty/makeup-glam.jpg'
import makeupLight from '../assets/beauty/makeup-light.jpg'
import necklace from '../assets/beauty/necklace.jpg'
import earrings from '../assets/beauty/earrings.jpg'
import ring from '../assets/beauty/ring.jpg'
import bracelet from '../assets/beauty/bracelet.jpg'
import watch from '../assets/beauty/watch.jpg'
import sunglasses from '../assets/beauty/sunglasses.jpg'
import bag from '../assets/beauty/bag.jpg'
import belt from '../assets/beauty/belt.jpg'

export const hairLooks = [
  {
    id: 'braids',
    name: 'Knotless braids',
    image: braids,
    why: 'Lightweight and low-tension, they stay neat for weeks and suit most events.',
  },
  {
    id: 'curls',
    name: 'Natural curls',
    image: curls,
    why: 'Shows off your natural texture and adds volume without much styling time.',
  },
  {
    id: 'twists',
    name: 'Short textured twists',
    image: twists,
    why: 'A polished, low-maintenance option that frames the face and keeps the neck clear.',
  },
]

export const makeupLooks = [
  {
    id: 'warm-radiance',
    name: 'Warm radiance',
    image: makeupDark,
    palette: ['#B16E51', '#7D4938', '#D49B7D', '#A56B49'],
    lip: 'Cocoa-rose nude',
    eyeshadow: 'Bronze + espresso',
    blush: 'Warm terracotta',
    foundation: 'Deep warm or neutral undertones. Swatch at your jawline in daylight.',
  },
  {
    id: 'mauve-soft-glam',
    name: 'Mauve soft glam',
    image: makeupGlam,
    palette: ['#95758A', '#A47968', '#625165', '#D0AFA3'],
    lip: 'Muted mauve',
    eyeshadow: 'Soft taupe',
    blush: 'Muted rose',
    foundation: 'Explore medium olive or neutral undertones. Check the match on your neck.',
  },
  {
    id: 'everyday-glow',
    name: 'Everyday glow',
    image: makeupLight,
    palette: ['#D9A5A0', '#E3C2A0', '#C18D79', '#F0DBCF'],
    lip: 'Sheer pink',
    eyeshadow: 'Champagne shimmer',
    blush: 'Soft peach',
    foundation: 'Try light neutral undertones. Choose coverage that keeps your skin feeling like you.',
  },
]

export const accessoryTypes = ['All', 'Jewelry', 'Watches', 'Eyewear', 'Bags', 'Belts']

export const accessories = [
  { id: 'necklace', name: 'Lunar pendant', type: 'Jewelry', image: necklace, note: 'A delicate focal point for open necklines.' },
  { id: 'earrings', name: 'Everyday gold hoops', type: 'Jewelry', image: earrings, note: 'Easy, polished and goes with almost everything.' },
  { id: 'ring', name: 'Sculptural stacking ring', type: 'Jewelry', image: ring, note: 'Wear one boldly or stack two for texture.' },
  { id: 'bracelet', name: 'Fine chain bracelet', type: 'Jewelry', image: bracelet, note: 'Light enough to layer with a watch.' },
  { id: 'watch', name: 'Leather-strap watch', type: 'Watches', image: watch, note: 'Adds a smart, grounded finish to any outfit.' },
  { id: 'sunglasses', name: 'Tortoiseshell shades', type: 'Eyewear', image: sunglasses, note: 'Warm tones that soften daytime looks.' },
  { id: 'bag', name: 'The city tote', type: 'Bags', image: bag, note: 'Roomy and structured for work or daytime events.' },
  { id: 'belt', name: 'Classic leather belt', type: 'Belts', image: belt, note: 'Defines the waist and ties a look together.' },
]