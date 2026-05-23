import Reveal from './Reveal';

const newsItems = [
  {
    date: '2021/10/09',
    category: 'お知らせ',
    description: (
      <>
        Websiteがリニューアルしました！実装は{' '}
        <a
          href="https://github.com/codesapiens1065"
          target="_blank"
          rel="noopener noreferrer"
          className="text-first hover:text-first-alt transition-colors duration-300"
        >
          @codesapiens1065
        </a>{' '}
        が全面的に行いました。
      </>
    ),
  },
  {
    date: '2021/10/08',
    category: '活動報告',
    description:
      '久しぶりの定例会を行いました。それぞれ進捗を話し、後期の講義の話や夏に行ったインターンの話などで盛り上がりました。',
  },
  {
    date: '2021/10/08',
    category: 'その他',
    description:
      'ICPCが近いので、コンテストに向けて準備をしている部員もいるようです。',
  },
];

export default function News() {
  return (
    <section className="py-8 pb-16 md:pb-[4.5rem]" id="news">
      <Reveal
        direction="up"
        className="max-w-container mx-auto px-6 md:px-0 flex flex-col"
      >
        <h2 className="section-title relative text-xl font-bold text-center tracking-[0.05em] mb-6">
          NEWS
        </h2>
        <span className="block text-sm text-center mb-12">最新のお知らせ</span>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-8">
          {newsItems.map((item, i) => (
            <div
              key={i}
              className="grid gap-2 content-start bg-container p-6 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
            >
              <span className="block text-text-light">{item.date}</span>
              <span className="block font-bold">{item.category}</span>
              <p className="leading-[2]">{item.description}</p>
            </div>
          ))}
        </div>
        <div style={{ cursor: 'not-allowed' }}>
          <a
            className="inline-flex items-center px-6 py-4 bg-first font-bold text-white rounded-lg transition-all duration-300 hover:bg-first-alt"
            style={{ pointerEvents: 'none' }}
          >
            もっと見る
          </a>
        </div>
      </Reveal>
    </section>
  );
}
