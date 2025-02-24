import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../blogData';

const Blogs = () => {
  return (
    <div className="blogs-container">
      <style>
        {`
          .blogs-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            color: #ffffff;
            font-family: 'Arial', sans-serif;
          }

          .blog-preview {
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }

          .blog-preview h2 {
            font-size: 24px;
            margin-bottom: 10px;
            color: #00c2ff;
          }

          .blog-preview p {
            font-size: 16px;
            line-height: 1.6;
            color: #bbb;
          }

          .blog-preview a {
            color: #00c2ff;
            text-decoration: none;
            font-weight: bold;
          }

          .blog-preview a:hover {
            text-decoration: underline;
          }
        `}
      </style>
      <h1>Blog Posts</h1>
      {blogData.map((post) => (
        <div className="blog-preview" key={post.id}>
          <h2>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.metaDescription}</p>
          <Link to={`/blog/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
