'use client';

import { FaArrowUp } from 'react-icons/fa6';
import { useEffect, useState } from 'react';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY >= 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={[
        'sticky left-[95%] bottom-6 mr-6 z-10 cursor-pointer',
        'inline-flex items-center justify-center p-3 rounded-[0.6rem]',
        'bg-first shadow-[0_2px_10px_rgba(0,0,0,0.25)] hover:bg-first-alt transition-all duration-300',
        visible ? 'opacity-80 visible' : 'opacity-0 invisible',
      ].join(' ')}
      style={{ width: 'fit-content' }}
      aria-label="トップへ戻る"
    >
      <FaArrowUp className="text-base text-white" />
    </button>
  );
}
