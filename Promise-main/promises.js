document.getElementById('fetchData').addEventListener('click', () => {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Loading...';

 
    const fetchData = new Promise((resolve, reject) => {
        const timeout = setTimeout(() => reject('Operation timed out.'), 5000);

        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                clearTimeout(timeout);
                resolve(data);
            })
            .catch(error => {
                clearTimeout(timeout);
                reject('An error occurred: ' + error.message);
            });
    });

    
    fetchData
        .then(data => {
            resultDiv.textContent = JSON.stringify(data.posts, null, 2);
        })
        .catch(error => {
            resultDiv.textContent = error;
        });
});
