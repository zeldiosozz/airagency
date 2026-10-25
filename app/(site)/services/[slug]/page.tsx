import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ServiceDetailPage } from "../../../../site-pages/ServiceDetailPage";
import { servicesData } from "../../../../data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicesData.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);
  if (!service) return {};
  return { title: `${service.title} — Vanguard Marketing Agency`, description: service.shortSummary };
}

export default function Page({ params }: Props) {
  return (
    <Suspense fallback={<DetailLoading label="Loading service details…" />}>
      <ResolvedServicePage params={params} />
    </Suspense>
  );
}

async function ResolvedServicePage({ params }: Props) {
  const { slug } = await params;
  if (!servicesData.some((item) => item.slug === slug)) notFound();
  return <ServiceDetailPage slug={slug} />;
}

function DetailLoading({ label }: { label: string }) {
  return (
    <div className="flex min-h-[55vh] items-center justify-center px-6 text-sm text-neutral-500" aria-busy="true">
      {label}
    </div>
  );
}
