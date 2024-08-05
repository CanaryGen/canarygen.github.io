document.addEventListener('DOMContentLoaded', function() {
    const username = 'CanaryGen';
    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const repositoriesContainer = document.getElementById('repositories');
            data.forEach(repo => {
                const repoElement = document.createElement('div');
                repoElement.className = 'repository';
                repoElement.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || '(￣﹃￣)'}</p>
                    <a href="${repo.html_url}" target="_blank">Сheck on GitHub</a>
                `;
                repositoriesContainer.appendChild(repoElement);
            });
        })
        .catch(error => {
            console.error('Your ass has been broken. Why?: ', error);
        });
});
