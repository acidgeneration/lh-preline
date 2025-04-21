'use client';

import React from 'react';

// Icon Components (Simple SVGs for editability - Consider using a library like lucide-react in a real project)
const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-gray-800 group-hover:text-blue-600"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>;
const MessageSquareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-gray-800 group-hover:text-blue-600"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const CogIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-gray-800 group-hover:text-blue-600"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>;
const LinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-gray-800 group-hover:text-blue-600"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const WrenchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-gray-800 group-hover:text-blue-600"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>;
const BarChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-gray-800 group-hover:text-blue-600"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>;
const LightbulbIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-gray-800 group-hover:text-blue-600"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8 text-gray-800 group-hover:text-blue-600"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;

export default function GlossaryHomePage() {
  // Updated placeholder data for LinkedIn Lead Generation with Icons
  const categories = [
    { name: 'Prospecting', icon: <TargetIcon />, slug: 'prospecting' },
    { name: 'Outreach', icon: <MessageSquareIcon />, slug: 'outreach' },
    { name: 'Automation', icon: <CogIcon />, slug: 'automation' },
    { name: 'LinkedIn Features', icon: <LinkIcon />, slug: 'linkedin-features' },
    { name: 'Tools & Software', icon: <WrenchIcon />, slug: 'tools-software' },
    { name: 'Metrics & KPIs', icon: <BarChartIcon />, slug: 'metrics-kpis' },
    { name: 'Sales Techniques', icon: <LightbulbIcon />, slug: 'sales-techniques' },
    { name: 'Compliance', icon: <ShieldIcon />, slug: 'compliance' },
  ];

  const popularTerms = [
    { title: 'Sales Navigator', excerpt: 'LinkedIn\'s premium tool for sales professionals to find and engage prospects.' },
    { title: 'Connection Request', excerpt: 'An invitation sent to connect with another LinkedIn member.' },
    { title: 'InMail', excerpt: 'A private message sent to a LinkedIn member you are not connected to (requires premium).' },
    { title: 'Social Selling Index (SSI)', excerpt: 'A score measuring a user\'s effectiveness at social selling on LinkedIn.' },
    { title: 'Profile Views', excerpt: 'The number of times your LinkedIn profile has been viewed by other members.' },
  ];

  // Updated Featured Terms for LinkedIn Lead Gen
   const featuredTerms = [
    {
      title: 'Lead Nurturing',
      excerpt: 'Building relationships with potential clients not yet ready to buy.',
      imageUrl: 'https://picsum.photos/seed/lead-nurturing/320/224',
      categorySlug: 'outreach'
    },
    {
      title: 'Boolean Search',
      excerpt: 'Using operators like AND, OR, NOT to refine search results on LinkedIn.',
      imageUrl: 'https://picsum.photos/seed/boolean-search/320/224',
      categorySlug: 'prospecting'
    },
    {
      title: 'LinkedIn Groups',
      excerpt: 'Online communities for professionals with shared interests or industries.',
      imageUrl: 'https://picsum.photos/seed/linkedin-groups/320/224',
      categorySlug: 'linkedin-features'
    },
    {
      title: 'CRM Integration',
      excerpt: 'Connecting LinkedIn lead generation tools with Customer Relationship Management software.',
      imageUrl: 'https://picsum.photos/seed/crm-integration/320/224',
      categorySlug: 'tools-software'
    },
  ];

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="bg-white">
      {/* Top-Bar */}
      <div className="py-2 px-4 flex justify-between items-center border-b">
        <a href="/glossary" aria-label="Glossary Home">
          {/* Replace with actual logo if available */}
          <span className="text-xl font-semibold text-gray-800">Glossary</span>
        </a>
        {/* Add any other top-bar elements if needed */}
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
            Glossary
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            Your reference guide to key terms and concepts.
          </p>
        </div>
      </div>

      {/* Search + Filter A-Z */}
      <div className="sticky top-0 z-30 bg-white/90 backdrop-blur py-4 px-4 sm:px-6 lg:px-8 border-b">
        <div className="max-w-[85rem] mx-auto">
          <div className="mb-4">
            {/* HSInput - Search Input */}
            <input
              type="search"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 text-gray-800"
              placeholder="Search terms..."
              aria-label="Search terms"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {alphabet.map((letter) => (
              <button
                key={letter}
                type="button"
                className="py-1 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                aria-label={`Filter by letter ${letter}`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>

       {/* Featured Terms - Moved Up */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Terms</h2>
        {/* Grid */}
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          {featuredTerms.map((term) => (
            // Card
            <a
              key={term.title}
              className="group block rounded-xl overflow-hidden focus:outline-none"
              href={`/glossary/${term.categorySlug}/${term.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
             >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                  <img
                    className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                    src={`https://picsum.photos/seed/${term.title.replace(/\s+/g, '-')}/320/224`} // Dynamically generate image URL
                    alt={`${term.title} Featured Image`}
                  />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                    {term.title}
                  </h3>
                  <p className="mt-3 text-gray-600 line-clamp-3">
                    {term.excerpt}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium">
                    Learn more
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </p>
                </div>
              </div>
            </a>
            // End Card - Note: This is a comment, not valid JSX closing tag
          ))}
        </div>
        {/* End Grid */}
      </div>
      {/* End Featured Terms */}

      {/* Category Grid */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            // HSCard
            <a
              key={cat.name}
              className="group flex flex-col justify-center items-center p-4 sm:p-7 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition text-center"
              href={`/glossary/${cat.slug}`}
            >
              <div className="mb-3">
                {/* Render the icon component */}
                {cat.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                {cat.name}
              </h3>
            </a>
          ))}
        </div>
      </div>

      {/* Popular Terms - Horizontal Scroll HSCard */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Popular Terms</h2>
        <div className="flex gap-6 snap-x snap-mandatory overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {popularTerms.map((term) => (
            // HSCard
            <div key={term.title} className="snap-center shrink-0 w-72 sm:w-80">
              <a
                className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg transition p-4 md:p-5"
                href={`/glossary/placeholder-category/${term.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`} // Placeholder link - needs category
              >
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                  {term.title}
                </h3>
                <p className="mt-2 text-gray-600 line-clamp-3">
                  {term.excerpt}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gray-100">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
          <div className="p-6 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                Download our Checklist!
              </h3>
              <p className="mt-2 text-lg text-blue-100">
                Get useful optimization tips.
              </p>
              <a className="mt-5 inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-gray-300 text-sm text-blue-600 hover:text-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 rounded-full"
                 href="#" // Placeholder link
              >
                Download Checklist
              </a>
            </div>
          </div>
        </div>
      </div>

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