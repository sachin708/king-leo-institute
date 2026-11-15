import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProgramPage from "@/components/programs/ProgramPage";
import { programs } from "@/app/content/programs";

export function generateStaticParams() {
  return Object.keys(programs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const content = programs[slug];
  if (!content) return {};
  const name = content.hero.heading.replace(/\s*\n\s*/g, " ");
  const title = `${name} | Kingleo Tattooz Institute`;
  const raw = content.hero.description || "";
  const description =
    raw.length > 160 ? `${raw.slice(0, raw.lastIndexOf(" ", 157))}...` : raw;
  const url = `/programs/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

async function ProgramContent({ params }) {
  const { slug } = await params;
  const content = programs[slug];
  if (!content) notFound();
  return <ProgramPage content={content} />;
}

export default function Page({ params }) {
  return (
    <Suspense fallback={null}>
      <ProgramContent params={params} />
    </Suspense>
  );
}
