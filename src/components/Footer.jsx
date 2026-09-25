import { BUSINESS_PHONE, INSTAGRAM_URL } from '../data/products'
import { InstagramIcon, PhoneIcon } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:items-start lg:gap-10 lg:px-8 lg:py-14">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <a href="#top" className="text-center lg:text-left">
            <span className="block font-serif text-lg tracking-[0.3em] text-charcoal">
              ZELVORA
            </span>
            <span className="mt-0.5 block text-[8px] uppercase tracking-[0.4em] text-gold">
              Lifestyle Collective
            </span>
          </a>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-gray-700">
            Customer Care
          </p>
          <div className="inline-flex items-center gap-2.5 text-charcoal">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal/15">
              <PhoneIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm tracking-wide">{BUSINESS_PHONE.display}</span>
          </div>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal/45">
            Customer Care · Pan-India Expansion Underway
          </p>
        </div>

        <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[3px] text-gray-700">
            Follow
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal/55 transition-opacity duration-300 hover:opacity-55"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            @zelvora_lifestyle
          </a>
        </div>
      </div>

      <div className="border-t border-charcoal/8 px-4 py-5 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-7xl text-center text-xs uppercase tracking-widest text-gray-500">
          Designed, Engineered &amp; Curated by Sangeeta Jaiswal | © 2026 ZELVORA
          LIFESTYLE. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
