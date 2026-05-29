'use client';

import { Children, type ReactElement, useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

const initialTransform: Record<Direction, string> = {
  up: 'translateY(8px)',
  down: 'translateY(-8px)',
  left: 'translateX(40px)',
  right: 'translateX(-40px)',
};

interface Props {
  direction?: Direction;
  children: React.ReactNode;
  className?: string;
}

export default function Reveal({ direction, children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [inview, setInview] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInview(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={(child as ReactElement).key ?? i}
          className="w-full"
          style={{
            transition: 'transform 0.8s, opacity 0.8s',
            transitionDelay: `${(i + 1) * 0.1}s`,
            opacity: inview ? 1 : 0,
            transform: inview ? 'none' : direction ? initialTransform[direction] : undefined,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
