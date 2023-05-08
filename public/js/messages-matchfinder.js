//todo wow now this is a terrible name o_O
const socket = io();

function attachLikeButtonListeners() {
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            let star;
            if (e.target.tagName === 'SPAN') {
                star = e.target;
            } else {
                star = e.target.querySelector('span');
            }

            const counter = button.nextElementSibling;
            const postId = button.getAttribute('data-post-id');
            const userId = document.getElementById('userId').value;

            star.classList.toggle('text-gray-500');
            star.classList.toggle('text-blue-500');

            let likeCount = parseInt(counter.textContent) || 0;
            if (star.classList.contains('text-blue-500')) {
                likeCount++;
            } else {
                likeCount--;
            }
            counter.textContent = likeCount > 0 ? likeCount : '';

            socket.emit('toggleLike', {postId, userId});
        });
    });
}


document.getElementById('messageForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const userId = document.getElementById('userId').value;
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
    const nsfw = document.getElementById('nsfw').checked;
    const roomId = document.getElementById('roomId').value;

    messageInput.value = '';

    socket.emit('postMessage', { userId, message, nsfw, roomId });
});



socket.on('likeToggled', (data) => {
    const likeButton = document.querySelector(`.like-button[data-post-id="${data.postId}"]`);
    const counter = likeButton.nextElementSibling;

    if (data.userId === document.getElementById('userId').value) {
        likeButton.querySelector('span').classList.toggle('text-blue-500');
        likeButton.querySelector('span').classList.toggle('text-gray-500');
    }

    counter.textContent = data.likeCount > 0 ? data.likeCount : '';
});

socket.on('newMessage', (msg) => {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('border-b', 'pb-2', 'mb-2', 'flex', 'items-start', 'transition', 'duration-300', 'ease-in', 'opacity-0');
    messageElement.innerHTML = `
<img src="http://ddragon.leagueoflegends.com/cdn/13.3.1/img/profileicon/${msg.summonerIconId}.png" alt="${msg.nickname}" class="rounded-full w-12 h-12">
<div class="ml-4">
    <p class="font-bold">${msg.nickname}</p>
    <p>${msg.message}</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleString()}</p>
    <button class="like-button focus:outline-none">
    <span class="text-gray-500">⭐️</span>
</button>
<span class="like-counter text-xs"></span>
</div>
`;

    messagesContainer.prepend(messageElement);

    setTimeout(() => {
        messageElement.classList.remove('opacity-0');
        messageElement.classList.add('opacity-100');
    }, 50);

    attachLikeButtonListeners();
});

attachLikeButtonListeners();

const messageInput = document.getElementById('messageInput');
const tweetLength = document.querySelector('.tweet-length');
messageInput.addEventListener('input', () => {
    tweetLength.textContent = messageInput.value.length;
});