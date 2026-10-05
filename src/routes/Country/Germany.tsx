import { createFileRoute } from "@tanstack/react-router";
import { CountryPageLayout } from "@/components/CountryLayout";
import { getCountryBySlug } from "@/data/countries";

const country = getCountryBySlug("germany")!;

export const Route = createFileRoute("/Country/Germany")({
  head: () => ({
    meta: [
      { title: country.metaTitle },
      { name: "description", content: country.metaDescription },
      { property: "og:title", content: country.metaTitle },
      { property: "og:description", content: country.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `/Country/Germany` },
      
      { name: "twitter:card", content: "summary" },
      
    ],
    links: [{ rel: "canonical", href: `/Country/Germany` }],
  }),
  component: () => <CountryPageLayout country={country} />,
});
