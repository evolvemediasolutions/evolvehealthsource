import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error(`Error: ${indexHtmlPath} does not exist. Run vite build first.`);
  process.exit(1);
}

const template = fs.readFileSync(indexHtmlPath, 'utf-8');

const SITE_URL = 'https://evolvehealthsource.com';

const routes = [
  {
    path: '/',
    title: 'Evolve Health Source | Healthcare Revenue Cycle Management & Medical Billing',
    description: 'Evolve Health Source delivers comprehensive revenue cycle management, medical billing, certified medical coding, and clean-claim optimization for healthcare providers.',
    canonical: `${SITE_URL}/`,
  },
  {
    path: '/about',
    title: 'About Us | Evolve Health Source',
    description: "Learn about Evolve Health Source's mission to empower healthcare practices with expert medical billing, AAPC certified coding, and revenue cycle optimization.",
    canonical: `${SITE_URL}/about`,
  },
  {
    path: '/solutions',
    title: 'RCM & Medical Billing Solutions | Evolve Health Source',
    description: 'Comprehensive healthcare revenue cycle management solutions: certified specialty coding, automated claims scrubbing, proactive denial appeals, and accounts receivable management.',
    canonical: `${SITE_URL}/solutions`,
  },
  {
    path: '/services',
    title: 'Healthcare Practice Growth & RCM Services | Evolve Health Source',
    description: 'Comprehensive healthcare revenue cycle management and medical practice growth solutions by Evolve Health Source.',
    canonical: `${SITE_URL}/services`,
  },
  {
    path: '/careers',
    title: 'Careers & Openings | Evolve Health Source',
    description: 'Explore active career openings in medical coding (CPC), accounts receivable, and healthcare revenue cycle operations at Evolve Health Source. Apply today.',
    canonical: `${SITE_URL}/careers`,
  },
  {
    path: '/contact',
    title: 'Contact Us | Request an RCM Consultation | Evolve Health Source',
    description: 'Get in touch with Evolve Health Source. Request a free revenue cycle audit, billing performance assessment, or specialty coding consultation.',
    canonical: `${SITE_URL}/contact`,
  },
  {
    path: '/contact/thank-you',
    title: 'Thank You | Evolve Health Source',
    description: 'Thank you for contacting Evolve Health Source. Our revenue cycle advisory team will review your enquiry and reach out within 24 hours.',
    canonical: `${SITE_URL}/contact/thank-you`,
  },
  {
    path: '/thank-you',
    title: 'Thank You | Evolve Health Source',
    description: 'Thank you for contacting Evolve Health Source. Our revenue cycle advisory team will review your enquiry and reach out within 24 hours.',
    canonical: `${SITE_URL}/contact/thank-you`,
  },
  {
    path: '/insights',
    title: 'Healthcare & RCM Insights | Evolve Health Source',
    description: 'Stay ahead with expert healthcare revenue cycle insights, ICD-10 regulatory updates, denial reduction methodologies, and AI technology in modern billing operations.',
    canonical: `${SITE_URL}/insights`,
  },
  {
    path: '/insights/navigating-icd-10-updates-2026',
    title: 'Navigating the New ICD-10 Coding Updates for 2026 | Evolve Health Source',
    description: 'Stay ahead of critical diagnostic and procedural coding modifications with our comprehensive guide to 2026 ICD-10 updates.',
    canonical: `${SITE_URL}/insights/navigating-icd-10-updates-2026`,
  },
  {
    path: '/insights/strategies-reduce-claim-denials',
    title: '5 High-Impact Strategies to Reduce Claim Denials in 2026 | Evolve Health Source',
    description: 'Actionable steps and billing workflows to systematically lower claim denial rates below 3% and accelerate insurance collections.',
    canonical: `${SITE_URL}/insights/strategies-reduce-claim-denials`,
  },
  {
    path: '/insights/ai-in-modern-ar-management',
    title: 'How AI is Revolutionizing Accounts Receivable Management | Evolve Health Source',
    description: 'Discover how artificial intelligence and machine learning are transforming healthcare AR follow-up and revenue cycle performance.',
    canonical: `${SITE_URL}/insights/ai-in-modern-ar-management`,
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Evolve Health Source',
    description: 'Read the Evolve Health Source privacy policy to understand how we protect patient and client confidential information in accordance with HIPAA and industry standards.',
    canonical: `${SITE_URL}/privacy`,
  },
  {
    path: '/terms',
    title: 'Terms of Service | Evolve Health Source',
    description: 'Review the terms and conditions governing the use of Evolve Health Source services, platforms, and advisory offerings.',
    canonical: `${SITE_URL}/terms`,
  },
  {
    path: '/marketing/home',
    title: 'Healthcare Marketing & Practice Growth | MyClinicBoost by Evolve',
    description: 'High-ROI healthcare marketing for private medical practices. Bespoke medical websites, healthcare local SEO dominance, patient trust funnels, and verified physician authority campaigns.',
    canonical: `${SITE_URL}/marketing/home`,
  },
  {
    path: '/myclinicboot',
    title: 'Healthcare Marketing & Practice Growth | MyClinicBoost by Evolve',
    description: 'High-ROI healthcare marketing for private medical practices.',
    canonical: `${SITE_URL}/marketing/home`,
  },
  {
    path: '/myclinicboost',
    title: 'Healthcare Marketing & Practice Growth | MyClinicBoost by Evolve',
    description: 'High-ROI healthcare marketing for private medical practices.',
    canonical: `${SITE_URL}/marketing/home`,
  },
];

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

for (const route of routes) {
  let html = template;

  const escapedTitle = escapeHtml(route.title);
  const escapedDescription = escapeHtml(route.description);

  // Replace <title>
  html = html.replace(/<title>.*?<\/title>/is, `<title>${escapedTitle}</title>`);

  // Replace <meta name="description" content="..." />
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="description" content="${escapedDescription}" />`
  );

  // Replace <link rel="canonical" href="..." />
  html = html.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // Replace og:title
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:title" content="${escapedTitle}" />`
  );

  // Replace og:description
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:description" content="${escapedDescription}" />`
  );

  // Replace og:url
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:url" content="${route.canonical}" />`
  );

  // Replace twitter:title
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:title" content="${escapedTitle}" />`
  );

  // Replace twitter:description
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:description" content="${escapedDescription}" />`
  );

  if (route.path === '/') {
    fs.writeFileSync(indexHtmlPath, html, 'utf-8');
    console.log(`Generated HTML for root (/) -> dist/index.html`);
  } else {
    const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
    fs.mkdirSync(routeDir, { recursive: true });
    const targetFile = path.join(routeDir, 'index.html');
    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`Generated HTML for ${route.path} -> ${path.relative(distDir, targetFile)}`);
  }
}

console.log('All individual page HTML files successfully generated with unique titles and metadata!');

