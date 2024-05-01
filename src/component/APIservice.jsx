export default class APIService {
    static UpdateArticle(id, body) {
      return fetch(`blogbackend-azure.vercel.app/Articles/${id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .catch(error => {
          console.error('Error updating article:', error);
          throw error; 
        });
    }
  
    static InsertArticle(body) {
      return fetch('blogbackend-azure.vercel.app/Articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then(resp => {
          if (!resp.ok) {
            throw new Error('Network response was not ok');
          }
          return resp.json();
        })
        .catch(error => {
          console.error('Error inserting article:', error);
          throw error; 
        });
    }
  
    static DeleteArticle(id) {
      return fetch(`blogbackend-azure.vercel.app/Articles/${id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(resp => resp.json())
        .catch(error => {
          console.error('Error deleting article:', error);
          throw error; 
        });
    }
  }
  