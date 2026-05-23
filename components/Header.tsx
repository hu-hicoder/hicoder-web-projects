'use client';

import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'ABOUT' },
  { href: '#news', label: 'NEWS' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'CONTACT' },
  { href: 'https://blog.hicoder.one/', label: 'BLOG' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="w-full h-16 lg:h-20 fixed top-0 left-0 right-0 z-[100] bg-body shadow-[0_6px_9px_-4px_rgba(10,10,10,0.15)]">
      <div className="container-inner h-full flex justify-between items-center px-6 lg:w-[95%] lg:mx-auto lg:pl-0 lg:pr-0">
        {/* Logo */}
        <h1 className="flex items-center gap-2">
          <Image
            src="/assets/img/logo-1.png"
            alt=""
            width={34}
            height={34}
            className="lg:w-[43px] h-auto"
            priority
          />
          <Image
            src="/assets/img/logo-2.png"
            alt="HiCoder"
            width={80}
            height={24}
            className="header-title-logo lg:w-[100px] h-auto"
            priority
          />
        </h1>

        {/* Desktop nav */}
        <nav
          className={[
            'fixed top-0 left-0 w-full h-screen z-[1000] bg-input transition-transform duration-500 ease-[cubic-bezier(0.89,0.05,0.28,1)]',
            'lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:translate-x-0 lg:transition-none',
            open ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
        >
          <ul
            className={[
              'flex flex-col gap-10 items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000]',
              'lg:flex-row lg:static lg:top-auto lg:left-auto lg:translate-x-0 lg:translate-y-0',
            ].join(' ')}
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={close}
                  className="text-base font-bold text-title tracking-[0.05rem] hover:text-first transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-8">
              <a
                href="https://twitter.com/huhicoder"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-lg text-title hover:text-first transition-colors duration-300"
                />
              </a>
              <a
                href="https://github.com/hu-hicoder"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-lg text-title hover:text-first transition-colors duration-300"
                />
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          type="button"
          className="relative z-[10000] bg-transparent border-none outline-none cursor-pointer lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="メニュー"
        >
          {(['top', 'mid', 'bot'] as const).map((name, i) => (
            <span
              key={name}
              className="block w-6 bg-title mb-1.5 last:mb-0 transition-transform duration-500"
              style={{
                height: '1.6px',
                transform: open
                  ? i === 0
                    ? 'translateY(7.6px) rotate(135deg)'
                    : i === 1
                      ? 'translateX(-12px) scaleX(0)'
                      : 'translateY(-7.6px) rotate(-135deg)'
                  : undefined,
                transitionDelay: open ? (i === 0 ? '70ms' : i === 1 ? '0ms' : '140ms') : undefined,
              }}
            />
          ))}
        </button>
      </div>
    </header>
  );
}
