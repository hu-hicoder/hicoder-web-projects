import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      id="footer"
      className="py-[1.8rem] border-t border-border md:px-12 xl:px-0"
    >
      <div className="max-w-container mx-auto px-6 md:px-0 flex justify-between items-center">
        <Image
          src="/assets/img/logo-1.png"
          alt="HiCoder"
          width={36}
          height={36}
          className="-translate-y-[3px]"
        />
        <p className="text-sm">&copy; {new Date().getFullYear()} HiCoder</p>
      </div>
    </footer>
  );
}
