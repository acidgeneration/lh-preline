import React from 'react';

export default function Template1Page() {
  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-full mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
          <div className="px-4 md:px-0 flex justify-between items-center">
            <div className="flex items-center">
              {/* Logo */}
              <a className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" href="https://preline.co/templates/personal/index.html" aria-label="Preline">
                <svg className="w-24 h-auto" width="116" height="32" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.5696 30.8182V11.3182H37.4474V13.7003H37.6229C37.7952 13.3187 38.0445 12.9309 38.3707 12.5369C38.7031 12.1368 39.134 11.8045 39.6634 11.5398C40.1989 11.2689 40.8636 11.1335 41.6577 11.1335C42.6918 11.1335 43.6458 11.4044 44.5199 11.946C45.3939 12.4815 46.0926 13.291 46.6158 14.3743C47.139 15.4515 47.4006 16.8026 47.4006 18.4276C47.4006 20.0095 47.1451 21.3452 46.6342 22.4347C46.1295 23.518 45.4401 24.3397 44.5661 24.8999C43.6982 25.4538 42.7256 25.7308 41.6484 25.7308C40.8852 25.7308 40.2358 25.6046 39.7003 25.3523C39.1709 25.0999 38.737 24.7829 38.3984 24.4013C38.0599 24.0135 37.8014 23.6226 37.6229 23.2287H37.5028V30.8182H33.5696ZM37.4197 18.4091C37.4197 19.2524 37.5367 19.9879 37.7706 20.6158C38.0045 21.2436 38.343 21.733 38.7862 22.0838C39.2294 22.4285 39.768 22.6009 40.402 22.6009C41.0421 22.6009 41.5838 22.4254 42.027 22.0746C42.4702 21.7176 42.8056 21.2251 43.0334 20.5973C43.2673 19.9633 43.3842 19.2339 43.3842 18.4091C43.3842 17.5904 43.2704 16.8703 43.0426 16.2486C42.8149 15.6269 42.4794 15.1406 42.0362 14.7898C41.593 14.4389 41.0483 14.2635 40.402 14.2635C39.7618 14.2635 39.2202 14.4328 38.777 14.7713C38.34 15.1098 38.0045 15.59 37.7706 16.2116C37.5367 16.8333 37.4197 17.5658 37.4197 18.4091ZM49.2427 25.5V11.3182H53.0559V13.7926H53.2037C53.4622 12.9124 53.8961 12.2476 54.5055 11.7983C55.1149 11.3428 55.8166 11.1151 56.6106 11.1151C56.8076 11.1151 57.02 11.1274 57.2477 11.152C57.4754 11.1766 57.6755 11.2105 57.8478 11.2536V14.7436C57.6632 14.6882 57.4077 14.639 57.0815 14.5959C56.7553 14.5528 56.4567 14.5312 56.1859 14.5312C55.6073 14.5312 55.0903 14.6574 54.6348 14.9098C54.1854 15.156 53.8284 15.5007 53.5638 15.9439C53.3052 16.3871 53.176 16.898 53.176 17.4766V25.5H49.2427ZM64.9043 25.777C63.4455 25.777 62.1898 25.4815 61.1373 24.8906C60.0909 24.2936 59.2845 23.4503 58.7182 22.3608C58.1519 21.2652 57.8688 19.9695 57.8688 18.4737C57.8688 17.0149 58.1519 15.7346 58.7182 14.6328C59.2845 13.531 60.0816 12.6723 61.1096 12.0568C62.1437 11.4413 63.3563 11.1335 64.7474 11.1335C65.683 11.1335 66.5539 11.2843 67.3603 11.5859C68.1728 11.8814 68.8806 12.3277 69.4839 12.9247C70.0932 13.5218 70.5672 14.2727 70.9057 15.1776C71.2443 16.0762 71.4135 17.1288 71.4135 18.3352V19.4155H59.4384V16.978H67.7111C67.7111 16.4117 67.588 15.91 67.3418 15.473C67.0956 15.036 66.754 14.6944 66.317 14.4482C65.8861 14.1958 65.3844 14.0696 64.812 14.0696C64.2149 14.0696 63.6856 14.2081 63.2239 14.4851C62.7684 14.7559 62.4114 15.1222 62.1529 15.5838C61.8944 16.0393 61.762 16.5471 61.7559 17.1072V19.4247C61.7559 20.1264 61.8851 20.7327 62.1437 21.2436C62.4083 21.7545 62.7807 22.1484 63.2608 22.4254C63.741 22.7024 64.3103 22.8409 64.9689 22.8409C65.406 22.8409 65.8061 22.7794 66.1692 22.6562C66.5324 22.5331 66.8432 22.3485 67.1018 22.1023C67.3603 21.8561 67.5572 21.5545 67.6927 21.1974L71.3304 21.4375C71.1458 22.3116 70.7672 23.0748 70.1948 23.7273C69.6285 24.3736 68.896 24.8783 67.9974 25.2415C67.1048 25.5985 66.0738 25.777 64.9043 25.777ZM77.1335 6.59091V25.5H73.2003V6.59091H77.1335ZM79.5043 25.5V11.3182H83.4375V25.5H79.5043ZM81.4801 9.49006C80.8954 9.49006 80.3937 9.29616 79.9752 8.90838C79.5628 8.51444 79.3566 8.04356 79.3566 7.49574C79.3566 6.95407 79.5628 6.48935 79.9752 6.10156C80.3937 5.70762 80.8954 5.51065 81.4801 5.51065C82.0649 5.51065 82.5635 5.70762 82.9759 6.10156C83.3944 6.48935 83.6037 6.95407 83.6037 7.49574C83.6037 8.04356 83.3944 8.51444 82.9759 8.90838C82.5635 9.29616 82.0649 9.49006 81.4801 9.49006ZM89.7415 17.3011V25.5H85.8083V11.3182H89.5569V13.8203H89.723C90.037 12.9955 90.5632 12.343 91.3019 11.8629C92.0405 11.3767 92.9361 11.1335 93.9887 11.1335C94.9735 11.1335 95.8322 11.349 96.5647 11.7798C97.2971 12.2107 97.8665 12.8262 98.2728 13.6264C98.679 14.4205 98.8821 15.3684 98.8821 16.4702V25.5H94.9489V17.1719C94.9551 16.304 94.7335 15.6269 94.2841 15.1406C93.8348 14.6482 93.2162 14.402 92.4283 14.402C91.8989 14.402 91.4311 14.5159 91.0249 14.7436C90.6248 14.9714 90.3109 15.3037 90.0831 15.7408C89.8615 16.1716 89.7477 16.6918 89.7415 17.3011ZM107.665 25.777C106.206 25.777 104.951 25.4815 103.898 24.8906C102.852 24.2936 102.045 23.4503 101.479 22.3608C100.913 21.2652 100.63 19.9695 100.63 18.4737C100.63 17.0149 100.913 15.7346 101.479 14.6328C102.045 13.531 102.842 12.6723 103.87 12.0568C104.905 11.4413 106.117 11.1335 107.508 11.1335C108.444 11.1335 109.315 11.2843 110.121 11.5859C110.934 11.8814 111.641 12.3277 112.245 12.9247C112.854 13.5218 113.328 14.2727 113.667 15.1776C114.005 16.0762 114.174 17.1288 114.174 18.3352V19.4155H102.199V16.978H110.472C110.472 16.4117 110.349 15.91 110.103 15.473C109.856 15.036 109.515 14.6944 109.078 14.4482C108.647 14.1958 108.145 14.0696 107.573 14.0696C106.976 14.0696 106.446 14.2081 105.985 14.4851C105.529 14.7559 105.172 15.1222 104.914 15.5838C104.655 16.0393 104.523 16.5471 104.517 17.1072V19.4247C104.517 20.1264 104.646 20.7327 104.905 21.2436C105.169 21.7545 105.542 22.1484 106.022 22.4254C106.502 22.7024 107.071 22.8409 107.73 22.8409C108.167 22.8409 108.567 22.7794 108.93 22.6562C109.293 22.5331 109.604 22.3485 109.863 22.1023C110.121 21.8561 110.318 21.5545 110.454 21.1974L114.091 21.4375C113.907 22.3116 113.528 23.0748 112.956 23.7273C112.389 24.3736 111.657 24.8783 110.758 25.2415C109.866 25.5985 108.835 25.777 107.665 25.777Z" className="fill-gray-800 dark:fill-white" fill="currentColor" />
                  <path d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12" className="stroke-gray-800 dark:stroke-white" stroke="currentColor" strokeWidth="2" />
                  <path d="M5 29.5V16.66C5 12.1534 8.58172 8.5 13 8.5C17.4183 8.5 21 12.1534 21 16.66C21 21.1666 17.4183 24.82 13 24.82H12" className="stroke-gray-800 dark:stroke-white" stroke="currentColor" strokeWidth="2" />
                  <circle cx="13" cy="16.5214" r="5" className="fill-gray-800 dark:fill-white" fill="currentColor" />
                </svg>
              </a>
              {/* End Logo */}
            </div>

            <div className="md:hidden">
              {/* Toggle Button */}
              <button type="button" className="hs-collapse-toggle flex justify-center items-center size-7 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-navbar-header-floating-collapse" aria-expanded="false" aria-controls="hs-navbar-header-floating" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-header-floating">
                <svg className="hs-collapse-open:hidden shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
              {/* End Toggle Button */}
            </div>
          </div>

          <div id="hs-navbar-header-floating" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-header-floating-collapse">
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
              <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-hidden dark:border-neutral-200 dark:text-neutral-200" href="#" aria-current="page">Home</a>
              <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Projects</a>
              <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Work</a>
              <a className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-hidden dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Articles</a>
            </div>
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}

      {/* ========== MAIN CONTENT ========== */}
      <main id="content">
        <div className="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
          {/* Profile */}
          <div className="flex items-center gap-x-3">
            <div className="shrink-0">
              <img className="shrink-0 size-16 rounded-full" src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
            </div>

            <div className="grow">
              <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
                Eliana Garcia
              </h1>
              <p className="text-sm text-gray-600 dark:text-neutral-400">
                Graphic Designer, Web designer/developer
              </p>
            </div>
          </div>
          {/* End Profile */}

          {/* About */}
          <div className="mt-8">
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              I am a seasoned graphic designer with over 14 years of experience in creating visually appealing and user-centric designs. My expertise spans across UI design, design systems, and custom illustrations, helping clients bring their digital visions to life.
            </p>

            <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
              Currently, I work remotely for Notion, where I design template UIs, convert them into HTML and CSS, and provide comprehensive support to our users. I am passionate about crafting elegant and functional designs that enhance user experiences.
            </p>

            <ul className="mt-5 flex flex-col gap-y-3">
              <li className="flex items-center gap-x-2.5">
                <svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                  elianagarcia997@about.me
                </a>
              </li>

              <li className="flex items-center gap-x-2.5">
                <svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.1881 10.1624L22.7504 0H20.7214L13.2868 8.82385L7.34878 0H0.5L9.47944 13.3432L0.5 24H2.5291L10.3802 14.6817L16.6512 24H23.5L14.1881 10.1624ZM11.409 13.4608L3.26021 1.55962H6.37679L20.7224 22.5113H17.6058L11.409 13.4613V13.4608Z" fill="currentColor" />
                </svg>
                <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                  @elianagarcia997
                </a>
              </li>

              <li className="flex items-center gap-x-2.5">
                <svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                </svg>
                <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-hidden focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                  @elianagarcia997
                </a>
              </li>
            </ul>
          </div>
          {/* End About */}

          {/* Projects */}
          <div className="mt-10 sm:mt-14">
            <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
              Projects
            </h2>

            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <a className="group block relative overflow-hidden rounded-lg" href="#">
                <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project" />
                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>

              <a className="group block relative overflow-hidden rounded-lg" href="#">
                <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project" />
                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>

              <a className="group block relative overflow-hidden rounded-lg" href="#">
                <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project" />
                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>

              <a className="group block relative overflow-hidden rounded-lg" href="#">
                <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1707760696486-2a2cd7e0b6a6?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project" />
                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>

              <a className="group block relative overflow-hidden rounded-lg" href="#">
                <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1585159812596-fac104f2f069?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project" />
                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>

              <a className="group block relative overflow-hidden rounded-lg" href="#">
                <img className="w-full size-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800" src="https://images.unsplash.com/photo-1654131300276-db70adf4f85d?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project" />
                <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
                  <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                    <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                    <span className="text-xs">View</span>
                  </div>
                </div>
              </a>
            </div>
            {/* End Image Grid */}
          </div>
          {/* End Projects */}

          {/* Experience */}
          <div className="mt-10 sm:mt-14">
            <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
              Experience
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-5">
              {/* Card */}
              <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 p-4 dark:hover:bg-neutral-800">
                <a className="absolute inset-0 z-[1]" href="#"></a>

                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-gray-200 text-gray-800 rounded-full font-semibold text-xs uppercase dark:border-neutral-700 dark:text-neutral-200">
                      N
                    </span>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-5">
                  <h3 className="text-base font-medium text-gray-800 dark:text-neutral-200">
                    Notion
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 dark:text-neutral-400">
                    Aug 2021 - Present
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    Remote Graphic Designer. Design template UIs, convert to HTML/CSS, and provide ongoing user support.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Card */}

              {/* Card */}
              <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 p-4 dark:hover:bg-neutral-800">
                <a className="absolute inset-0 z-[1]" href="#"></a>

                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-gray-200 text-gray-800 rounded-full font-semibold text-xs uppercase dark:border-neutral-700 dark:text-neutral-200">
                      PS
                    </span>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-5">
                  <h3 className="text-base font-medium text-gray-800 dark:text-neutral-200">
                    Photoshop
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 dark:text-neutral-400">
                    Sep 2016 - Aug 2021
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    Graphic Designer. Created marketing materials, branding assets, and illustrations.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Card */}

              {/* Card */}
              <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100 p-4 dark:hover:bg-neutral-800">
                <a className="absolute inset-0 z-[1]" href="#"></a>

                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-gray-200 text-gray-800 rounded-full font-semibold text-xs uppercase dark:border-neutral-700 dark:text-neutral-200">
                      UP
                    </span>
                  </div>
                </div>
                {/* End Icon */}

                {/* Right Content */}
                <div className="grow pb-5">
                  <h3 className="text-base font-medium text-gray-800 dark:text-neutral-200">
                    Upwork
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 dark:text-neutral-400">
                    Aug 2015 - Sep 2016
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                    Freelance Designer. Provided UI/UX and graphic design services.
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Card */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Experience */}

          {/* Articles */}
          <div className="mt-10 sm:mt-14">
            <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
              Articles
            </h2>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {/* Card */}
              <a className="group block rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-neutral-800" href="#">
                <div className="relative pt-[50%] sm:pt-[60%] rounded-lg overflow-hidden">
                  <img className="absolute top-0 start-0 w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                  <span className="absolute top-0 end-0 rounded-se-lg rounded-es-lg text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-neutral-900">
                    Figma
                  </span>
                </div>

                <div className="mt-3">
                  <h3 className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Unlocking Collaboration Secrets in Figma
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 dark:text-neutral-400">
                    Explore Figma's collaborative features for seamless teamwork.
                  </p>
                </div>
              </a>
              {/* End Card */}

              {/* Card */}
              <a className="group block rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-neutral-800" href="#">
                <div className="relative pt-[50%] sm:pt-[60%] rounded-lg overflow-hidden">
                  <img className="absolute top-0 start-0 w-full h-full object-cover rounded-lg" src="https://images.unsplash.com/photo-1516738901171-8eb4fc296664?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                  <span className="absolute top-0 end-0 rounded-se-lg rounded-es-lg text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-neutral-900">
                    Web Design
                  </span>
                </div>

                <div className="mt-3">
                  <h3 className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Best Web Design Trends of 2024
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 dark:text-neutral-400">
                    Stay ahead with the latest in web design trends.
                  </p>
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Articles */}

          {/* Footer */}
          <footer className="mt-10 sm:mt-14">
            <p className="text-xs text-gray-500 dark:text-neutral-500">© 2024 Preline. Created by Eliana Garcia using Preline UI.</p>
          </footer>
          {/* End Footer */}
        </div>
      </main>
      {/* ========== END MAIN CONTENT ========== */}
    </>
  );
}

// NOTE: This is a partial conversion. The original HTML was much larger (890 lines).
// Some parts like the footer script, comments, and potentially complex structures might be missing or need further adjustments.
// Also, self-closing tags might need review (e.g., <path>, <line>, <rect> in SVGs should probably not be self-closed in React unless explicitly handled).
// Inline styles were removed as requested.
 