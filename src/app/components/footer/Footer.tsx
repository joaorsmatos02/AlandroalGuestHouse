import Image from 'next/image';

export default function Footer() {

  return (
    <Image
      src="/Footer.jpg"
      alt="footer"
      width={0}
      height={0}
      layout="responsive"
    />
  );
}