
import { fetchGitHubUser, fetchGitHubRepos } from './githubApi.js';
import { showLoading, showProfile, clearProfile } from './profileDom.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value.trim();
    if (!userName) {
        alert('Por favor, insira um nome de usuário do GitHub.');
        return;
    }
    showLoading(profileResults);
    try {
        const userData = await fetchGitHubUser(userName);
        const userRepos = await fetchGitHubRepos(userName);
        console.log(userRepos);
        

        showProfile(profileResults, userData, userRepos);
    } catch (error) {
        console.error('Erro ao buscar o usuário:', error);
        alert('Usuário não encontrado ou erro na busca. Por favor, tente novamente.');
        clearProfile(profileResults);
    }
});