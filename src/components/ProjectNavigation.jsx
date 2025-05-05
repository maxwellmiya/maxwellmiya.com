import React from "react";

const projects = [
  { slug: "azure-cloud-migration", title: "Cloud Migration" },
  { slug: "intune-endpoint-security", title: "Endpoint Security Operations" },
  { slug: "sharepoint-intranet-workflows", title: "SharePoint Intranet" },
  { slug: "enterprise-security-upgrade", title: "Enterprise Security Upgrade" },
  { slug: "infrastructure-automation", title: "Infrastructure Automation" },
];

export default function ProjectNavigation({ currentSlug }) {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);

  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <p className="text-lg text-gray-600">
          {previousProject && (
            <a
              href={`/project/${previousProject.slug}`}
              className="text-blue-500 hover:underline"
            >
              ← Previous Project: {previousProject.title}
            </a>
          )}
          {previousProject && nextProject && " | "}
          {nextProject && (
            <a
              href={`/project/${nextProject.slug}`}
              className="text-blue-500 hover:underline"
            >
              Next Project: {nextProject.title} →
            </a>
          )}
        </p>
      </div>
    </section>
  );
}