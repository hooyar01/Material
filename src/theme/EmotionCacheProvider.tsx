
import { CacheProvider } from '@emotion/react';
import rtlCache from './rtlCache';
import type { ReactNode } from 'react';
const EmotionCacheProvider = ({ children }: { children: ReactNode }) => {
  document.documentElement.setAttribute('dir', 'rtl');
  return <CacheProvider value={rtlCache}>{children}</CacheProvider>;
};
export default EmotionCacheProvider;
