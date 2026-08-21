import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProductOverview from "@/components/ProductOverview";
import Catalog from "@/components/Catalog";
import Benefits from "@/components/Benefits";
import DogsEating from "@/components/DogsEating";
import VacuumSealed from "@/components/VacuumSealed";
import Ingredients from "@/components/Ingredients";
import Handling from "@/components/Handling";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { site } from "@/config/site";
import { products } from "@/data/products";

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

  const productListJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catálogo BARF Pimpon",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: `${p.name} — ${p.preparation}`,
        description: `Alimento ${p.preparation.toLowerCase()} para perros`,
        offers: p.variants.map((v) => ({
          "@type": "Offer",
          price: v.price,
          priceCurrency: "MXN",
          availability: "https://schema.org/InStock",
          name: `${p.name} ${v.weight}`,
        })),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListJsonLd) }}
      />
      <main>
        <Hero />
        <TrustStrip />
        <ProductOverview />
        <Catalog />
        <Benefits />
        <DogsEating />
        <VacuumSealed />
        <Ingredients />
        <Handling />
        <Gallery />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}