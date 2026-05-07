# architecture and learning log

## objective
building a dedicated digital footprint to demonstrate modern frontend architecture, deliberate design choices, and technical problem-solving.

## tech stack
- **next.js (app router):** handles routing and server-side generation for optimal performance and basic seo.
- **typescript:** provides type safety to catch runtime errors during compilation.
- **tailwind css:** utility-first styling tightly coupled to components.

## decision log

### april 2026 - project initialization
- initialized next.js with strict typescript and tailwind configurations.
- enabled `src-dir` to cleanly separate application code from root configuration files.
- established `atoms`, `molecules`, `organisms`, and `templates` directories to enforce atomic design principles.

### april 2026 - server vs. client boundaries
- **problem:** encountered a runtime error passing an `onClick` handler to the `Button` component ("Event handlers cannot be passed to Client Component props").
- **solution:** added the `"use client";` directive to the top of the `Button.tsx` file.
- **rationale:** next.js app router defaults to server components for performance. ui atoms that require interactivity or browser event listeners must be explicitly marked as client components to bridge the server-client boundary.

### april 2026 - structural layout and component composition
- **action:** built the `Header.tsx` organism and injected it into the root `layout.tsx`.
- **architecture:** utilized the next.js root layout to create a persistent navigation wrapper, ensuring the header does not unmount or re-render during client-side route transitions. 
- **composition:** demonstrated atomic design scalability by successfully importing and rendering the `Button` atom within the `Header` organism.

### april 2026 - data layer and component composition
- **action:** established the data layer (`projects.ts`) and built the `ProjectCard.tsx` molecule to dynamically render an interface grid.
- **architecture:** separated data from ui logic using a strictly typed typescript interface. this allows the portfolio to scale without hardcoding html for future additions.
- **debugging:** encountered a module resolution error (`Module not found`). resolved by aligning the file casing (`projects.ts`) with the import statement. documented the discrepancy between the case-insensitive macos file system and the strictly case-sensitive node.js compiler.

### april 2026 - client-side routing optimization
- **problem:** standard html anchor tags (`<a>`) in the header caused incorrect routing behavior and bypassed next.js optimizations.
- **solution:** refactored `Header.tsx` to utilize the native `next/link` component.
- **rationale:** the `Link` component intercepts standard browser navigation to enable fast, client-side route transitions without triggering a full page reload, maintaining application state and improving performance.

### april 2026 - dynamic routing for project case studies
- **action:** implemented next.js dynamic route segments (`[id]`) for individual project pages.
- **architecture:** utilized server-side `params` to match url parameters against the local `projects.ts` database, rendering dynamic content without hardcoding separate pages.

### april 2026 - server-side file ingestion and security
- **action:** built the `/architecture` route to dynamically read and parse the local `ARCHITECTURE.md` file using `react-markdown`.
- **architecture:** leveraged next.js default server components to safely utilize core node.js modules (`fs`, `path`) directly inside a react component.
- **security:** this approach is inherently secure because file system operations execute strictly on the server during rendering. only the fully parsed, static html is sent across the network to the client's browser, completely obscuring the internal node environment and local directory structure from the end user.

### april 2026 - responsive design and client state
- **action:** implemented a global `Footer.tsx` organism and refactored the `Header.tsx` organism to support a mobile-responsive menu overlay.
- **architecture:** transitioned the header to a client component (`"use client"`) to manage local react state (`useState`) for the mobile menu toggle. ensures the menu dynamically mounts/unmounts based on screen size while preserving desktop navigation.