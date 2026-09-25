import { WHATSAPP_CHANNEL_URL } from '../data/products'

function WhatsAppChannelIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.15 6.36 2.15 11.72c0 1.92.54 3.79 1.57 5.44L2 22l5.02-1.63a10.1 10.1 0 0 0 5.02 1.35h.01c5.46 0 9.89-4.36 9.89-9.72C21.94 6.36 17.5 2 12.04 2Zm5.77 13.76c-.24.67-1.39 1.28-1.92 1.36-.49.08-1.12.11-1.81-.11-.42-.14-.96-.31-1.65-.61-2.9-1.25-4.79-4.18-4.93-4.37-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.55c.18 0 .42-.05.65.5.24.57.81 1.97.88 2.11.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.52 1.89 1.05.93 1.93 1.22 2.21 1.36.28.14.44.12.6-.07.17-.19.7-.81.89-1.09.19-.28.38-.23.64-.14.26.1 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.69-.17 1.36Z" />
    </svg>
  )
}

export default function WhatsAppChannel() {
  return (
    <section
      aria-labelledby="whatsapp-channel-heading"
      className="border-t border-charcoal/10 bg-cream"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="relative overflow-hidden border border-charcoal/10 bg-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 70% 80% at 0% 50%, rgba(197,168,128,0.18), transparent), radial-gradient(ellipse 50% 60% at 100% 50%, rgba(44,44,44,0.04), transparent)',
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 px-6 py-8 sm:px-10 sm:py-10 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
                Style Circle
              </p>
              <h2
                id="whatsapp-channel-heading"
                className="mt-3 font-serif text-2xl leading-snug text-charcoal sm:text-3xl text-balance"
              >
                ✨ Stay Ahead of the Trends!
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/65 sm:text-base">
                Join our Exclusive ZELVORA Style Circle on WhatsApp Channel for
                limited-drop alerts and secret discounts.
              </p>
            </div>

            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2.5 bg-charcoal px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-charcoal/90"
            >
              <WhatsAppChannelIcon className="h-4 w-4" />
              Join WhatsApp Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
