import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProductOverview from "@/components/ProductOverview";
import Ingredients from "@/components/Ingredients";
import QuickOrder from "@/components/QuickOrder";
import Handling from "@/components/Handling";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { site } from "@/config/site";

export default function HomePage() {
  const orgJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brandName,
    slogan: site.tagline,
    description: site.description,
    url: "/",
    telephone: site.phone,
    sameAs: [
      ...(site.facebook ? [site.facebook] : []),
      ...(site.instagram ? [site.instagram] : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <main>
        <Hero />
        <TrustStrip />
        <ProductOverview />
        <QuickOrder />
        <Ingredients />
        <Handling />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}