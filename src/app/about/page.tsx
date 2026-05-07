// this file defines the /about route. it utilizes a simple layout to display static information, inheriting the global header automatically.

import React from 'react';

export default function AboutPage() {
  return (
    // standard container to keep the text readable and aligned
    <main className="min-h-screen p-8 pt-24 max-w-3xl mx-auto">
      
      <h1 className="text-4xl font-bold mb-8">about.</h1>
      
      {/* prose container for readable typography */}
      <div className="space-y-6 text-lg opacity-80 leading-relaxed">
        <p>
          i am a developer focused on modern frontend architecture, system design, and building reliable digital experiences.
        </p>
        
        <p>
          this portfolio serves as a documented experiment. the goal is not just to display final products, but to transparently track the engineering process, architectural decisions, and technical problem-solving required to build scalable web applications.
        </p>
        
        <p>
          currently exploring the intersection of react server components, typescript, and component-driven design methodologies.
        </p>
      </div>
      
    </main>
  );
}