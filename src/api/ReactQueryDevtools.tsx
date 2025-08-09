
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const Devtools = () => {
  if (import.meta.env.PROD) return null; 
  return <ReactQueryDevtools position='right' initialIsOpen={false} />;
};

export default Devtools;
