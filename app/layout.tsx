import type { Metadata } from 'next';
import { Lato, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HiCoder｜広島大学コンピュータサークル',
  description:
    'HiCoderは、広島大学のコンピュータ好きの学生たちが集まるサークルです。Web制作やアプリ開発、競技プログラミングなど、さまざまな活動に積極的に取り組んでいます。',
  icons: { icon: '/assets/img/logo-1.png' },
  openGraph: {
    url: 'https://hicoder.uta8a.net/',
    title: 'HiCoder｜広島大学コンピュータサークル',
    description:
      'HiCoderは、広島大学のコンピュータ好きの学生たちが集まるサークルです。Web制作やアプリ開発、競技プログラミングなど、さまざまな活動に積極的に取り組んでいます。',
    type: 'website',
    images: [{ url: 'https://hicoder.one/assets/img/ogp.png' }],
  },
  twitter: {
    card: 'summary',
    site: '@huhicoder',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${lato.variable} ${notoSansJP.variable}`}>
      <body>{children}</body>
    </html>
  );
}
