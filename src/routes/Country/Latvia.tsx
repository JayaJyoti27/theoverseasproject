import { createFileRoute } from "@tanstack/react-router";
import { CountryPageLayout } from "@/components/CountryLayout";
import { getCountryBySlug } from "@/data/countries";

const country = getCountryBySlug("latvia")!;

export const Route = createFileRoute("/Country/Latvia")({
  head: () => ({
    meta: [
      { title: country.metaTitle },
      { name: "description", content: country.metaDescription },
      { property: "og:title", content: country.metaTitle },
      { property: "og:description", content: country.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `/Country/Latvia` },
      
      { name: "twitter:card", content: "summary" },
      
    ],
    links: [{ rel: "canonical", href: `/Country/Latvia` }],
  }),
  component: () => <CountryPageLayout country={country} />,
});
