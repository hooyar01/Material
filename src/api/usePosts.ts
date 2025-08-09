
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const fetchPosts = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
};
export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 60, // 1 دقیقه
    gcTime: 1000 * 60 * 5, // 5 دقیقه
  });
};
