'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { type BlogPost, fetchBlogPosts } from '@/lib/blog';
import Reveal from './Reveal';

export default function News() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchBlogPosts(3).then(setPosts);
  }, []);

  return (
    <section className="py-8 pb-16 md:pb-[4.5rem]" id="news">
      <Reveal direction="up" className="max-w-container mx-auto px-6 md:px-0 flex flex-col">
        <h2 className="section-title relative text-xl font-bold text-center tracking-[0.05em] mb-6">
          NEWS
        </h2>
        <span className="block text-sm text-center mb-12">最新のお知らせ</span>
        {posts.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-8">
            {posts.map((post) => (
              <a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid content-start bg-container rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.15)] overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-shadow duration-300"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={720}
                  height={360}
                  className="w-full object-cover aspect-video"
                />
                <div className="grid gap-2 p-6">
                  <span className="block text-text-light">{post.date}</span>
                  <span className="block font-bold leading-snug">{post.title}</span>
                  {post.description && <p className="leading-[2] text-sm">{post.description}</p>}
                </div>
              </a>
            ))}
          </div>
        )}
        <a
          href="https://blog.hicoder.one/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full justify-center items-center px-6 py-4 bg-first font-bold text-white rounded-lg transition-all duration-300 hover:bg-first-alt"
        >
          もっと見る
        </a>
      </Reveal>
    </section>
  );
}
