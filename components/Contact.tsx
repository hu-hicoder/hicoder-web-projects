import Reveal from './Reveal';

export default function Contact() {
  return (
    <section className="py-8 pb-16 md:pb-[4.5rem]" id="contact">
      <Reveal
        direction="up"
        className="max-w-container mx-auto px-6 md:px-0 flex flex-col"
      >
        <h2 className="section-title relative text-xl font-bold text-center tracking-[0.05em] mb-6">
          CONTACT
        </h2>
        <span className="block text-sm text-center mb-12">お問い合わせ</span>
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-container px-6 md:px-8 py-10 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
            <h3 className="text-lg font-bold leading-relaxed mb-3">
              お問い合わせフォーム
            </h3>
            <p className="leading-[2] mb-8 text-center">
              見学・入会のご相談、取材のご依頼、ご質問などお気軽にお問い合わせください。
            </p>
            <a
              href="https://forms.gle/TdGRhudPytAB86NPA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center px-6 py-4 bg-first font-bold text-white rounded-lg transition-all duration-300 hover:bg-first-alt"
            >
              お問い合わせフォーム
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-container px-6 md:px-8 py-10 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
            <h3 className="text-lg font-bold leading-relaxed mb-3">質問箱</h3>
            <p className="leading-[2] mb-8 text-center">
              匿名での質問が可能な質問箱もご利用いただけます。ぜひご活用ください。
            </p>
            <a
              href="https://peing.net/ja/q/5328d576-771b-411a-bb8b-389cc89068cd"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center px-6 py-4 bg-first font-bold text-white rounded-lg transition-all duration-300 hover:bg-first-alt"
            >
              質問箱に質問を送る
            </a>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-container px-6 md:px-8 py-10 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.15)] sm:col-span-2">
            <h3 className="text-lg font-bold leading-relaxed mb-3">
              メールでのお問い合わせ
            </h3>
            <p className="text-[1.4rem] font-bold mb-2">huhicoder[at]gmail.com</p>
            <p className="leading-[2] text-center">
              ※ [at] を @ に置き換えてメールをお送りください。
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
