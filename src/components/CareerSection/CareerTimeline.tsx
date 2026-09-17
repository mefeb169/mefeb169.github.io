import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Building2, GraduationCap, Rocket, Globe } from "lucide-react";
import { experience } from "../../data/profile";

const roleIcons = [Globe, Rocket, GraduationCap, Building2, Briefcase];

export const CareerTimeline = () => {
  const careerEvents = experience.map((role, i) => {
    const Icon = roleIcons[i % roleIcons.length];
    return {
      year: role.dates,
      title: role.title,
      subtitle: role.company + (role.location ? ` · ${role.location}` : ""),
      description: role.description,
      icon: <Icon className="h-4 w-4 mr-2 text-primary" />,
    };
  });

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="From a first internship to owning production systems end-to-end"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
