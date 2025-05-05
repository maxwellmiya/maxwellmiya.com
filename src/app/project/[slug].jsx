import React from "react";
import { useRouter } from "next/router";

const projectData = {
  "azure-cloud-migration": {
    title: "Azure Cloud Migration",
    description: "Successfully migrated services to Azure, enhancing performance and reducing costs.",
    content: "Detailed content about Azure Cloud Migration...",
  },
  "intune-endpoint-security": {
    title: "Endpoint Security Operations",
    description: "Implemented security measures that decreased incidents and improved compliance.",
    content: "Detailed content about Security Operations...",
  },
  "sharepoint-intranet-workflows": {
    title: "SharePoint Intranet",
    description: "Built a modern SharePoint Online intranet with workflow automation for ETSA.",
    content: "Detailed content about SharePoint Intranet...",
  },
  "enterprise-security-upgrade": {
    title: "Enterprise Security Upgrade",
    description: "Enhanced network security with NGFW and SIEM solutions for Juanco and Origen Fresh.",
    content: "Detailed content about Enterprise Security Upgrade...",
  },
  "infrastructure-automation": {
    title: "Infrastructure Automation",
    description: "Automated IT infrastructure tasks using PowerShell and Ansible for MSP clients.",
    content: "Detailed content about Infrastructure Automation...",
  },
};

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projectData[slug];

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gray-100 py-20">
        <div className="max-w-screen-lg mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="mt-4 text-gray-600">{project.description}</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-screen-lg mx-auto px-4">
          <p className="text-gray-600">{project.content}</p>
        </div>
      </section>
    </div>
  );
}