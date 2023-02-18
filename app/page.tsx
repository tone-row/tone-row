import { getSoftware } from "@/lib/notion";
import Link from "next/link";

export default async function Home() {
  const software = await getSoftware();
  return (
    <main className="max-w-[880px] mx-auto">
      <p className="opacity-60 max-w-sm mb-16">
        We develop tools at the intersection of productivity and creativity.
      </p>
      <div className="software-list grid md:grid-cols-2 gap-20">
        {software.map((item) => (
          <Link
            href={`/${item.slug}`}
            key={item.id}
            className="software-item grid gap-3"
          >
            <h2 className="text-2xl">{item.title}</h2>
            <p className="opacity-80">{item.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
