// Funções para manipulação do DOM relacionadas ao perfil

export function showLoading(element) {
  element.innerHTML = '<p class="loading">Carregando...</p>';
}

export function showProfile(element, userData) {
  element.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.name}" class="profile-avatar"/>
      <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio ? userData.bio : 'Não possui bio cadastrada 🥹.'}</p>
      </div>
    </div>
    <div class="profile-counters">
      <div class="followers">
        <h4>👥Seguidores</h4>
        <span>${userData.followers}</span>
      </div>
      <div class="following">
        <h4>👥Seguindo</h4>
        <span>${userData.following}</span>
      </div>
    </div>
  `;
}

export function clearProfile(element) {
  element.innerHTML = '';
}
