export const FILTER_TABS = [
  'ALL',
  'DAILY STUDS',
  'ANTI-TARNISH HOOPS',
  'STATEMENT DROPS',
]

export const BUSINESS_PHONE = {
  display: '+91 9876543210',
}

export const INSTAGRAM_URL = 'https://www.instagram.com/zelvora_lifestyle/'

export const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com'

export const products = [
  {
    id: 'zv-stud-01',
    name: 'Pearl Whisper Daily Studs',
    originalPrice: 249,
    sellingPrice: 149,
    category: 'DAILY STUDS',
    tag: 'Best Seller',
    imageUrl:
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-stud-02',
    name: 'Barely-There Gold Dot Studs',
    originalPrice: 269,
    sellingPrice: 169,
    category: 'DAILY STUDS',
    tag: 'Best Seller',
    imageUrl:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-stud-03',
    name: 'Ivory Knot Minimal Studs',
    originalPrice: 299,
    sellingPrice: 189,
    category: 'DAILY STUDS',
    tag: 'Festive Drop',
    imageUrl:
      'https://images.unsplash.com/photo-1535632786780-7b8a0e87f0a0?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-stud-04',
    name: 'Soft Rose Disc Studs',
    originalPrice: 279,
    sellingPrice: 179,
    category: 'DAILY STUDS',
    tag: 'Best Seller',
    imageUrl:
      'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-hoop-01',
    name: 'Luna Anti-Tarnish Hoops',
    originalPrice: 299,
    sellingPrice: 199,
    category: 'ANTI-TARNISH HOOPS',
    tag: 'Best Seller',
    imageUrl:
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-hoop-02',
    name: 'Western Slim Loop Hoops',
    originalPrice: 329,
    sellingPrice: 219,
    category: 'ANTI-TARNISH HOOPS',
    tag: 'Festive Drop',
    imageUrl:
      'https://images.unsplash.com/photo-1605100804763-247f995fff84?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-hoop-03',
    name: 'Champagne Tube Hoops',
    originalPrice: 349,
    sellingPrice: 249,
    category: 'ANTI-TARNISH HOOPS',
    tag: 'Best Seller',
    imageUrl:
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-hoop-04',
    name: 'Satin Twist Everyday Hoops',
    originalPrice: 339,
    sellingPrice: 229,
    category: 'ANTI-TARNISH HOOPS',
    tag: 'Festive Drop',
    imageUrl:
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-drop-01',
    name: 'Aurora Statement Drop Earrings',
    originalPrice: 399,
    sellingPrice: 279,
    category: 'STATEMENT DROPS',
    tag: 'Festive Drop',
    imageUrl:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-drop-02',
    name: 'Saffron Cascade Party Drops',
    originalPrice: 449,
    sellingPrice: 329,
    category: 'STATEMENT DROPS',
    tag: 'Festive Drop',
    imageUrl:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-drop-03',
    name: 'Noir Crystal Statement Drops',
    originalPrice: 499,
    sellingPrice: 349,
    category: 'STATEMENT DROPS',
    tag: 'Best Seller',
    imageUrl:
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-drop-04',
    name: 'Amber Lattice Party Drops',
    originalPrice: 429,
    sellingPrice: 299,
    category: 'STATEMENT DROPS',
    tag: 'Best Seller',
    imageUrl:
      'https://images.unsplash.com/photo-1603561596112-0a132b757784?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
]

/**
 * Expandable delivery zones. Add a city with isActive: true to go live.
 */
export const activeDeliveryZones = [
  {
    city: 'Indore',
    isActive: true,
    areas: [
      'Bhawarkua',
      'Vijay Nagar',
      'Mari Mata',
      'Palasia',
      'Sapna Sangeeta',
      'Rajendra Nagar',
      'New Palasia',
      'Scheme 54',
      'AB Road',
      'Tallaiya',
    ],
    pincodes: [
      '452001',
      '452002',
      '452003',
      '452005',
      '452006',
      '452007',
      '452008',
      '452009',
      '452010',
      '452011',
      '452012',
      '452014',
      '452015',
      '452016',
      '452018',
      '452020',
    ],
  },
]

export const EXPANSION_WAITLIST_MESSAGE =
  'We are currently delivering to our exclusive launch circles only. We are expanding rapidly—Pan-India delivery lines are opening soon! Stay tuned.'

export function getActiveLocationSuggestions() {
  return activeDeliveryZones
    .filter((zone) => zone.isActive)
    .flatMap((zone) =>
      zone.areas.map((area) => ({
        label: area,
        city: zone.city,
      })),
    )
}

export function verifyDeliveryLocation(rawInput) {
  const input = rawInput.trim()
  if (!input) {
    return { ok: false, reason: 'empty' }
  }

  const normalized = input.toLowerCase()
  const activeZones = activeDeliveryZones.filter((zone) => zone.isActive)

  for (const zone of activeZones) {
    if (zone.city.toLowerCase() === normalized) {
      return {
        ok: true,
        city: zone.city,
        area: zone.city,
        displayLabel: zone.city,
      }
    }

    const matchedArea = zone.areas.find((area) => {
      const areaKey = area.toLowerCase()
      return (
        areaKey === normalized ||
        areaKey.includes(normalized) ||
        normalized.includes(areaKey)
      )
    })

    if (matchedArea) {
      return {
        ok: true,
        city: zone.city,
        area: matchedArea,
        displayLabel: `${matchedArea}, ${zone.city}`,
      }
    }

    const matchedPincode = zone.pincodes?.find(
      (pin) => pin === normalized || normalized.includes(pin),
    )

    if (matchedPincode) {
      return {
        ok: true,
        city: zone.city,
        area: matchedPincode,
        displayLabel: `${zone.city} ${matchedPincode}`,
      }
    }
  }

  return { ok: false, reason: 'unavailable' }
}

export const ACTIVE_LOCATION_SUGGESTIONS = getActiveLocationSuggestions()
