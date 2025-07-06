import Link from "next/link";

export default function Home() {
  return (
    <div >
      <h2>
        sarina zeitooni sample task
      </h2>
      <hr/>
      <Link href={'/auth/'}>login</Link>
      <hr/>
      <Link href={'/dashboard/'}>dashboard</Link>
    </div>
  );
}
