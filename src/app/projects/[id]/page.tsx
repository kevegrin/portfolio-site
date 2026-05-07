// this file handles dynamic routing. it reads the id parameter from the url, finds the matching project in our database, and renders a dedicated page.

import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';

// next 15+ passes params as a promise, so we define the type accordingly
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  // await the params to extract the dynamic id from the url
  const resolvedParams = await params;
  
  // find the specific project in our local data array
  const project = projectsData.find((p) => p.id === resolvedParams.id);

  // if someone types a random url like /projects/fake-id, trigger the 404 page
  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen p-8 pt-24 max-w-3xl mx-auto">
      
      {/* back navigation */}
      <Link href="/" className="inline-block mb-8 opacity-60 hover:opacity-100 transition-opacity">
        &larr; back to projects
      </Link>
      
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      
      {/* tech stack badges */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs rounded-md bg-foreground/5 text-foreground border border-foreground/10">
            {tech}
          </span>
        ))}
      </div>

      {/* main content body */}
      <div className="text-lg opacity-80 leading-relaxed mb-12">
        {project.description}
        <br /><br />
        this is a dynamically generated route. eventually, we can expand our data layer to include full markdown case studies for each project, and render them right here.
      </div>

    </main>
  );
}