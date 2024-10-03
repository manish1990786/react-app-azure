import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import './App.css';
import { Container } from '@mui/material';

function App() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'First Post', content: 'This is my first post.', image: 'https://picsum.photos/200/300?random=1' },
    { id: 2, title: 'Second Post', content: 'This is my second post.', image: 'https://picsum.photos/200/300?random=2' }
  ]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);
  };

  const deleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<BlogList blogs={blogs} deleteBlog={deleteBlog} addBlog={addBlog} />} />
          <Route path="/blog/:id" element={<BlogDetail blogs={blogs} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
