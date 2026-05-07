// this server component reads the local markdown file from the root directory and parses it into styled html components.

import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

export default function ArchitecturePage() {
  // resolve the absolute path to the markdown file at the root of your project
  const filePath = path.join(process.cwd(), 'ARCHITECTURE.md');
  
  // read the raw text content from the file
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <main className="min-h-screen p-8 pt-24 max-w-3xl mx-auto">
      
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">architecture log.</h1>
        <p className="text-lg opacity-80">
          live ingestion of the project's internal engineering documentation.
        </p>
      </div>
      
      {/* react-markdown allows us to map raw markdown tags to tailwind-styled elements */}
      <div className="opacity-90 leading-relaxed">
        <ReactMarkdown 
          components={{
            h1: ({...props}) => <h1 className="text-3xl font-bold mt-12 mb-6 hidden" {...props} />, // hiding the md title since we have a page header
            h2: ({...props}) => <h2 className="text-2xl font-semibold mt-10 mb-4 border-b border-foreground/10 pb-2 text-primary" {...props} />,
            h3: ({...props}) => <h3 className="text-xl font-medium mt-8 mb-3" {...props} />,
            ul: ({...props}) => <ul className="list-disc pl-6 space-y-2 mb-6" {...props} />,
            li: ({...props}) => <li className="opacity-80" {...props} />,
            p: ({...props}) => <p className="mb-6 opacity-80" {...props} />,
            strong: ({...props}) => <strong className="font-bold text-foreground" {...props} />,
            code: ({...props}) => <code className="bg-foreground/10 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
          }}
        >
          {fileContent}
        </ReactMarkdown>
      </div>

    </main>
  );
}