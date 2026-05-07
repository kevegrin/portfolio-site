// this file acts as our local data store for project content. by separating the data from our ui components, we ensure our codebase remains clean and highly scalable as new projects are added.

// define the strict typescript shape of a single project
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string; // optional property for github or live demo links
}

// export an array of project objects conforming to the interface above
export const projectsData: Project[] = [
  {
    id: "portfolio-architecture",
    title: "frontend architecture portfolio",
    description: "a documented experiment building a scalable digital footprint utilizing atomic design principles and modern web standards.",
    techStack: ["next.js", "typescript", "tailwind css"]
  },
  {
    id: "ios-grocery-app",
    title: "ios grocery manager",
    description: "a native mobile application focused on intuitive user interfaces and reliable state management.",
    techStack: ["swift", "swiftui"]
  },
  {
    id: "software-patterns",
    title: "software design patterns",
    description: "practical academic implementation of structural and behavioral design patterns for resilient system architecture.",
    techStack: ["system design", "process engineering"]
  }
];