import { FadeIn } from '../common/FadeIn';
import Image from 'next/image';

export function ClientLogos() {
  const partners = [
    { name: 'NICE SPORT', src: '/partners/nice.png', width: 615, height: 306 },
    { name: 'Decathlon Egypt', src: '/partners/Decathlon Egypt.jpg', width: 330, height: 176 },
    { name: 'AIRFORCE', src: '/partners/airforce.png', width: 441, height: 124, wide: true },
    { name: 'VOLVO', src: '/partners/volvo cars eg.jpg', width: 768, height: 394 },
    { name: 'TWENTY THREE', src: '/partners/twenty three brand.jpg', width: 768, height: 394 },
  ];

  return (
    <div
      id="client-logos-section"
      className="w-full py-10 border-y border-neutral-200/70 bg-white/60"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-neutral-500 mb-6">
            Trusted by high-growth founders and commercial leaders
          </p>

          <div
            className="client-marquee overflow-hidden"
            role="region"
            aria-label="Client companies"
          >
            <div className="client-marquee-track flex w-max">
              {[false, true].map((isDuplicate) => (
                <div
                  key={isDuplicate ? 'duplicate' : 'original'}
                  className="flex shrink-0 items-center gap-6 px-3 sm:gap-10 sm:px-5"
                  aria-hidden={isDuplicate}
                >
                  {partners.map((partner) => (
                    <div
                      key={partner.name}
                      className="flex w-[150px] shrink-0 flex-col items-center justify-center gap-2 p-2 sm:w-[190px]"
                    >
                      <Image
                        src={partner.src}
                        alt={isDuplicate ? '' : partner.name}
                        width={partner.width}
                        height={partner.height}
                        className={`h-16 w-full object-contain sm:h-[76px] ${partner.wide ? 'max-w-[220px]' : 'max-w-[170px]'}`}
                        sizes="190px"
                      />
                      <span className="text-xs font-semibold tracking-wide text-neutral-700">
                        {partner.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
