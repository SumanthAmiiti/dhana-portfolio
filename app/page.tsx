import React from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import TiltCard from "@/components/TiltCard";
import ExpertiseRow from "@/components/ExpertiseRow";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ClosingCTA from "@/components/ClosingCTA";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const { projects, expertise, experience } = portfolioData;

  return (
    <main id="main-content" className="relative z-10 focus:outline-none" tabIndex={-1}>
      {/* 1 & 2. Hero Section + 3D Scene */}
      <Hero />

      {/* 4. /projects ([count]) */}
      <Section
        id="projects"
        number="01"
        badge="Selected Works"
        title="projects"
        count={projects.length.toString().padStart(2, "0")}
        description="Production architectures, cloud-native deployments, and interactive full-stack applications. Each card reacts to cursor parallax."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <TiltCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </Section>

      {/* 5. /expertise (4) */}
      <Section
        id="expertise"
        number="02"
        badge="Core Capabilities"
        title="expertise"
        count={expertise.length.toString().padStart(2, "0")}
        description="Engineering domains honed through 2+ years of production experience and advanced academic research in distributed systems."
      >
        <div className="flex flex-col">
          {expertise.map((item, idx) => (
            <ExpertiseRow key={item.number} item={item} index={idx} />
          ))}
        </div>
      </Section>

      {/* 6. /experience */}
      <Section
        id="experience"
        number="03"
        badge="Work History"
        title="experience"
        count={experience.length.toString().padStart(2, "0")}
        description="Professional engineering roles and internship experience across full-stack development and real-world software projects."
      >
        <ExperienceSection />
      </Section>

      {/* 7. /education */}
      <Section
        id="education"
        number="04"
        badge="Academic Foundation"
        title="education"
        description="Formal master's education in computer science, software architecture, and distributed engineering in Paris, France."
      >
        <EducationSection />
      </Section>

      {/* 7. Closing CTA */}
      <ClosingCTA />
    </main>
  );
}
