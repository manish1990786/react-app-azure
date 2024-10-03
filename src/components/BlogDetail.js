import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import '../BlogDetail.css';

const BlogDetail = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) return <div>Blog not found!</div>;

  return (
    <Box my={4}>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={blog.image}
          alt={blog.title}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {blog.title}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {blog.content}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogDetail;
