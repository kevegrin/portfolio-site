// the landing page now imports the local database and maps over it, generating a responsive grid of project card molecules.

import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/molecules/ProjectCard';

export default function Home() {
  return (
    // adjusted the layout to align items to the top rather than center, allowing scrolling
    <main className="min-h-screen flex flex-col items-center p-8 pt-24 max-w-6xl mx-auto">
      
      <div className="w-full mb-12">
        <h1 className="text-4xl font-bold mb-4">digital workspace</h1>
        <p className="text-lg opacity-80 max-w-xl">
          a documented experiment in frontend architecture and system design.
        </p>
      </div>

      {/* css grid to handle responsive card layout: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </main>
  );
}