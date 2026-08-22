import { useEffect } from 'react';

/** Set judul dokumen per halaman. */
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
