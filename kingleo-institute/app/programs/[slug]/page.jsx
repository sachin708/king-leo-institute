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
  return {
    title: `${content.hero.heading.replace("\n", " ")} | Kingleo Tattooz Institute`,
    description: content.hero.description,
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
