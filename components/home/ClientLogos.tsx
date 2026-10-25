import { FadeIn } from '../common/FadeIn';
import Image from 'next/image';

export function ClientLogos() {
  const partners = [
    { name: 'NICE SPORT', src: '/partners/nice.png', width: 615, height: 306 },
    { name: 'GBM', src: '/partners/gbm.png', width: 330, height: 176 },
    { name: 'AIRFORCE', src: '/partners/airforce.png', width: 441, height: 124, wide: true },
    { name: 'AL-RAHMA', src: '/partners/al-rahma.jpg', width: 768, height: 394 },
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

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex w-full flex-col items-center justify-center gap-2 p-2"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className={`h-16 w-full object-contain sm:h-[76px] ${partner.wide ? 'max-w-[220px]' : 'max-w-[170px]'}`}
                  sizes="(max-width: 640px) 42vw, 170px"
                />
                <span className="text-xs font-semibold tracking-wide text-neutral-700">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
