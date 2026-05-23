'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Reveal from './Reveal';

const faqs = [
  {
    q: '具体的な活動内容を教えてください。',
    a: '現在は主に対面で週に一度定例会を行っています。Discordというツールを用いたオンラインの交流も行っています。',
  },
  {
    q: '初心者でも入会可能ですか？',
    a: 'むしろ初めて経験する人の方が多いです！初心者向けの講習会や、ハッカソン（チームで開発するイベント）などを行っています。',
  },
  {
    q: '会費はありますか？',
    a: '会費、入会費、サークル費などはありません。',
  },
  {
    q: '見学はできますか？',
    a: '一度定例会に見学に来てみるとよいと思います！ぜひお問い合わせください！',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full border-b border-border first:border-t">
      <button
        className="grid gap-x-3 w-full text-left py-8 px-4 cursor-pointer"
        style={{ gridTemplateColumns: '0.75rem auto 1.25rem' }}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-bold leading-[2]">Q</span>
        <h4 className="text-md text-text-main font-bold leading-[2]">{q}</h4>
        <FontAwesomeIcon
          icon={faAngleDown}
          className="text-xl text-first justify-self-end self-center transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : undefined }}
        />
      </button>

      <div className={`faq-answer-grid${open ? ' open' : ''}`}>
        <div className="overflow-hidden">
          <div
            className="grid gap-x-3 pb-8 pr-12 pl-4"
            style={{ gridTemplateColumns: '0.75rem auto' }}
          >
            <span className="font-bold leading-[2]">A</span>
            <p className="leading-[2]">{a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="py-8 pb-16 md:pb-[4.5rem]" id="faq">
      <Reveal className="max-w-container mx-auto px-6 md:px-0 flex flex-col">
        <h2 className="section-title relative text-xl font-bold text-center tracking-[0.05em] mb-6">
          FAQ
        </h2>
        <span className="block text-sm text-center mb-12">よくあるご質問</span>
        <div className="flex flex-col items-center w-full">
          <div className="w-full max-w-[768px]">
            {faqs.map((item, i) => (
              <FaqItem key={i} {...item} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
