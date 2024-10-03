import React, { useState } from 'react';
import './App.css';

function App() {
  const initialBlogs = [
    { id: 1, title: 'First Post', content: 'This is my first post.' },
    { id: 2, title: 'Second Post', content: 'This is my second post.' }
  ];

  const [blogs, setBlogs] = useState(initialBlogs);
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });
  const [editingBlog, setEditingBlog] = useState(null);

  const handleAddBlog = () => {
    if (newBlog.title && newBlog.content) {
      setBlogs([...blogs, { id: blogs.length + 1, ...newBlog }]);
      setNewBlog({ title: '', content: '' });
    }
  };

  const handleDeleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
  };

  const handleSaveEdit = () => {
    setBlogs(blogs.map(blog => blog.id === editingBlog.id ? editingBlog : blog));
    setEditingBlog(null);
  };

  return (
    <div className="App">
      <h1>Stylish Blog CRUD</h1>

      {/* Display Blogs */}
      <h2>Blog Posts</h2>
      <ul>
        {blogs.length ? (
          blogs.map(blog => (
            <li key={blog.id}>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
              </div>
              <div className="blog-actions">
                <button onClick={() => handleEditBlog(blog)}>Edit</button>
                <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
              </div>
            </li>
          ))
        ) : (
          <p className="no-blogs">No blogs available. Add some posts!</p>
        )}
      </ul>

      {/* Add New Blog */}
      <div className="form-container">
        <h2 className="form-title">Add New Blog</h2>
        <input
          type="text"
          placeholder="Blog Title"
          value={newBlog.title}
          onChange={e => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <textarea
          placeholder="Blog Content"
          value={newBlog.content}
          onChange={e => setNewBlog({ ...newBlog, content: e.target.value })}
        />
        <button onClick={handleAddBlog}>Add Blog</button>
      </div>

      {/* Edit Blog */}
      {editingBlog && (
        <div className="edit-container">
          <h2 className="form-title">Edit Blog</h2>
          <input
            type="text"
            value={editingBlog.title}
            onChange={e => setEditingBlog({ ...editingBlog, title: e.target.value })}
          />
          <textarea
            value={editingBlog.content}
            onChange={e => setEditingBlog({ ...editingBlog, content: e.target.value })}
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button className="cancel" onClick={() => setEditingBlog(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default App;
