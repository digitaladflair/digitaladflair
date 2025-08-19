"use client";

import Head from "next/head";

export type SEOProps = {
  title: string;
  description: string;
  alternates?: {
    canonical?: string;
  };
  openGraph?: {
    url?: string;
    title?: string;
    description?: string;
    siteName?: string;
    type?: string;
  };
};

export default function SEO({
  title,
  description,
  alternates,
  openGraph,
}: SEOProps) {
  return (
    <Head>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {alternates?.canonical && (
        <link rel="canonical" href={alternates.canonical} />
      )}

      {/* Open Graph */}
      {openGraph?.url && <meta property="og:url" content={openGraph.url} />}
      {openGraph?.title && (
        <meta property="og:title" content={openGraph.title} />
      )}
      {openGraph?.description && (
        <meta property="og:description" content={openGraph.description} />
      )}
      {openGraph?.siteName && (
        <meta property="og:site_name" content={openGraph.siteName} />
      )}
      {openGraph?.type && <meta property="og:type" content={openGraph.type} />}
    </Head>
  );
}
