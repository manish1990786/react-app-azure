import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Button, Typography, TextField, Grid, Box } from '@mui/material';
import '../BlogList.css';

const BlogList = ({ blogs, deleteBlog, addBlog }) => {
  const [newBlog, setNewBlog] = useState({ title: '', content: '', image: 'https://picsum.photos/200/300?random=3' });

  const handleAddBlog = (e) => {
    e.preventDefault();
    if (newBlog.title && newBlog.content) {
      addBlog(newBlog);
      setNewBlog({ title: '', content: '', image: 'https://picsum.photos/200/300?random=' + (blogs.length + 1) });
    }
  };

  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        Blog Posts
      </Typography>
      <Grid container spacing={4}>
        {blogs.map(blog => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt={blog.title}
              />
              <CardContent>
                <Typography variant="h5">{blog.title}</Typography>
                <Button variant="contained" color="primary" component={Link} to={`/blog/${blog.id}`} sx={{ mr: 1 }}>
                  View
                </Button>
                <Button variant="contained" color="error" onClick={() => deleteBlog(blog.id)}>
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add New Blog Form */}
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Add New Blog
        </Typography>
        <form onSubmit={handleAddBlog}>
          <TextField
            label="Blog Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={newBlog.title}
            onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            required
          />
          <TextField
            label="Blog Content"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={newBlog.content}
            onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
            required
          />
          <Button variant="contained" color="success" type="submit" fullWidth>
            Add Blog
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default BlogList;
