'use client';

import React from 'react';
import { useParams } from 'next/navigation'; // Import useParams

// Icon Components (Should match homepage)
const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const MessageSquareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const CogIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>;
const LinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const WrenchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const BarChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>;
const LightbulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;

// Category data (centralized or passed as props in a real app)
const glossaryCategories = [
  { name: 'Prospecting', icon: <TargetIcon />, slug: 'prospecting' },
  { name: 'Outreach', icon: <MessageSquareIcon />, slug: 'outreach' },
  { name: 'Automation', icon: <CogIcon />, slug: 'automation' },
  { name: 'LinkedIn Features', icon: <LinkIcon />, slug: 'linkedin-features' },
  { name: 'Tools & Software', icon: <WrenchIcon />, slug: 'tools-software' },
  { name: 'Metrics & KPIs', icon: <BarChartIcon />, slug: 'metrics-kpis' },
  { name: 'Sales Techniques', icon: <LightbulbIcon />, slug: 'sales-techniques' },
  { name: 'Compliance', icon: <ShieldIcon />, slug: 'compliance' },
];

export default function GlossaryCategoryPage() {
  const params = useParams();
  const currentCategorySlug = params.category ? decodeURIComponent(params.category as string) : '';
  const categoryDetails = glossaryCategories.find(cat => cat.slug === currentCategorySlug);
  const categoryTitle = categoryDetails ? categoryDetails.name : 'Category';

  // Placeholder data for terms in this category
  const terms = [
    { title: `${categoryTitle} Term Example 1`, excerpt: `Example description for a term within the ${categoryTitle} category...` },
    { title: `Another ${categoryTitle} Concept`, excerpt: `Further explanation related to ${categoryTitle}...` },
    { title: `Key ${categoryTitle} Strategy`, excerpt: `Detailing a specific strategy for ${categoryTitle}...` },
    { title: `${categoryTitle} Best Practice`, excerpt: `Best practices concerning ${categoryTitle}...` },
    { title: `Understanding ${categoryTitle} Metrics`, excerpt: `How to measure success in ${categoryTitle}...` },
    { title: `Common ${categoryTitle} Mistakes`, excerpt: `Pitfalls to avoid within ${categoryTitle}...` },
  ];

  return (
    <div className="bg-white">
       {/* Top-Bar */}
      <div className="py-2 px-4 flex justify-between items-center border-b">
        <a href="/glossary" aria-label="Glossary Home">
          <span className="text-xl font-semibold text-gray-800">Glossary</span>
        </a>
        {/* Mobile Sidebar Toggle Button */}
        <div className="lg:hidden">
          <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-gray-800 border border-gray-800 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-900 focus:outline-none focus:bg-gray-900" data-hs-overlay="#glossary-sidebar-mobile">
            Categories
          </button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 py-4 mx-auto">
        <ol className="flex items-center whitespace-nowrap">
          <li className="inline-flex items-center">
            <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/glossary">
              Glossary
            </a>
            <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </li>
          <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate" aria-current="page">
            {categoryTitle}
          </li>
        </ol>
      </div>

      {/* Main Content Area with Sidebar Layout */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
         <div className="lg:flex lg:gap-8">

           {/* Sidebar for Categories (desktop) */}
           <aside className="hidden lg:block lg:w-64 shrink-0 py-5 space-y-8 lg:sticky lg:top-20 self-start">
             <nav>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Categories</h3>
               <ul className="space-y-1">
                  {glossaryCategories.map((cat) => {
                     const isActive = currentCategorySlug === cat.slug;
                     return (
                       <li key={cat.slug}>
                         <a
                           className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg focus:outline-none focus:bg-gray-100 ${isActive ? 'bg-gray-100 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                           href={`/glossary/${cat.slug}`}
                         >
                           {cat.icon} {/* Render the icon component */}
                           {cat.name}
                         </a>
                       </li>
                     );
                  })}
                </ul>
             </nav>
           </aside>

           {/* Mobile Sidebar (using hs-overlay) */}
            <aside
              id="glossary-sidebar-mobile"
              className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:hidden"
            >
              <div className="px-6 flex justify-between items-center border-b pb-3 mb-3">
                 <a className="flex-none text-xl font-semibold" href="/glossary" aria-label="Glossary">Glossary</a>
                 {/* Close button for mobile sidebar */}
                 <button type="button" className="hs-overlay-close size-7 flex justify-center items-center text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                   <span className="sr-only">Close modal</span>
                   <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                 </button>
              </div>
              <nav className="p-6 w-full flex flex-col flex-wrap">
                <ul className="space-y-1.5">
                  {glossaryCategories.map((cat) => {
                      const isActive = currentCategorySlug === cat.slug;
                      return (
                        <li key={cat.slug}>
                          <a
                            className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg focus:outline-none focus:bg-gray-100 ${isActive ? 'bg-gray-100 text-blue-600 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                            href={`/glossary/${cat.slug}`}
                          >
                            {cat.icon} {/* Render the icon component */}
                            {cat.name}
                          </a>
                        </li>
                      );
                   })}
                </ul>
              </nav>
           </aside>

           {/* Main Content Area */}
           <main className="flex-grow py-5">
             {/* Hero Category */}
            <div className="mb-10">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{categoryTitle}</h1>
              <p className="text-lg text-gray-600">Description for the {categoryTitle} category. Learn more about terms in this area.</p>
            </div>

             {/* Term Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {terms.map((term) => (
                 <a
                    key={term.title}
                    className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg transition p-4 md:p-5"
                    href={`/glossary/${currentCategorySlug}/${term.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                      {term.title}
                    </h3>
                    <p className="mt-2 text-gray-600 line-clamp-3">
                      {term.excerpt}
                    </p>
                 </a>
              ))}
            </div>

             {/* Pagination */}
            <nav className="flex justify-center items-center space-x-2">
              <a className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md" href="#">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">1</a>
              <a className="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full" href="#" aria-current="page">2</a>
              <a className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">3</a>
              <a className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md" href="#">
                <span className="sr-only">Next</span>
                <span aria-hidden="true">»</span>
              </a>
            </nav>
           </main>
         </div> {/* Close lg:flex */}
      </div> {/* Close max-w container */} 

      {/* Footer */}
       <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center">
           <div>
            <a className="flex-none text-xl font-semibold text-gray-800 focus:outline-none focus:opacity-80" href="/glossary" aria-label="Glossary Home">
              Glossary
            </a>
          </div>
          <div className="mt-3">
            <p className="text-gray-500">© 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 