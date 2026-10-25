import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CaseStudyDetailPage } from "../../../../site-pages/CaseStudyDetailPage";
import { caseStudiesData } from "../../../../data/caseStudies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudiesData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData.find((item) => item.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Vanguard Case Study`,
    description: study.summary,
  };
}

export default function Page({ params }: Props) {
  return (
    <Suspense fallback={<DetailLoading />}>
      <ResolvedCaseStudyPage params={params} />
    </Suspense>
  );
}

async function ResolvedCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  if (!caseStudiesData.some((item) => item.slug === slug)) notFound();
  return <CaseStudyDetailPage slug={slug} />;
}

function DetailLoading() {
  return (
    <div className="flex min-h-[55vh] items-center justify-center px-6 text-sm text-neutral-500" aria-busy="true">
      Loading case study…
    </div>
  );
}
