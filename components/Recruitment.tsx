import Image from 'next/image';
import Reveal from './Reveal';

export default function Recruitment() {
  return (
    <section className="py-8 pb-16 md:pb-[4.5rem]">
      {/* full-bleed teal bg on mobile, rounded card on md+ */}
      <Reveal
        direction="up"
        className="md:max-w-container md:mx-auto md:px-0 px-0"
      >
        <div className="bg-first py-16 md:rounded-2xl md:py-12 md:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1fr_max-content] lg:justify-center lg:items-center max-w-container mx-auto px-6 md:px-0">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-lg font-bold text-white text-center md:text-left leading-relaxed mb-3">
                HiCoderでは、一緒に挑戦する仲間を募集しています
              </h3>
              <p className="leading-[2] text-white text-center md:text-left mb-6">
                コンピュータやプログラミングに興味がある方々のご応募をお待ちしています。
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-4 bg-white text-first font-bold rounded-lg transition-all duration-300 hover:bg-body hover:text-first-alt"
              >
                お問い合わせ
              </a>
            </div>
            <Image
              src="/assets/img/image-recruitment.png"
              alt="募集イメージ"
              width={230}
              height={230}
              className="w-[230px] justify-self-center"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
