
import { usePosts } from '../../api/usePosts';
import { CircularProgress, Typography, Card, CardContent } from '@mui/material';
const PostList = () => {
  const { data: posts, isLoading, isError } = usePosts();
  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography color="error">خطا در بارگذاری پست‌ها</Typography>;
  return (
    <>
      <Typography variant="h4" sx={{ my: 2 }}>
        لیست پست‌ها
      </Typography>
      {posts.map((post: any) => (
        <Card key={post.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2">{post.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
export default PostList;
