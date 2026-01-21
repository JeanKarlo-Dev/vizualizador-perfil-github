# Visualizador de Perfil do GitHub

> Um projeto web simples para buscar e visualizar perfis públicos do GitHub, incluindo informações do usuário e seus repositórios mais recentes.

## ✨ Funcionalidades

- Busca de usuário do GitHub por nome de usuário
- Exibição dos principais dados do perfil: nome, avatar, bio, seguidores, seguindo
- Listagem dos 10 repositórios públicos mais recentes (com estrelas, forks, watchers e linguagem)
- Links diretos para os repositórios
- Busca pode ser feita ao clicar no botão ou pressionando Enter
- Feedback visual de carregamento e mensagens de erro amigáveis

## 🚀 Como usar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Digite o nome de usuário do GitHub desejado e pressione Enter ou clique em "Buscar".
4. Veja as informações do perfil e os repositórios listados na tela.




## 🗂️ Estrutura do Projeto

```
index.html
README.md
src/
  css/
    animations.css
    reset.css
    responsive.css
    styles.css
  js/
    githubApi.js      # Funções para consumir a API do GitHub
    index.js          # Lógica principal e eventos
    profileDom.js     # Manipulação do DOM para exibir dados
```

## 🛠️ Tecnologias Utilizadas

- HTML5 e CSS3 (com responsividade e animações)
- JavaScript (ES6+)
- API pública do GitHub

## 📦 Detalhes Técnicos

- O projeto não utiliza frameworks ou bibliotecas externas além da API do GitHub e ícones Devicon.
- O código está modularizado em funções para facilitar manutenção e entendimento.
- O layout é responsivo e adaptado para diferentes tamanhos de tela.
- O campo de busca aceita Enter ou clique no botão para iniciar a busca.
- Os 10 repositórios mais recentes são exibidos, ordenados por data de criação.

## ⚠️ Limitações

- Apenas perfis públicos podem ser visualizados.
- Limite de requisições da API do GitHub pode ser atingido em uso intenso.
- Não exibe repositórios privados ou informações sensíveis.

## 📋 Endpoints Utilizados

- Perfil: `GET https://api.github.com/users/:username`
- Repositórios: `GET https://api.github.com/users/:username/repos?per_page=10&sort=created`

## 👨‍💻 Como contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature ou correção
3. Envie um pull request

## 📄 Licença

Este projeto é livre para uso educacional.

---
Desenvolvido por Jean Karlo para fins de estudo e prática.