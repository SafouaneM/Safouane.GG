const socket = io();

const error = document.querySelector('#error');

let reconnectionAttempts = 0;

socket.on('connect', () => {
    console.log('Socket is connected');
    error.textContent = '';
    error.style.display = 'none';
});

socket.on('disconnect', () => {
    console.log('Socket is disconnected');
    error.textContent = 'You are disconnected';
    error.style.display = 'block';
});

socket.on('reconnecting', (attemptNumber) => {
    console.log('Attempting to reconnect', attemptNumber);
    reconnectionAttempts = attemptNumber;
});


// Check the socket connection every 5 seconds
setInterval(() => {
    if (socket.connected) {
        console.log('Socket is connected');
        error.style.display = 'none';
    } else {
        console.log('Socket is disconnected');
        error.textContent = 'You are disconnected';
        error.style.display = 'block';
    }
}, 5000);