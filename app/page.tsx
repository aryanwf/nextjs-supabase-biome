import Link from 'next/link';

import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';

const HomePage = () => {
  return (
    <>
      <header className="w-full border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-mono text-lg font-bold">
            next-starter
          </Link>
          <Button>Sign In</Button>
        </div>
      </header>
      <section className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:top-1/2 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
        <h1 className="mb-1 font-mono text-4xl leading-tight font-extrabold tracking-tighter [word-spacing:-0.5rem] md:text-5xl">
          <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
            Next.js
          </span>{' '}
          starter template
        </h1>
        <p className="text-muted-foreground max-w-2xl md:text-base">
          A clean starter template for Next.js 15 with Supabase integration,
          Turbopack for fast development and Biome.js for formatting and
          linting. Jumpstart your project with efficiency and style.
        </p>
        <div className="mt-2 flex justify-center">
          <Link
            href="https://github.com/aryanwf/nextjs-supabase-biome"
            target="_blank"
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
          >
            <Icons.github /> Github
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
