import { useEffect } from 'react';

export const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = `Makehasu: ${title}`;
    return () => {
      document.title = 'Makehasu';
    };
  }, [title]);
}; 