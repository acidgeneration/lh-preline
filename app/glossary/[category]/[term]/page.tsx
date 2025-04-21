'use client';

import React from 'react';
import { useParams } from 'next/navigation'; // Import useParams

export default function GlossaryTermPage() {
  const params = useParams();
  const categoryName = params.category ? decodeURIComponent(params.category as string) : 'Category';
  const termName = params.term ? decodeURIComponent(params.term as string) : 'Term';
  const categoryTitle = categoryName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const termTitle = termName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Updated Placeholder data for LinkedIn Lead Gen
  const relatedTerms = [
    { title: 'Sales Navigator Tips', excerpt: 'Advanced techniques for using Sales Navigator effectively...', categorySlug: 'linkedin-features' },
    { title: 'Personalized Outreach', excerpt: 'Crafting connection requests and messages that get responses...', categorySlug: 'outreach' },
    { title: 'LinkedIn Automation Tools', excerpt: 'A comparison of popular tools for automating tasks...', categorySlug: 'tools-software' },
  ];
  const faqItems = [
    { question: `What is the primary benefit of ${termTitle}?`, answer: `The main advantage is its ability to streamline the process of finding and engaging potential leads on LinkedIn.` },
    { question: `How does ${termTitle} compare to traditional methods?`, answer: `Compared to cold emailing or calling, using ${termTitle} often results in higher engagement rates due to the platform's context.` },
    { question: `Are there any risks associated with ${termTitle}?`, answer: `Potential risks include account restrictions if automation is overused or guidelines are violated. Always adhere to LinkedIn's terms of service.` },
  ];
  const tocItems = ['Introduction', 'Key Concepts', 'Usage Examples', 'Best Practices', 'Conclusion']; // Added Best Practices

  return (
    <div className="bg-white">
      {/* Top-Bar (optional, can be in layout) */}
      <div className="py-2 px-4 flex justify-between items-center border-b">
        <a href="/glossary" aria-label="Glossary Home">
          <span className="text-xl font-semibold text-gray-800">Glossary</span>
        </a>
      </div>

      {/* Breadcrumb - HSBreadcrumb */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 py-4 mx-auto">
        <ol className="flex items-center whitespace-nowrap">
          <li className="inline-flex items-center">
            <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/glossary">
              Glossary
            </a>
            <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </li>
          <li className="inline-flex items-center">
            <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href={`/glossary/${categoryName}`}>
              {categoryTitle}
            </a>
            <svg className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </li>
          <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate" aria-current="page">
            {termTitle}
          </li>
        </ol>
      </div>

      {/* Main Content Area with optional TOC sidebar */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="lg:flex lg:gap-8">

          {/* Table of Contents (TOC) - Sidebar - HSAccordion */}
          <aside className="hidden lg:block w-64 shrink-0 py-5 space-y-8 lg:sticky lg:top-20 self-start">
             <div className="hs-accordion-group">
                <div className="hs-accordion active" id="toc-accordion">
                  <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg" aria-controls="toc-accordion-body">
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                    Table of Contents
                  </button>
                  <div id="toc-accordion-body" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="toc-accordion">
                    <ul className="pt-2 ps-2 space-y-1">
                      {tocItems.map(item => (
                        <li key={item}>
                          <a className="block py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}>
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
             </div>
          </aside>

          {/* Main Article Content */}
          <main className="flex-grow py-5">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{termTitle}</h1>

            {/* Meta Bar */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
              <span className="flex items-center gap-1">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                ~5 min read {/* Placeholder */}
              </span>
              <span>Updated: July 1, 2024</span> {/* Placeholder */}
            </div>

            {/* Article Content - Restored prose, added text-gray-800 */}
            <article className="prose prose-lg max-w-none text-gray-800 prose-a:text-blue-600 hover:prose-a:text-blue-500 prose-img:rounded-xl">
                <p id="introduction">This is the introduction to the term <strong>{termTitle}</strong> within the context of LinkedIn lead generation. It explains the core concept and its importance in finding and engaging potential clients on the platform.</p>
                <p>Understanding {termTitle} is crucial for anyone looking to leverage LinkedIn for sales or marketing. This section will delve deeper into its nuances.</p>
                <h2 id="key-concepts">Key Concepts Related to {termTitle}</h2>
                <p>Several key concepts underpin the effective use of {termTitle}. These include identifying your ideal customer profile (ICP), utilizing search filters, and understanding connection degree limitations.</p>
                <ul>
                  <li>Ideal Customer Profile (ICP)</li>
                  <li>LinkedIn Search Filters (e.g., Title, Industry, Location)</li>
                  <li>Connection Degrees (1st, 2nd, 3rd+)</li>
                </ul>
                <blockquote className="border-s-4 border-gray-300 p-4 bg-gray-50 my-6 not-prose">
                  <p className="text-gray-800 italic">"Effective lead generation on LinkedIn starts with a clear understanding of who you're trying to reach."</p>
                </blockquote>
                 <h2 id="usage-examples">Usage Examples of {termTitle}</h2>
                 <p>Here are a few scenarios illustrating how {termTitle} is applied in practice for LinkedIn lead generation: searching for specific job titles in target industries, sending personalized connection requests, or automating outreach sequences.</p>
                 <figure>
                   <img className="w-full object-cover rounded-xl" src="/assets/placeholder.jpg" alt="Diagram or screenshot illustrating the concept" />
                   <figcaption className="text-center text-sm text-gray-500 mt-2">Visual example related to {termTitle}</figcaption>
                 </figure>
                 <h2 id="best-practices">Best Practices</h2>
                 <p>To maximize results and avoid common pitfalls when using {termTitle}, consider these best practices: personalize your outreach, focus on building relationships rather than just selling, respect LinkedIn's usage limits, and track your key metrics.</p>
                <h2 id="conclusion">Conclusion</h2>
                <p>In conclusion, {termTitle} is a fundamental aspect of successful LinkedIn lead generation. By mastering its application and adhering to best practices, sales and marketing professionals can significantly improve their prospecting and outreach efforts.</p>
            </article>

            {/* FAQ Block - HSAccordion */}
            <div className="mt-12 hs-accordion-group">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions (FAQ)</h2>
              {faqItems.map((faq, index) => (
                <div key={index} className={`hs-accordion pt-6 pb-3 ${index === 0 ? 'active' : ''}`} id={`faq-accordion-${index}`}>
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500"
                    aria-controls={`faq-accordion-body-${index}`}
                  >
                    {faq.question}
                    <svg className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    <svg className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                  </button>
                  <div id={`faq-accordion-body-${index}`} className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${index !== 0 ? 'hidden' : ''}`} aria-labelledby={`faq-accordion-${index}`}>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Related Terms - HSCard */}
            <div className="mt-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Terms</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedTerms.map((term) => (
                  <a
                    key={term.title}
                    className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-lg transition p-4 md:p-5"
                    href={`/glossary/${term.categorySlug}/${term.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
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
            </div>

            {/* Lead Magnet - HSCard marketing */}
            <div className="mt-12 bg-gray-100 p-6 rounded-lg">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-semibold text-gray-800 sm:text-3xl">
                  Deepen Your LinkedIn Knowledge!
                </h3>
                <p className="mt-2 text-lg text-gray-600">
                  Subscribe to our newsletter for exclusive lead gen tips.
                </p>
                <a className="mt-5 inline-flex justify-center items-center gap-x-2 text-center bg-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition py-3 px-4"
                  href="#" // Placeholder link
                >
                  Subscribe
                </a>
              </div>
            </div>

          </main>
        </div>
      </div>

      {/* Footer (can be in layout) */}
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