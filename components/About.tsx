import Image from 'next/image';
import Reveal from './Reveal';

export default function About() {
  return (
    <section className="py-8 pb-16 md:pb-[4.5rem]" id="about">
      <Reveal direction="up" className="max-w-container mx-auto px-6 md:px-0 flex flex-col">
        <h2 className="section-title relative text-xl font-bold text-center tracking-[0.05em] mb-6">
          ABOUT
        </h2>
        <span className="block text-sm text-center mb-12">私たちについて</span>
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <Image
            src="/assets/img/image-about.jpg"
            alt="HiCoder活動風景"
            width={600}
            height={400}
            className="w-full rounded-lg"
          />
          <div>
            <h3 className="text-lg font-bold leading-relaxed mb-3">
              HiCoderは、広島大学のコンピュータ系サークルです。
            </h3>
            <p className="leading-[2]">
              私達は普段、個人で活動しています。そして、週に一度開かれる定例会で技術的な話や進捗について話しています。グループでの活動としては、大学対抗の競技プログラミング大会であるICPCをはじめとして、2019年には広島県呉市で行われたディスコプログラミングコンテストや、インフラに関する知識を競うICTSC2019にも出場していました。参加メンバーは主に情報科学部の学生ですが、他学部の方も歓迎しています！
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
