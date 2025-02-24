import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../blogData';
import bgImage from '../assets/ai-background.jpg';

const Blog = () => {
  const { id } = useParams();
  const post = blogData.find((post) => post.id === id);

  if (!post) {
    return <div>Blog post not found!</div>;
  }

  return (
    <div 
      className="blog-container"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        lineHeight: 1.8,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <style>
        {`

          .blog-header {
            margin-bottom: 40px;
            text-align: center;
          }

          .blog-header h1 {
            font-size: 48px; /* Increased font size */
            margin: 48px 0 24px;
            border-bottom: 2px solid #00c2ff;
            padding-bottom: 12px;
          }

          .blog-meta {
            font-size: 16px;
            color: #888;
            margin: 20px 0;
          }

          .blog-content {
            font-size: 18px;
          }

          .blog-content p {
            margin: 24px 0;
            color: #ffffff;
          }

          .blog-content ul,
          .blog-content ol {
            margin: 24px 0;
            padding-left: 24px;
            list-style: disc;
          }

          .blog-content li {
            margin: 12px 0;
            color: #ffffff;
            padding-left: 8px;
          }

          .blog-content li::marker {
            color: #00c2ff;
          }

          .blog-content h2 {
            font-size: 28px;
            margin: 40px 0 20px;
            border-bottom: 2px solid #00c2ff;
            padding-bottom: 10px;
          }

          .blog-content h3 {
            font-size: 24px;
            margin: 32px 0 16px;
            border-bottom: 1px solid #00c2ff;
            padding-bottom: 8px;
          }

          a {
            color: #00c2ff;
            text-decoration: none;
            transition: color 0.2s;
          }

          a:hover {
            color: #66d9ff;
          }

          hr {
            border: none;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            margin: 40px 0;
          }
        `}
      </style>
      {/* Render the content dynamically */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default Blog;
