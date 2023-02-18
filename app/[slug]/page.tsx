import { getSoftware, getSoftwareBySlug } from "@/lib/notion";

export default async function Software(context: { params: { slug: string } }) {
  const slug = context.params.slug;
  if (!slug) return null;
  const software = await getSoftwareBySlug(slug);
  if (!software) return null;
  return (
    <main className="max-w-[880px] mx-auto">
      <header className="grid gap-4">
        <h1 className="text-3xl">{software.title}</h1>
        <div className="flex gap-8">
          <a
            href={software.url}
            className="text-green-600"
            target="_blank"
            rel="noreferrer"
          >
            Visit Project
          </a>
          <span className="opacity-50">{software.date}</span>
        </div>
      </header>
    </main>
  );
}
