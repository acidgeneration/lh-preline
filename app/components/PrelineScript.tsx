'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    HSStaticMethods?: {
      autoInit: (collection?: string | string[]) => void;
    };
  }
}

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    // Dynamically import Preline only on the client side
    import('preline/dist/index.js')
      .then(() => {
          // Initialize Preline after the script has loaded
          window.HSStaticMethods?.autoInit();
          console.log('Preline initialized'); // Optional: for debugging
      })
      .catch((err) => {
          console.error('Error loading Preline:', err); // Optional: for debugging
      });

  }, [path]); // Re-run effect when path changes to potentially re-initialize components

  return null;
} 