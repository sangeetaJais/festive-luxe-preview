import { useMemo, useState } from 'react'
import { FILTER_TABS, products } from '../data/products'
import { buildWhatsAppOrderUrl } from '../utils/whatsapp'

const INITIAL_VISIBLE = 8
const PAGE_SIZE = 8

function ProductCard({ product, checkoutUnlocked, locationArea, onRequireLocation }) {
  const handleOrder = () => {
    if (!checkoutUnlocked) {
      onRequireLocation()
      return
    }

    const url = buildWhatsAppOrderUrl(product, locationArea)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden border border-charcoal/10 bg-white">
      <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-cream/40 md:h-[320px]">
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <span className="absolute left-2 top-2 bg-white/95 px-2 py-1 text-[8px] font-medium uppercase tracking-[0.18em] text-charcoal md:left-3 md:top-3 md:px-2.5 md:text-[9px] md:tracking-[0.2em]">
          {product.tag}
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex flex-1 flex-col px-2.5 pt-3 md:px-4 md:pt-4">
          <p className="shrink-0 text-[9px] font-medium uppercase tracking-[0.18em] text-charcoal/45 md:text-[10px] md:tracking-[0.2em]">
            {product.category}
          </p>

          <h3 className="mt-1 h-[40px] overflow-hidden font-serif text-sm leading-5 text-charcoal line-clamp-2 md:mt-1.5 md:h-[48px] md:text-lg md:leading-6">
            {product.name}
          </h3>

          <div className="mt-1.5 flex shrink-0 items-baseline md:mt-2">
            <span className="text-sm font-semibold tracking-wide text-[#2C2C2C] md:text-lg">
              ₹{product.sellingPrice}
            </span>
            <span className="ml-1.5 text-xs text-gray-400 line-through md:ml-2 md:text-sm">
              ₹{product.originalPrice}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleOrder}
          className="mt-4 flex w-full shrink-0 items-center justify-center gap-1.5 bg-charcoal px-3 py-3 text-[10px] font-medium uppercase tracking-wider text-white transition-opacity duration-300 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold md:mt-5 md:gap-2 md:py-3.5 md:text-xs"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-3.5 w-3.5 shrink-0 md:h-4 md:w-4"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.15 6.36 2.15 11.72c0 1.92.54 3.79 1.57 5.44L2 22l5.02-1.63a10.1 10.1 0 0 0 5.02 1.35h.01c5.46 0 9.89-4.36 9.89-9.72C21.94 6.36 17.5 2 12.04 2Zm5.77 13.76c-.24.67-1.39 1.28-1.92 1.36-.49.08-1.12.11-1.81-.11-.42-.14-.96-.31-1.65-.61-2.9-1.25-4.79-4.18-4.93-4.37-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.55c.18 0 .42-.05.65.5.24.57.81 1.97.88 2.11.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.52 1.89 1.05.93 1.93 1.22 2.21 1.36.28.14.44.12.6-.07.17-.19.7-.81.89-1.09.19-.28.38-.23.64-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.69-.17 1.36Z" />
          </svg>
          Order via WhatsApp
        </button>
      </div>
    </article>
  )
}

export default function ProductGrid({
  checkoutUnlocked,
  locationArea,
  onRequireLocation,
}) {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [itemsToShow, setItemsToShow] = useState(INITIAL_VISIBLE)
  const [revealFrom, setRevealFrom] = useState(0)

  const filteredProducts = useMemo(() => {
    const available = products.filter((item) => item.isAvailable)

    if (activeFilter === 'ALL') {
      return available
    }

    return available.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  const visibleProducts = filteredProducts.slice(0, itemsToShow)
  const hasMore = filteredProducts.length > itemsToShow
  const remainingCount = filteredProducts.length - itemsToShow

  const handleFilterChange = (tab) => {
    setActiveFilter(tab)
    setItemsToShow(INITIAL_VISIBLE)
    setRevealFrom(0)
  }

  const handleLoadMore = () => {
    setRevealFrom(itemsToShow)
    setItemsToShow((prev) =>
      Math.min(prev + PAGE_SIZE, filteredProducts.length),
    )
  }

  return (
    <section id="collection" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-10 flex flex-col items-start justify-between gap-8 sm:mb-12 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <h2
            className="font-serif text-2xl uppercase text-charcoal sm:text-3xl md:text-4xl"
            style={{ letterSpacing: '3px' }}
          >
            The Inaugural Collective
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal/60 sm:text-[15px]">
            Explore handpicked, premium everyday essentials and festive statements.
            Every piece is meticulously curated for our community, with seamless
            door-step delivery verified for your local neighborhood.
          </p>
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Earring sub-categories"
        >
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleFilterChange(tab)}
                className={`border px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] transition sm:px-4 sm:text-[11px] sm:tracking-[0.16em] ${
                  isActive
                    ? 'border-charcoal bg-charcoal text-white'
                    : 'border-charcoal/20 bg-white/70 text-charcoal/70 hover:border-charcoal/40 hover:text-charcoal'
                }`}
              >
                {tab}
              </button>
            )
          })}
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="py-16 text-center font-serif text-xl text-charcoal/50">
          No pieces in this category right now.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-2 items-stretch gap-2.5 sm:gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6">
            {visibleProducts.map((product, index) => (
              <div
                key={product.id}
                className={`h-full ${
                  revealFrom > 0 && index >= revealFrom ? 'animate-fade-in' : ''
                }`}
              >
                <ProductCard
                  product={product}
                  checkoutUnlocked={checkoutUnlocked}
                  locationArea={locationArea}
                  onRequireLocation={onRequireLocation}
                />
              </div>
            ))}
          </div>

          {hasMore ? (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="border border-[#2C2C2C] bg-transparent px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal transition-all duration-300 ease-out hover:delay-75 hover:bg-[#2C2C2C] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {remainingCount > PAGE_SIZE
                  ? 'View More Options'
                  : 'Explore All Designs →'}
              </button>
            </div>
          ) : null}
        </>
      )}
    </section>
  )
}
