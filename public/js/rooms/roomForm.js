const searchInput = document.getElementById('floating_search_user');
const suggestionsList = document.getElementById('suggestions_list');
const selectedUsersContainer = document.getElementById('selected_users_container');

let selectedUsers = [];

const updateSelectedUsers = (user) => {
    const userElement = document.createElement('span');
    userElement.className = 'user-selected';
    userElement.textContent = `${user.nickname} (${user.email})`;

    selectedUsersContainer.appendChild(userElement);

    console.log('Selected users container:', selectedUsersContainer); // Add this line
};

const updateSuggestionsList = (users) => {
    suggestionsList.innerHTML = '';

    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.className = 'user-suggestion-container'; // Change the class name

        const userSuggestion = document.createElement('div');
        userSuggestion.className = 'user-suggestion cursor-pointer';
        userSuggestion.textContent = `${user.nickname} (${user.email})`;
        userSuggestion.dataset.userId = user.id;

        userElement.appendChild(userSuggestion); // Append the user suggestion element to the container
        suggestionsList.appendChild(userElement);
    });
};

//start niet zelf op gekomen start klikken werkte gwn niet idk why
suggestionsList.addEventListener('click', (e) => {
    console.log("Suggestion clicked:", e.target);
    const userElement = e.target.closest('.user-suggestion');
    if (userElement) {
        console.log("Selected users before update:", selectedUsers);
        const userId = userElement.dataset.userId;
        const user = {
            id: userId,
            nickname: userElement.textContent.split(' (')[0],
            email: userElement.textContent.split('(')[1].split(')')[0],
        };

        if (!selectedUsers.some(selectedUser => selectedUser.id === user.id)) {
            selectedUsers.push(user);
            updateSelectedUsers(user);
        }
        console.log("Selected users after update:", selectedUsers);
    }
});

//end niet zelf op gekomen start klikken werkte gwn niet idk why


document.getElementById('createRoomForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const roomName = document.getElementById('room_name').value;
    const isPrivate = document.getElementById('room_private').checked;
    const roomPassword = isPrivate ? document.getElementById('room_password').value : null;
    const userId = document.getElementById('userId').value;
    const size = document.getElementById('room_size').value;

    const requestBody = {
        userId,
        roomName,
        isPrivate,
        roomPassword,
        size,
        invitees: selectedUsers.map(user => user.id),
    };

    const response = await fetch('/create-room', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    });

    if (response.ok) {
        const data = await response.json();
        window.location.href = `/room/${data.roomId}`;
    } else {
        // Handle the error
        console.error('Error creating the room');
    }
});


searchInput.addEventListener('input', async () => {
    const searchQuery = searchInput.value.trim();

    if (searchQuery.length > 0) {
        const response = await fetch(`/search_users?q=${searchQuery}`);
        const users = await response.json();
        updateSuggestionsList(users);
    } else {
        suggestionsList.innerHTML = '';
    }
});
