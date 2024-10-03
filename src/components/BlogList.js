import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = () => {
  const initialBlogs = [
    { id: 1, title: 'First Post', content: 'This is my first post.', image: 'https://picsum.photos/200/300?random=1' },
    { id: 2, title: 'Second Post', content: 'This is my second post.', image: 'https://picsum.photos/200/300?random=2' },
    { id: 3, title: 'Third Post', content: 'This is my third post.', image: 'https://picsum.photos/200/300?random=3' }
  ];

  const [blogs] = useState(initialBlogs);

  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog.id}>
              <td><img src={blog.image} alt={blog.title} className="blog-image" /></td>
              <td>{blog.title}</td>
              <td><Link to={`/blog/${blog.id}`}>View</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
