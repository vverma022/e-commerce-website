import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Image
        src="/images/nextjs.svg"
        alt="Next.js Logo"
        width={500}
        height={500}
      />
    </div>
  );
}
