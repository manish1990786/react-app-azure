import React, { useState } from 'react';

function App() {
  // Initial blog posts
  const initialBlogs = [
    { id: 1, title: 'First Post', content: 'This is my first post.' },
    { id: 2, title: 'Second Post', content: 'This is my second post.' }
  ];

  const [blogs, setBlogs] = useState(initialBlogs);
  const [newBlog, setNewBlog] = useState({ title: '', content: '' });
  const [editingBlog, setEditingBlog] = useState(null);

  // Create a new blog post
  const handleAddBlog = () => {
    if (newBlog.title && newBlog.content) {
      setBlogs([...blogs, { id: blogs.length + 1, ...newBlog }]);
      setNewBlog({ title: '', content: '' }); // Reset input fields
    }
  };

  // Delete a blog post
  const handleDeleteBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  // Start editing a blog post
  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
  };

  // Save the edited blog post
  const handleSaveEdit = () => {
    setBlogs(blogs.map(blog => blog.id === editingBlog.id ? editingBlog : blog));
    setEditingBlog(null); // Stop editing
  };

  return (
    <div className="App">
      <h1>Simple Blog CRUD</h1>

      {/* Display Blogs */}
      <h2>Blog Posts</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <button onClick={() => handleEditBlog(blog)}>Edit</button>
            <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Add New Blog */}
      <h2>Add New Blog</h2>
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

      {/* Edit Blog */}
      {editingBlog && (
        <div>
          <h2>Edit Blog</h2>
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
          <button onClick={() => setEditingBlog(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default App;
