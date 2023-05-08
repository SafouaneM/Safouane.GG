//todo actual good reccomendation by chatgpt to merge userSearch anf createRoom
// userSearch.js
const searchInput = document.getElementById('floating_search_user');
const suggestionsList = document.getElementById('suggestions_list');
const selectedUsersContainer = document.getElementById('selected_users_container');

let selectedUsers = [];

const updateSelectedUsers = (user) => {
    const userElement = document.createElement('span');
    userElement.className = 'user-selected';
    userElement.textContent = `${user.nickname} (${user.email})`;

    selectedUsersContainer.appendChild(userElement);
};

const updateSuggestionsList = (users) => {
    suggestionsList.innerHTML = '';

    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.className = 'user-suggestion cursor-pointer';
        userElement.textContent = `${user.nickname} (${user.email})`;
        userElement.dataset.userId = user.id;

        userElement.addEventListener('click', () => {
            if (!selectedUsers.includes(user.id)) {
                selectedUsers.push(user.id);
                updateSelectedUsers(user);
            }
        });

        suggestionsList.appendChild(userElement);
    });
};

