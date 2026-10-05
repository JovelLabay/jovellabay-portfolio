import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6">
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
        404
      </p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight">
        This page is not here.
      </h1>
      <Link
        href="/"
        className="mt-8 w-fit text-sm underline decoration-line underline-offset-4"
      >
        Back to the portfolio
      </Link>
    </main>
  );
}
