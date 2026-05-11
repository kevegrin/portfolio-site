// frontend ui for the pantry-to-plate ai generator
'use client';

import { useState } from 'react';
import { useCompletion } from '@ai-sdk/react';
import ReactMarkdown from 'react-markdown';

export default function PantryToPlate() {
  // state for our atomic form inputs
  const [ingredients, setIngredients] = useState('');
  const [method, setMethod] = useState('Air Fryer');

  // vercel ai sdk hook to handle the streaming api request
  const { completion, complete, isLoading, error } = useCompletion({
    api: '/api/recipe', // points to the route.ts we built earlier
  });

  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // we pass our custom state variables in the body of the request
    complete('', {
      body: { ingredients, method }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-12 font-sans">
      <header className="mb-12 border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Pantry-to-Plate Generator
        </h1>
        <p className="mt-2 text-gray-600">
          Input your available ingredients and cooking method to generate a constraint-based recipe.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* left column: the form */}
        <section className="md:col-span-1 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* ingredients input */}
            <div className="space-y-2">
              <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
                Available Ingredients
              </label>
              <textarea
                id="ingredients"
                rows={4}
                required
                className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="e.g., chicken thighs, rice, dried chiles, onion..."
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </div>

            {/* cooking method toggle */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Cooking Method
              </label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Air Fryer">Air Fryer</option>
                <option value="Pressure Cooker">Pressure Cooker</option>
                <option value="Stovetop">Stovetop</option>
                <option value="Oven">Oven</option>
              </select>
            </div>

            {/* submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Generating Recipe...' : 'Generate Recipe'}
            </button>
          </form>
        </section>

        
        <section className="md:col-span-2 min-h-[400px] rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8 shadow-inner">
          
          {/* render any frontend stream errors here */}
          {error && (
            <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700 shadow-sm">
              <span className="font-bold">Frontend Error:</span> {error.message}
            </div>
          )}

          {/* render the markdown if we have data, otherwise show the empty/loading state */}
          {completion ? (
            <div className="prose prose-blue max-w-none">
              <ReactMarkdown>{completion}</ReactMarkdown>
            </div>
          ) : (
            <div className="flex h-full min-h-[300px] items-center justify-center text-gray-400 text-sm">
              {isLoading ? (
                <span className="animate-pulse">Consulting the digital chef...</span>
              ) : (
                <span>Your generated recipe will appear here.</span>
              )}
            </div>
          )}
          
        </section>
      </div>
    </div>
  );
}