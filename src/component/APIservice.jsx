export default class APIService {
    static UpdateArticle(id, body) {
        return fetch(`http://127.0.0.1:5000/update/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }

    static InsertArticle(body) {
        return fetch(`https://front-tan-xi.vercel.app/add`, {
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
            console.error('There was a problem with your fetch operation:', error);
        });
    }
    

    static DeleteArticle(id) {
        return fetch(`http://127.0.0.1:5000/delete/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
    }
}