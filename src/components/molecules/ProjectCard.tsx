// this molecule now utilizes next/link to route users to dynamically generated case study pages for projects without external urls.

import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { Button } from '@/components/atoms/Button';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border border-foreground/10 rounded-lg p-6 flex flex-col h-full hover:border-primary/50 transition-colors">
      
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      
      <p className="text-sm opacity-80 mb-6 flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech) => (
          <span 
            key={tech} 
            className="px-2 py-1 text-xs rounded-md bg-foreground/5 text-foreground border border-foreground/10"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* conditional routing: external link if provided, otherwise route to dynamic internal page */}
      {project.link ? (
        <a href={project.link} target="_blank" rel="noreferrer" className="mt-auto">
          <Button variant="outline" className="w-full text-sm py-1">
            view external
          </Button>
        </a>
      ) : (
        <Link href={`/projects/${project.id}`} className="mt-auto">
          <Button variant="secondary" className="w-full text-sm py-1">
            view details
          </Button>
        </Link>
      )}

    </div>
  );
};