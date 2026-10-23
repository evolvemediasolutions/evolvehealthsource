import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

const SITE_URL = 'https://evolvehealthsource.com';
const DEFAULT_IMAGE = `${SITE_URL}/LOGO1.png`;

export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
}: SEOProps) {
  // Normalize canonical URL
  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${SITE_URL}${canonical.startsWith('/') ? '' : '/'}${canonical}`
    : SITE_URL;

  const absoluteImageUrl = ogImage.startsWith('http')
    ? ogImage
    : `${SITE_URL}${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper: update or create <meta>
    const updateMeta = (nameAttr: 'name' | 'property', attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${nameAttr}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(nameAttr, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Helper: update or create <link rel="canonical">
    const updateCanonical = (href: string) => {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Standard metadata
    updateMeta('name', 'description', description);
    updateCanonical(canonicalUrl);

    // Open Graph
    updateMeta('property', 'og:title', title);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:url', canonicalUrl);
    updateMeta('property', 'og:type', ogType);
    updateMeta('property', 'og:image', absoluteImageUrl);
    updateMeta('property', 'og:site_name', 'Evolve Health Source');

    // Twitter Card
    updateMeta('name', 'twitter:card', 'summary_large_image');
    updateMeta('name', 'twitter:title', title);
    updateMeta('name', 'twitter:description', description);
    updateMeta('name', 'twitter:image', absoluteImageUrl);
  }, [title, description, canonicalUrl, ogType, absoluteImageUrl]);

  // Also return React 19 native head elements for static rendering/prerendering
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:site_name" content="Evolve Health Source" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
    </>
  );
}
