import { HomeHero } from "@/components/site/home/hero";
import { Featured } from "@/components/site/home/featured";
import { Explore } from "@/components/site/home/explore";
import { Popular } from "@/components/site/home/popular";
import { HowItWorks } from "@/components/site/home/how-it-works";
import { ExperienceCta } from "@/components/site/experience-cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Featured />
      <Explore />
      <Popular />
      <HowItWorks />
      <ExperienceCta />
    </>
  );
}
