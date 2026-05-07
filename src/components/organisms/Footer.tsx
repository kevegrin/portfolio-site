// this organism serves as the global footer. it anchors the bottom of the page layout and provides standard copyright, location context, and secondary links.

import React from 'react';

export const Footer = () => {
  return (
    // mt-auto ensures the footer pushes to the bottom of the flex container, even on short pages
    <footer className="w-full px-8 py-8 mt-auto border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
      
      {/* dynamically grabs the current year */}
      <div className="mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} digital workspace.
      </div>
      
      {/* secondary info and links */}
      <div className="flex items-center gap-6">
        <span>based in tijuana</span>
        <a href="#" className="hover:opacity-100 hover:text-primary transition-colors">github</a>
        <a href="#" className="hover:opacity-100 hover:text-primary transition-colors">linkedin</a>
      </div>
      
    </footer>
  );
};