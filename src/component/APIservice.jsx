export default class APIService {
    static UpdateArticle(id, body) {
        return fetch(`https://vercel.com/ngigi1234s-projects/blogbackend45/8YDEy1YV7aW5qaJuVdqMt1AbqFJq/update/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(resp => resp.json())
    }

    static InsertArticle(body) {
        return fetch(`https://vercel.com/ngigi1234s-projects/blogbackend45/8YDEy1YV7aW5qaJuVdqMt1AbqFJq/add`, {
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
        return fetch(`https://vercel.com/ngigi1234s-projects/blogbackend45/8YDEy1YV7aW5qaJuVdqMt1AbqFJq/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
    }
}
