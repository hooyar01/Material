import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
interface RegisterFormValues {
  username: string;
  password: string;
}
export const useRegister = () => {
  return useMutation({
    mutationFn: (values: RegisterFormValues) =>
      axios.post('https://jsonplaceholder.typicode.com/posts', values),
  });
};
