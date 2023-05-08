const searchInput = document.getElementById('floating_search_user');


document.getElementById('createRoomForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const roomName = document.getElementById('room_name').value;
    const isPrivate = document.getElementById('room_private').checked;
    const roomPassword = isPrivate ? document.getElementById('room_password').value : null;
    const userId = document.getElementById('userId').value;
    const size = document.getElementById('room_size').value;

    const formData = new FormData(e.target);
    formData.append('userId', userId);
    formData.append('roomName', roomName);
    formData.append('isPrivate', isPrivate);
    formData.append('roomPassword', roomPassword);
    formData.append('size', size);
    formData.append('invitees', JSON.stringify(selectedUsers));

    const response = await fetch('/create-room', {
        method: 'POST',
        body: formData,
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
