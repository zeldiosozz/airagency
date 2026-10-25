interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schema?: Record<string, unknown>;
}

/** Page metadata is declared by each App Router route. This component adds page-specific structured data. */
export function SEOHead({ schema }: SEOHeadProps) {
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
