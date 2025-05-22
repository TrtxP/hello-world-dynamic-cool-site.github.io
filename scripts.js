function changeTheme() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
}
        function showMessage() {
            const messages = [
                "You're awesome!",
                "Keep up the great work!",
                "Coding is fun!",
                "Have a fantastic day!",
                "Stay positive and code on!"
            ];

            const randomIndex = Math.floor(Math.random() * messages.length);
            const messageBox = document.getElementById('messageBox');

            messageBox.textContent = messages[randomIndex];

            messageBox.style.opacity = '1';

            setTimeout(() => {
                messageBox.style.opacity = '0';
            }, 1300);

            setTimeout(() => {
                messageBox.textContent = '';
            }, 1500);

            messageBox.classList.add('fade-in');

            setTimeout(() => {
                messageBox.classList.remove('fade-in');
                messageBox.style.opacity = '0';
            },1300);
        }