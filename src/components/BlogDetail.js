import React from 'react';
import { useParams } from 'react-router-dom';
import '../BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
  const blogs = [
    { id: 1, title: 'First Post', content: 'This is my first post.', image: 'https://picsum.photos/600/400?random=1' },
    { id: 2, title: 'Second Post', content: 'This is my second post.', image: 'https://picsum.photos/600/400?random=2' },
    { id: 3, title: 'Third Post', content: 'This is my third post.', image: 'https://picsum.photos/600/400?random=3' }
  ];

  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) return <div>Blog not found!</div>;

  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <img src={blog.image} alt={blog.title} className="blog-image-large" />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
