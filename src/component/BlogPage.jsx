import React, { useState, useEffect } from 'react';
import ArticleList from './ArticleList';
import Form from './Form';
import InsertArticle from './APIservice'; 

const BlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [editedArticle, setEditedArticle] = useState(null);

  useEffect(() => {
    fetchArticles(); 
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('blogbackend-azure.vercel.app/Articles', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setArticles(data);
      setError(null); 
    } catch (error) {
      console.error('Error fetching articles:', error);
      setError('Error fetching articles. Please try again.'); 
    }
  };

  const editArticle = (article) => {
    setEditedArticle(article);
  };

  const updatedData = (article) => {
    const newArticles = articles.map((myArticle) =>
      myArticle.id === article.id ? article : myArticle
    );
    setArticles(newArticles);
  };

  const openForm = () => {
    setEditedArticle({
      title: '',
      body: ''
    });
  };

  const insertedArticle = async (article) => {
    try {
      const newArticle = await InsertArticle(article);
      setArticles([...articles, newArticle]);
    } catch (error) {
      console.error('Error inserting article:', error);
    }
  };

  const deleteArticle = (article) => {
    const newArticles = articles.filter((myArticle) => myArticle.id !== article.id);
    setArticles(newArticles);
  };

  return (
    <div className="my-10 space-y-14">
      <div className="mx-10 lg:mx-72 flex flex-col gap-5 justify-center text-justify items-center">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-center">All Pulse Blog</h1>
        </div>
        <span className="text-2xl md:text-4xl font-gara font-bold self-start">
          Create Your Blog...
        </span>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={openForm}>
            Click here to create a new blog
          </button>
        </div>
        <ArticleList articles={articles} editArticle={editArticle} deleteArticle={deleteArticle} />
        {editedArticle && <Form article={editedArticle} updatedData={updatedData} insertedArticle={insertedArticle} />}
      </div>
    </div>
  );
};

export default BlogPage;
