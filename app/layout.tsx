import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-background text-foreground dark:bg-foreground dark:text-background p-8">
        <header className="grid gap-8 mb-16">
          <span className="text-4xl">TONE ROW</span>
          <span className="text-xl max-w-[580px] opacity-90">
            A space for web-development research with a focus on programming for
            social impact
          </span>
          <nav className="flex gap-10">
            <Link href="/non-profit" className="text-lg opacity-90">
              non profit
            </Link>
            <Link href="/" className="text-lg opacity-90">
              software
            </Link>
            <Link href="/writing" className="text-lg opacity-90">
              writing
            </Link>
            <Link href="/connect" className="text-lg opacity-90">
              connect
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
