export const FILTER_TABS = [
  'ALL',
  'MINIMAL CHAINS',
  'KOREAN EARRINGS',
  'ANTI-TARNISH HOOPS',
  'STATEMENT DROPS',
  'LIFESTYLE ACCENTS',
]

export const BUSINESS_PHONE = {
  display: '+91 9131767938',
  tel: '+919131767938',
}

export const INSTAGRAM_URL =
  'https://www.instagram.com/zelvora_lifestyle?utm_source=qr&stkn=MnJxeGVpN3Bubmoy'

export const WHATSAPP_CHANNEL_URL =
  'https://whatsapp.com/channel/0029Vb8Z5CdA2pL9ZngNks2i'

export const products = [
  {
    id: 'zv-001',
    name: 'Luxe Anti-Tarnish Butterfly Pendant Chain',
    originalPrice: 499,
    sellingPrice: 249,
    category: 'MINIMAL CHAINS',
    tag: 'Stainless Steel',
    imageUrl:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-002',
    name: 'Parisian Eiffel Tower Minimalist Necklace',
    originalPrice: 499,
    sellingPrice: 249,
    category: 'MINIMAL CHAINS',
    tag: 'Premium Polish',
    imageUrl:
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-003',
    name: 'Korean Metallic Blossom Bow Studs',
    originalPrice: 299,
    sellingPrice: 149,
    category: 'KOREAN EARRINGS',
    tag: 'Aesthetic Core',
    imageUrl:
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-004',
    name: 'Sleek Anti-Tarnish Daily Hoops Set',
    originalPrice: 299,
    sellingPrice: 199,
    category: 'ANTI-TARNISH HOOPS',
    tag: 'Everyday Essential',
    imageUrl:
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-005',
    name: 'Traditional Ghungroo Festive Jhumka',
    originalPrice: 499,
    sellingPrice: 299,
    category: 'STATEMENT DROPS',
    tag: 'Festive Drop',
    imageUrl:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-006',
    name: 'Premium Satin Silk Scrunchies Pack',
    originalPrice: 199,
    sellingPrice: 99,
    category: 'LIFESTYLE ACCENTS',
    tag: 'Ultra Soft',
    imageUrl:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  },
  {
    id: 'zv-007',
    name: 'Aesthetic Pastel Resin Bangle Collective',
    originalPrice: 399,
    sellingPrice: 199,
    category: 'LIFESTYLE ACCENTS',
    tag: 'Trendy Statement',
    imageUrl:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80',
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
