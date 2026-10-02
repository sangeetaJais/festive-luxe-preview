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
    <article className="group flex h-full min-w-0 flex-col overflow-hidden border border-[#2C2C2C]/12 bg-white">
      <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-cream md:h-[320px]">
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
       {/* Right-Aligned Conditional Tag Display */}
        {product.tag && (
          <span className="absolute right-2 top-2 bg-white/95 px-2 py-1 text-[8px] font-medium uppercase tracking-[0.18em] text-[#2C2C2C] md:right-3 md:top-3 md:px-2.5 md:text-[9px] md:tracking-[0.2em] shadow-sm">
            {product.tag}
          </span>
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex flex-1 flex-col px-2.5 pt-3 md:px-4 md:pt-4">
          <p className="shrink-0 text-[9px] font-medium uppercase tracking-[0.18em] text-[#2C2C2C]/45 md:text-[10px] md:tracking-[0.2em]">
            {product.category}
          </p>

          <h3 className="mt-1 h-[40px] overflow-hidden font-serif text-sm leading-5 text-[#2C2C2C] line-clamp-2 md:mt-1.5 md:h-[48px] md:text-lg md:leading-6">
            {product.name}
          </h3>

          <div className="mt-1.5 flex shrink-0 items-baseline md:mt-2 mb-3">
            <span className="text-sm font-semibold tracking-wide text-[#2C2C2C] md:text-lg">
              {product.sellingPrice}
            </span>
            <span className="ml-1.5 text-xs text-gray-400 line-through md:ml-2 md:text-sm">
              {product.originalPrice}
            </span>
          </div>
        </div>

       {/* Dynamic Button Layer: Hand-crafted logic for Order vs Sold Out */}
{product.isAvailable ? (
  /* State 1: Active Button (Order via WhatsApp) */
  <button
    type="button"
    onClick={handleOrder}
    className="mt-auto flex w-full shrink-0 items-center justify-center gap-1.5 bg-[#2C2C2C] px-3 py-3 text-[10px] font-medium uppercase tracking-wider text-white transition-opacity duration-300 hover:opacity-85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A880] md:gap-2 md:py-3.5 md:text-xs"
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
) : (
  /* State 2: Locked Disabled State (Beautiful Clean Sold Out View) */
  <div 
    className="mt-auto flex w-full shrink-0 items-center justify-center gap-1.5 bg-gray-200/80 px-3 py-3 text-[10px] font-bold tracking-widest text-gray-500 uppercase select-none cursor-not-allowed border-t border-gray-300 md:py-3.5 md:text-xs"
  >
    <span>🔒</span> SOLD OUT
  </div>
)}

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
    // const available = products.filter((item) => item.isAvailable)
    if (activeFilter === 'ALL') {
      return products;
    }

    return products.filter((item) => item.category === activeFilter)
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
    <section id="collection" className="border-y border-[#2C2C2C]/10 bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-10 border-b border-[#2C2C2C]/10 pb-8 sm:mb-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="mx-auto w-full max-w-xl shrink-0 text-center lg:mx-0 lg:text-left">
              <h2
                className="font-serif text-2xl uppercase text-[#2C2C2C] sm:text-3xl md:text-4xl"
                style={{ letterSpacing: '3px' }}
              >
                The Inaugural Drop
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#2C2C2C]/60 sm:text-[15px]">
                Explore a meticulously curated capsule collection of premium minimal
                chains, aesthetic Korean earrings, anti-tarnish hoops, statement
                drops, and luxury lifestyle accents handpicked to elevate your
                everyday outfit routine.
              </p>
            </div>

            <div className="-mx-4 min-w-0 lg:mx-0 lg:max-w-[36rem]">
              <div
                className="flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 lg:justify-end [&::-webkit-scrollbar]:hidden"
                role="tablist"
                aria-label="Lifestyle collection categories"
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
                      className={`shrink-0 whitespace-nowrap border px-3 py-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#2C2C2C] transition sm:px-3.5 sm:text-[10px] sm:tracking-[0.14em] ${
                        isActive
                          ? 'border-[#2C2C2C] bg-[#2C2C2C] text-white'
                          : 'border-[#2C2C2C]/20 bg-white text-[#2C2C2C] hover:border-[#2C2C2C]/40'
                      }`}
                    >
                      {tab}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="py-16 text-center font-serif text-xl text-[#2C2C2C]/50">
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
              <div className="mt-12 flex justify-center border-t border-[#2C2C2C]/10 pt-10">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="border border-[#2C2C2C] bg-transparent px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#2C2C2C] transition-all duration-300 ease-out hover:delay-75 hover:bg-[#2C2C2C] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A880]"
                >
                  {remainingCount > PAGE_SIZE
                    ? 'View More Options'
                    : 'Explore All Designs'}
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  )
}
